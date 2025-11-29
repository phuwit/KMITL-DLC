<script lang="ts">
	import type { ScheduleItem } from "$lib/types";

	let { scheduleItem, cssBackgroundColor }: {
		scheduleItem: ScheduleItem,
    cssBackgroundColor: string
	} = $props();
</script>

<div style="background-color: {cssBackgroundColor};">
  <div>
    <p>{scheduleItem.start}-{scheduleItem.end}</p>
  </div>
  <div>
    <p>{scheduleItem.subjectName}</p>
  </div>
  <div>
    <p>{scheduleItem.building}: {scheduleItem.room}</p>
    <p>{scheduleItem.type}</p>
    <p>{scheduleItem.sec}</p>
  </div>
</div>