<script lang="ts">
	import type { ExamSchedule, PersonalInfo } from '$lib/util/scraper/exam-schedule';
	import { toPng } from 'html-to-image';
	import { onMount } from 'svelte';

  import * as Table from "$lib/components/shadcn-ui/table";
	import Button from '$lib/components/shadcn-ui/button/button.svelte';
	import { Download } from '@lucide/svelte';
	import { toTitleCase } from '$lib/util/string';

  export let schedule: ExamSchedule[];
  export let personalInfo: PersonalInfo;
  export let originalTable: HTMLDivElement;

  let form: HTMLFormElement;
  let table: HTMLDivElement;
  let downloading = false;
  let useNewDesign = true;
  let originalTableContainer: HTMLDivElement;

  $: if (originalTableContainer && originalTable && !useNewDesign) {
    while (originalTableContainer.firstChild) {
      originalTableContainer.removeChild(originalTableContainer.firstChild);
    }
    originalTableContainer.appendChild(originalTable);
  }

	const download = async () => {
		downloading = true;
		const elementToCapture = useNewDesign ? table : originalTableContainer;
		const dataUrl = await toPng(elementToCapture);
		downloading = false;
		const link = document.createElement('a');
		link.download = 'Exam Schedule.png';
		link.href = dataUrl;
		link.click();
	};
</script>

{#if useNewDesign}
  <div class="p-16 space-y-4" bind:this={table}>
    <h1 class="font-bold text-2xl">Exam Schedule</h1>

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
