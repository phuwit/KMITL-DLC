<script lang="ts">
  import {
    CalendarDate,
    DateFormatter,
    type DateValue,
    getLocalTimeZone
  } from "@internationalized/date";
  import { Button, buttonVariants } from '$lib/components/shadcn-ui/button';
	import * as Dialog from '$lib/components/shadcn-ui/dialog';
  import * as Accordion from '$lib/components/shadcn-ui/accordion';
	import * as Popover from '$lib/components/shadcn-ui/popover';
	import { Switch } from '$lib/components/shadcn-ui/switch';
	import { Label } from '$lib/components/shadcn-ui/label';
  import { settings } from '$lib/components/calendar/settings';
  import { RangeCalendar } from "$lib/components/shadcn-ui/range-calendar";
  import type { DateRange } from 'bits-ui';
  import { cn } from '$lib/util/shadcn-ui';
	import { CalendarIcon, LoaderCircle } from "@lucide/svelte";
	import { generateIcalStudy } from "$lib/util/ical/generator";
	import { ScheduleItem, SemesterInfo } from "$lib/types";

  let { schedule: schedule }: { schedule: ScheduleItem[]} = $props();

  const df = new DateFormatter("en-US", {
    dateStyle: "medium"
  });

  const today = new Date();
  let startDate: DateValue | undefined = $state(undefined);

  let dateRange: DateRange = $state({
    start: new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate()),
    end: new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate())
  });
  let disableDateRangeSelector = $state(true);

  fetch('https://regis.reg.kmitl.ac.th/api/?function=get-year-semester-now&level_id=1').then(async (response) => {
    const semesterInfo: SemesterInfo = await response.json();
    const semesterStart = new Date(semesterInfo.START_DATETIME_ACADEMIC);
    const semesterEnd = new Date(semesterInfo.END_DATETIME_ACADEMIC);
    dateRange.start = new CalendarDate(semesterStart.getFullYear(), semesterStart.getMonth() + 1, semesterStart.getDate());
    dateRange.end = new CalendarDate(semesterEnd.getFullYear(), semesterEnd.getMonth() + 1, semesterEnd.getDate());
    disableDateRangeSelector = false;
  });
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'default' })}>Generate Calendar</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Generate Calendar</Dialog.Title>
			<!-- <Dialog.Description>
				Make changes to your profile here. Click save when you're done.
			</Dialog.Description> -->
		</Dialog.Header>

    <h3>Set repeating range</h3>
    <div class="grid gap-2">
      <Popover.Root>
        <Popover.Trigger
          class={cn(
            buttonVariants({ variant: "outline" }),
            !dateRange && "text-muted-foreground"
          )}
          disabled={disableDateRangeSelector}
        >
          {#if disableDateRangeSelector}
            <LoaderCircle class="mr-2 size-4 animate-spin" />
          {:else}
            <CalendarIcon class="mr-2 size-4" />
          {/if}
          {#if dateRange && dateRange.start}
            {#if dateRange.end}
              {df.format(dateRange.start.toDate(getLocalTimeZone()))} - {df.format(
                dateRange.end.toDate(getLocalTimeZone())
              )}
            {:else}
              {df.format(dateRange.start.toDate(getLocalTimeZone()))}
            {/if}
          {:else if startDate}
            {df.format(startDate.toDate(getLocalTimeZone()))}
          {:else}
            Pick a date
          {/if}
        </Popover.Trigger>
        <Popover.Content class="w-auto p-0" align="start">
          <RangeCalendar
            bind:value={dateRange}
            onStartValueChange={(v) => {
              startDate = v;
            }}
            numberOfMonths={2}
          />
        </Popover.Content>
      </Popover.Root>
    </div>
    {#if disableDateRangeSelector}
      <p>Fetching current semester information...</p>
    {/if}

		<!-- <Accordion.Root type="single">
      <Accordion.Item value="options-accordion">
        <Accordion.Trigger>Options</Accordion.Trigger>
        <Accordion.Content>
          {#each settings as { id, label, value }}
            <div class="flex items-center space-x-2">
              <Switch bind:checked={value} id={id} />
              <Label for={id}>{label}</Label>
            </div>
          {/each}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root> -->
    <Dialog.Footer>
      <Button onclick={() => generateIcalStudy(schedule, dateRange)}>Generate</Button>
    </Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
