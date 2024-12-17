import constants from '$lib/constants';
import type { ScheduleItem } from '$lib/types';
import { getSemesterInfo } from '$lib/utils/scraper/semester-info';
import { saveAs } from 'file-saver';
import ical, { ICalEventRepeatingFreq, type ICalEventData } from 'ical-generator';

export function getDayIndexOfWeek(date: Date, dayIndex: number): Date {
	const day = date.getDay();
	const offset = dayIndex - day;
	const adjestedDate = new Date(date.getTime() + offset * (1000 * 3600 * 24));
	return adjestedDate;
}

export async function generateIcalStudy(scheduleItems: ScheduleItem[]) {
	const semesterInfo = await getSemesterInfo();

	function convertEvent(scheduleItem: ScheduleItem): ICalEventData {
		const event: ICalEventData = {
			summary: `${scheduleItem.subjectName} (${scheduleItem.type})`,
			location: `${scheduleItem.building}:${scheduleItem.room}`,
			start: getDayIndexOfWeek(
				new Date(
					new Date(semesterInfo.starts).setHours(
						Number(scheduleItem.start.slice(0, 2)),
						Number(scheduleItem.start.slice(-2))
					)
				),
				scheduleItem.day
			),
			end: getDayIndexOfWeek(
				new Date(
					new Date(semesterInfo.starts).setHours(
						Number(scheduleItem.end.slice(0, 2)),
						Number(scheduleItem.end.slice(-2))
					)
				),
				scheduleItem.day
			),
			repeating: {
				freq: ICalEventRepeatingFreq.WEEKLY,
				until: semesterInfo.ends
			}
		};
		return event;
	}
	const calendarName = `Study (${constants.appName}@${new Date().toString()})`;
	const calendar = ical({ name: calendarName, prodId: constants.appName });
	scheduleItems.forEach((item) => {
    const event = convertEvent(item);
		calendar.createEvent(event);
	});

	const calendarBlob = new Blob([calendar.toString()], { type: 'text/calendar;charset=utf-8' });
	saveAs(calendarBlob, `${calendarName}.ical`);
}
