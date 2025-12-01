<script lang="ts">
  import {
    CalendarDate,
  } from "@internationalized/date";
  import { Button, buttonVariants } from '$lib/components/shadcn-ui/button';
	import * as Dialog from '$lib/components/shadcn-ui/dialog';
  import type { DateRange } from 'bits-ui';
	import { generateIcalStudy } from "$lib/util/ical/generator";
	import { ScheduleItem, SemesterInfo } from "$lib/types";
	import SetRepeatingRange from "$lib/components/study/generate-calendar/set-repeating-range.svelte";

  let { schedule: schedule }: { schedule: ScheduleItem[]} = $props();

  const today = new Date();

  let dateRange: DateRange = $state({
    start: new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate()),
    end: new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate())
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
    <SetRepeatingRange {dateRange} />


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
