<script lang="ts">
	import type { ExamSchedule, PersonalInfo } from '$lib/util/scraper/exam-schedule';
	import { toPng } from 'html-to-image';

  import * as Table from "$lib/components/shadcn-ui/table";
  import * as Select from "$lib/components/shadcn-ui/select";
	import Button from '$lib/components/shadcn-ui/button/button.svelte';
	import { Download } from '@lucide/svelte';
	import { toTitleCase } from '$lib/util/string';

  let { schedule, personalInfo, originalTable }:
  { schedule: ExamSchedule[], personalInfo: PersonalInfo, originalTable: HTMLDivElement} = $props();

  let form: HTMLFormElement | undefined = $state(undefined);
  let table: HTMLDivElement | undefined = $state(undefined);
  let downloading = $state(false);
  let useNewDesign = $state(true);
  let originalTableContainer: HTMLDivElement | undefined = $state(undefined);

  $effect(() => {
    if (originalTableContainer && originalTable && !useNewDesign) {
      while (originalTableContainer.firstChild) {
        originalTableContainer.removeChild(originalTableContainer.firstChild);
      }
      originalTableContainer.appendChild(originalTable);
    }
  });

  const download = async () => {
    downloading = true;
    const elementToCapture = useNewDesign ? table : originalTableContainer;

    if (!elementToCapture) {
      throw new Error('Failed to bind table to screenshot');
    }

    const dataUrl = await toPng(elementToCapture);
    downloading = false;
    const link = document.createElement('a');
    link.download = 'Exam Schedule.png';
    link.href = dataUrl;
    link.click();
  };


  const examPeriods = [
    { value: "M", label: "Midterm" },
    { value: "F", label: "Final" },
  ];

  let examPeriodSelectValue = $state(personalInfo.term);

  const examPeriodTriggerLabel = $derived(
    examPeriods.find((f) => f.value === examPeriodSelectValue)?.label ?? "Select an exam period"
  );

  $effect(() => {
    if (examPeriodSelectValue != personalInfo.term) {
      examPeriodSelectValue && form?.submit();
    }
  });
</script>

{#if useNewDesign}
  <div class="p-16 space-y-4" bind:this={table}>
    <h1 class="font-bold text-2xl">Exam Schedule</h1>
    <form
    bind:this={form}
      action="report_examtable_show.php"
      method="post"
    >
      <input type="hidden" name="year" id="year" value={personalInfo.year} />
      <input type="hidden" name="semester" id="semester" value={personalInfo.semester} />
      <input type="hidden" name="student_id" id="student_id" value={personalInfo.studentId} />
      {#if !downloading}
        <Select.Root type="single" name="mid_or_final" bind:value={examPeriodSelectValue}>
          <Select.Trigger class="w-[180px]">{examPeriodTriggerLabel}</Select.Trigger>
          <Select.Content>
            <Select.Item value="M" label="Midterm" />
            <Select.Item value="F" label="Final" />
          </Select.Content>
        </Select.Root>
        <!-- <select name="mid_or_final" class="bg-slate-100" value={personalInfo.term}>
          <option value="M">Midterm</option>
          <option value="F">Final</option>
        </select> -->
      {:else}
        <span>
          {personalInfo.term === 'M' ? 'Midterm' : 'Final'}
        </span>
      {/if}
    </form>

    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Date</Table.Head>
          <Table.Head>Time</Table.Head>
          <Table.Head>Class ID</Table.Head>
          <Table.Head class="w-full">Class Name</Table.Head>
          <Table.Head>Section</Table.Head>
          <Table.Head>Credits</Table.Head>
          <Table.Head>Type</Table.Head>
          <Table.Head>Location</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body class="whitespace-nowrap">
        {#each schedule as schedule, scheduleIndex}
          {#each schedule.subjects as subject, subjectIndex}
          <Table.Row>
            <Table.Cell>
              {#if schedule.date}
                    {new Date(schedule.date).toLocaleDateString(undefined, {
                      weekday: 'short',
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  {:else}
                    <span>N/A</span>
                  {/if}
            </Table.Cell>
            <Table.Cell>
              {#if subject.startTime && subject.endTime}
                {new Date(subject.startTime).toLocaleTimeString(undefined, {
                  hour: '2-digit',
                  minute: '2-digit',
                })} - {new Date(subject.endTime).toLocaleTimeString(undefined, {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              {:else}
                <span>N/A</span>
              {/if}
            </Table.Cell>
            <Table.Cell>
              {subject.subjectCode}
            </Table.Cell>
            <Table.Cell>
              {toTitleCase(subject.subjectName)}
            </Table.Cell>
            <Table.Cell>
              {subject.sec}
            </Table.Cell>
            <Table.Cell>
              {subject.credit}
            </Table.Cell>
            <Table.Cell>
              {subject.examType}
            </Table.Cell>
            <Table.Cell class="whitespace-normal">
              {subject.room}
            </Table.Cell>
          </Table.Row>
          {/each}
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
{:else}
    <div bind:this={originalTableContainer}></div>
{/if}

<div class="fixed bottom-4 right-4 flex gap-2">
  <Button
    onclick={download}
  >
    <Download />
  </Button>
	<Button
		onclick={() => (useNewDesign = !useNewDesign)}
	>
		{useNewDesign ? 'New Design' : 'Old Design'}
	</Button>
</div>
