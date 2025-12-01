<script lang="ts">
  import {
    CalendarDate,
    DateFormatter,
    type DateValue,
    getLocalTimeZone
  } from "@internationalized/date";
  import { buttonVariants } from '$lib/components/shadcn-ui/button';
	import * as Popover from '$lib/components/shadcn-ui/popover';
  import { RangeCalendar } from "$lib/components/shadcn-ui/range-calendar";
  import type { DateRange } from 'bits-ui';
  import { cn } from '$lib/util/shadcn-ui';
	import { CalendarIcon, LoaderCircle } from "@lucide/svelte";
	import { ScheduleItem, SemesterInfo } from "$lib/types";
	import constants from "$lib/constants";

  let {
    dateRange = $bindable()
  }: {
    dateRange: DateRange
  } = $props();

  const df = new DateFormatter("en-US", {
    dateStyle: "medium"
  });

  let startDate: DateValue | undefined = $state(undefined);
  let disableDateRangeSelector = $state(true);

  fetch(constants.fetchUrls.currentSemesterInfo).then(async (response) => {
    const semesterInfo: SemesterInfo = await response.json();
    const semesterStart = new Date(semesterInfo.START_DATETIME_ACADEMIC);
    const semesterEnd = new Date(semesterInfo.END_DATETIME_ACADEMIC);
    dateRange.start = new CalendarDate(semesterStart.getFullYear(), semesterStart.getMonth() + 1, semesterStart.getDate());
    dateRange.end = new CalendarDate(semesterEnd.getFullYear(), semesterEnd.getMonth() + 1, semesterEnd.getDate());
    disableDateRangeSelector = false;
  });
</script>

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
  {#if disableDateRangeSelector}
    <p>Fetching current semester information...</p>
  {/if}
</div>