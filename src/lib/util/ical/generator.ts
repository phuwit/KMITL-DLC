import constants from '$lib/constants';
import type { ScheduleItem } from '$lib/types';
import { formatStringFromTemplate, getScheduleItemStringify } from '$lib/util/ical/formatter';
import type { ExamSchedule, ExamSubject } from '$lib/util/scraper/exam-schedule';
import { getLocalTimeZone, Time, toCalendarDateTime } from '@internationalized/date';
import { DateRange } from 'bits-ui';
import { saveAs } from 'file-saver';
import ical, { ICalEventRepeatingFreq, type ICalEventData } from 'ical-generator';
import { storage } from 'webextension-polyfill';

export function getDayIndexOfWeek(date: Date, dayIndex: number): Date {
	const day = date.getDay();
	const offset = dayIndex - day;
	const adjestedDate = new Date(date.getTime() + offset * (1000 * 3600 * 24));
	return adjestedDate;
}

export async function generateIcalStudy(scheduleItems: ScheduleItem[], repeatingRange: DateRange) {
  if (!repeatingRange.start || !repeatingRange.end)
		throw new Error('Invalid repeatingRange');

  const [filenamePattern, summaryPattern, locationPattern]
    = await Promise.all([constants.storage.icalFilenamePattern, constants.storage.icalSummaryPattern, constants.storage.icalLocationPattern]
    .map((e) => {
      return new Promise<string>((resolve) => {
        storage.sync.get(e.key).then((value) => {
          console.log(Object.keys(value).length);
          if (Object.keys(value).length === 0) {
            resolve(e.default);
          } else {
            resolve(String(value[e.key]));
          }
        });
      });
    }));

  function convertScheduleItemToEvent(scheduleItemStringify: Record<string, string>, scheduleItem: ScheduleItem, repeatingRange: DateRange): ICalEventData {
    const event: ICalEventData = {
      summary: formatStringFromTemplate(summaryPattern, scheduleItemStringify, constants.stringFormatPattern),
      location: formatStringFromTemplate(locationPattern, scheduleItemStringify, constants.stringFormatPattern),
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

  const filename = formatStringFromTemplate(filenamePattern, getScheduleItemStringify(scheduleItems[0]), constants.stringFormatPattern);
	const calendar = ical({ name: filename, prodId: constants.appName });
	scheduleItems.forEach((item) => {
		const event = convertScheduleItemToEvent(getScheduleItemStringify(item), item, repeatingRange);
		calendar.createEvent(event);
	});

	const calendarBlob = new Blob([calendar.toString()], { type: 'text/calendar;charset=utf-8' });
	saveAs(calendarBlob, `${filename}.ical`);
}

export async function generateIcalExam(examSchedules: ExamSchedule[]) {
  function convertEvent(subject: ExamSubject): ICalEventData | null {
    if (!subject.startTime || !subject.endTime) return null;

		const event: ICalEventData = {
			summary: `Exam: ${subject.name} (${subject.type})`,
			location: `${subject.location}`,
			start: subject.startTime,
			end:subject.endTime
		};
		return event;
	}

  const calendarName = `Exam (${constants.appName}@${new Date().toString()})`;
	const calendar = ical({ name: calendarName, prodId: constants.appName });
  const subjects = examSchedules.flatMap((examSchedule) => examSchedule.subjects);
	subjects.forEach((subject) => {
		const event = convertEvent(subject);
    if (event) calendar.createEvent(event);
	});

	const calendarBlob = new Blob([calendar.toString()], { type: 'text/calendar;charset=utf-8' });
	saveAs(calendarBlob, `${calendarName}.ical`);
}