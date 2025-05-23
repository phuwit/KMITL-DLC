<script lang="ts">
	import Button from '$lib/components/shadcn-ui/button/button.svelte';
	import IcalGenerate from '$lib/components/calendar/generate-study.svelte';
  import type { ScheduleItem } from '$lib/types';
	import { generateIcalStudy } from '$lib/util/ical/generator';

	export let schedule: ScheduleItem[] = [];
	export let oldTable: HTMLDivElement;
	export let faculty = '';
	export let department = '';
	export let major = '';
	export let semester = '';
	export let year = '';
	export let studentId = '';
	export let studentName = '';
	import { toPng } from 'html-to-image';
	import { Download, Pencil } from '@lucide/svelte';

	const englishDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let newTableContainer: HTMLElement;
	let useNewDesign = true;

	const download = async () => {
		const dataUrl = await toPng(newTableContainer);
		const link = document.createElement('a');
		link.download = 'image.png';
		link.href = dataUrl;
		link.click();
	};

	const color = [
		'#ef4444',
		'#f97316',
		'#f59e0b',
		'#eab308',
		'#84cc16',
		'#22c55e',
		'#10b981',
		'#14b8a6',
		'#06b6d4',
		'#0ea5e9',
		'#3b82f6',
		'#6366f1',
		'#8b5cf6',
		'#a855f7',
		'#d946ef',
		'#ec4899',
		'#f43f5e'
	];

	const makeTheme = () => {
		let theme: {
			subjectId: string;
			subjectName: string;
			color: string;
		}[] = [];
		let usedColor: string[] = [];
		schedule.forEach((item) => {
			let themeColor = color[Math.floor(Math.random() * color.length)];
			while (usedColor.includes(themeColor)) {
				themeColor = color[Math.floor(Math.random() * color.length)];
			}
			const isAlready = theme.find((t) => item.subjectId === t.subjectId);
			if (isAlready) {
				return;
			}
			theme.push({
				subjectId: item.subjectId,
				subjectName: item.subjectName,
				color: themeColor
			});
			usedColor.push(themeColor);
		});
		return theme;
	};
	let theme = makeTheme();

	const getTheme = (subjectId: string) => {
		const filtered = theme.filter((item) => item.subjectId === subjectId);
		if (filtered.length > 0) {
			return filtered[0].color;
		} else {
			return false;
		}
	};

	const createTimeSlot = (dayIndex: number) => {
		interface TimeSlot {
			subjectName: string;
			subjectIndex: number;
			colspan: number;
			color: string;
			info: ScheduleItem;
		}

		const filtered = schedule.filter((item) => item.day === dayIndex);
		const timeSlots: Array<TimeSlot | undefined> = [];
		for (let index = 0; index < 12 * 4; index++) {
			timeSlots.push(undefined);
		}
		filtered.forEach((item, index) => {
			const start = item.start.split(':');
			const end = item.end.split(':');
			const startHour = parseInt(start[0]);
			const startMinute = parseInt(start[1]);
			const endHour = parseInt(end[0]);
			const endMinute = parseInt(end[1]);
			const startSlot = (startHour - 8) * 4 + Math.floor(startMinute / 15);
			const endSlot = (endHour - 8) * 4 + Math.floor(endMinute / 15);
			for (let i = startSlot; i < endSlot; i++) {
				timeSlots[i] = {
					subjectName: item.subjectName,
					subjectIndex: index,
					colspan: endSlot - startSlot,
					color: color[Math.floor(Math.random() * color.length)],
					info: item
				};
			}
		});
		const final: Array<TimeSlot | undefined> = [];
		timeSlots.forEach((item) => {
			if (item === undefined) {
				final.push(undefined);
			} else if (final[final.length - 1] !== undefined) {
				if (final[final.length - 1]?.subjectIndex !== item.subjectIndex) {
					final.push(item);
				}
			} else {
				final.push(item);
			}
		});
		return final;
	};
	let customizeMenu = false;
	let headerColor = '#f97316';
</script>

{#if useNewDesign}
	<div bind:this={newTableContainer} class="flex w-full flex-col justify-center p-5 shadow">
		<div class="w-full rounded-t-lg p-4 text-white" style="background-color: {headerColor};">
			<p class="text-center">{faculty}</p>
			<p class="text-center">{department} {major}</p>
			<p class="text-center">{semester} {year}</p>
			<p class="text-center">{studentId} {studentName}</p>
		</div>
		<table class="h-screen w-full rounded-b-lg bg-white shadow">
			<thead>
				<tr>
					<th class="p-1 font-light"></th>
					<th class="p-1 font-light" colspan="4">08:00 - 09:00</th>
					<th class="p-1 font-light" colspan="4">09:00 - 10:00</th>
					<th class="p-1 font-light" colspan="4">10:00 - 11:00</th>
					<th class="p-1 font-light" colspan="4">11:00 - 12:00</th>
					<th class="p-1 font-light" colspan="4">12:00 - 13:00</th>
					<th class="p-1 font-light" colspan="4">13:00 - 14:00</th>
					<th class="p-1 font-light" colspan="4">14:00 - 15:00</th>
					<th class="p-1 font-light" colspan="4">15:00 - 16:00</th>
					<th class="p-1 font-light" colspan="4">16:00 - 17:00</th>
					<th class="p-1 font-light" colspan="4">17:00 - 18:00</th>
					<th class="p-1 font-light" colspan="4">18:00 - 19:00</th>
					<th class="p-1 font-light" colspan="4">19:00 - 20:00</th>
				</tr>
			</thead>
			<tbody>
				{#each englishDays as dayLabel, index}
					<tr class="h-[14.28571%] hover:bg-slate-100">
						<td class="p-1">{dayLabel}</td>
						{#each createTimeSlot(index) as timeSlot}
							{#if timeSlot === undefined}
								<td class="w-[2.08333%] py-1"></td>
							{:else}
								<td class={`w-[2.08333%] px-0 py-1 text-white`} colspan={timeSlot.colspan}>
									<div
										class={`relative h-full w-full rounded p-1`}
										style={`background-color: ${
											theme ? `${getTheme(timeSlot.info.subjectId)}` : '#64748b'
										}`}
									>
										<p class="absolute top-1 text-xs">
											{timeSlot.info.building ? timeSlot.info.building : ''}
											{timeSlot.info.room ? timeSlot.info.room : ''}
										</p>
										<p class="flex h-full items-center justify-center px-1">
											{timeSlot.subjectName}
										</p>
										<p class="absolute bottom-1 text-xs">
											Section {timeSlot.info.sec} ({timeSlot.info.type})
										</p>
										<p class="absolute bottom-1 right-1 text-xs">
											{timeSlot.info.start} - {timeSlot.info.end}
										</p>
									</div>
								</td>
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<div bind:this={oldTable}></div>
{/if}

<div class="fixed bottom-3 right-3 flex gap-2">
	{#if useNewDesign}
		<div class="relative">
			{#if customizeMenu}
				<div
					class="absolute bottom-[110%] right-0 flex h-56 w-96 flex-col gap-2 overflow-y-auto rounded-lg border bg-white p-4 shadow"
				>
					<div class="flex flex-col gap-2">
						<p class="text-sm">Theme</p>
						<div class="flex items-center gap-2">
							<div class="relative flex flex-col gap-2">
								<p class="text-sm">Header</p>
								<div class="flex gap-2">
									<div>
										<input
											type="color"
											bind:value={headerColor}
											class="absolute h-5 w-5 opacity-0"
										/>
										<div
											class={`h-5 w-5 rounded-full`}
											style={`background-color: ${headerColor}`}
										></div>
									</div>
									<p class="text-sm">Background Color</p>
								</div>
							</div>
						</div>
						{#each theme as item}
							<div class="flex items-center gap-2">
								<div class="relative flex flex-col gap-2">
									<p class="text-sm">{item.subjectName}</p>
									<div class="flex gap-2">
										<div>
											<input
												type="color"
												bind:value={item.color}
												class="absolute h-5 w-5 opacity-0"
											/>
											<div
												class={`h-5 w-5 rounded-full`}
												style={`background-color: ${
													theme ? `${getTheme(item.subjectId)}` : '#64748b'
												}`}
											></div>
										</div>
										<p class="text-sm">Background Color</p>
									</div>
								</div>
							</div>
						{/each}
						<button
							on:click={() => {
								theme = makeTheme();
								headerColor = '#f97316';
							}}
							class=" flex cursor-pointer items-center justify-center rounded-lg bg-orange-500 p-2 text-white transition-all hover:bg-orange-600 active:bg-orange-400"
							>Reset Theme</button
						>
					</div>
				</div>
			{/if}

      <Button
        onclick={() => {customizeMenu = !customizeMenu;}}
      >
        <Pencil />
      </Button>
		</div>
	{/if}
	{#if useNewDesign}
    <Button
      onclick={download}
    >
      <Download />
    </Button>
  {/if}
	<Button
		onclick={() => {
			useNewDesign = !useNewDesign;
		}}
	>
		{useNewDesign ? 'New Design' : 'Old Design'}
	</Button>
	<!-- <button
		class="flex cursor-pointer items-center justify-center rounded-full bg-orange-500 p-2 text-white transition-all hover:bg-orange-600 active:bg-orange-400"
		on:click={async () => {
			await generateIcalStudy(schedule);
		}}
		>Generate iCal
	</button> -->
  <IcalGenerate schedule={schedule}/>
</div>
