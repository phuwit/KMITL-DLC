import constants from '$lib/constants';
import type { ScheduleItem } from '$lib/types';
import { getLocalTimeZone, Time, toCalendarDateTime } from '@internationalized/date';
import { DateRange } from 'bits-ui';
import { saveAs } from 'file-saver';
import ical, { ICalEventRepeatingFreq, type ICalEventData } from 'ical-generator';

export function getDayIndexOfWeek(date: Date, dayIndex: number): Date {
	const day = date.getDay();
	const offset = dayIndex - day;
	const adjestedDate = new Date(date.getTime() + offset * (1000 * 3600 * 24));
	return adjestedDate;
}

export async function generateIcalStudy(scheduleItems: ScheduleItem[], repeatingRange: DateRange) {
	if (!repeatingRange.start || !repeatingRange.end)
		throw new Error('Invalid repeatingRange');

	function convertEvent(scheduleItem: ScheduleItem): ICalEventData {
		const event: ICalEventData = {
			summary: `${scheduleItem.subjectName} (${scheduleItem.type})`,
			location: `${scheduleItem.building}:${scheduleItem.room}`,
			start: getDayIndexOfWeek(
				toCalendarDateTime(
					repeatingRange.start!,
					new Time(Number(scheduleItem.start.slice(0, 2)), Number(scheduleItem.start.slice(-2)))
				).toDate(getLocalTimeZone()),
				scheduleItem.day
			),
			end: getDayIndexOfWeek(
				toCalendarDateTime(
					repeatingRange.start!,
					new Time(Number(scheduleItem.start.slice(0, 2)), Number(scheduleItem.start.slice(-2)))
				).toDate(getLocalTimeZone()),
				scheduleItem.day
			),
			repeating: {
				freq: ICalEventRepeatingFreq.WEEKLY,
				until: repeatingRange.end!.toDate(getLocalTimeZone())
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
