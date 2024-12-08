import type { ClassInfo, ScheduleItem, Subject } from '$lib/types';
import constants from '$lib/constants';

export function getinfo(rawTable: HTMLTableElement) {
	const table = rawTable.querySelectorAll('tbody')[1];
	const facultyName = table.childNodes[6]?.textContent?.trim() || constants.messages.scrapeError;
	const departmentSubject =
		table.childNodes[10]?.textContent?.trim().split('   ') || constants.messages.scrapeError;
	const departmentTerm =
		table.childNodes[14]?.textContent?.trim().split('   ') || constants.messages.scrapeError;
	const studentName =
		table.childNodes[18]?.textContent?.trim().split('   ') || constants.messages.scrapeError;
	return {
		facultyName,
		department: departmentSubject[0].trim(),
		major: departmentSubject[1].trim(),
		semester: departmentTerm[0].trim(),
		year: departmentTerm[1].trim(),
		studentId: studentName[0].trim(),
		studentName: studentName[1].trim()
	};
}

export function scrapeTable(rawTable: HTMLTableElement) {
	const studyTableRows = rawTable.querySelectorAll('tr');

	const studyTableRowsArray = Array.from(studyTableRows)
		.filter((item) => {
			return item.childNodes.length == 37;
		})
		.splice(1);

	const scrapedData: Subject[] = [];

	studyTableRowsArray.forEach((item) => {
		const subjectId: string = item.childNodes[5].textContent || constants.messages.scrapeError;
		const subjectName: string = item.childNodes[9].textContent || constants.messages.scrapeError;
		const subjectCredits: string =
			item.childNodes[13].textContent || constants.messages.scrapeError;

		const roomInfo = item.childNodes[29];
		const room: string[] = [];
		roomInfo.childNodes.forEach((item) => {
			if (item.textContent) {
				room.push(item.textContent);
			}
		});
		const lectureRoom = room[0];
		const labRoom = room[1];

		const buildingInfo = item.childNodes[33];
		const building: string[] = [];
		buildingInfo.childNodes.forEach((item) => {
			if (item.textContent) {
				building.push(item.textContent);
			}
		});
		const lectureBuilding = building[0];
		const labBuilding = building[1];

		const subjectLecture: ClassInfo = {
			building: lectureBuilding,
			room: lectureRoom,
			sec: item.childNodes[17].textContent || constants.messages.scrapeError,
			periods: []
		};
		const subjectLab: ClassInfo = {
			building: labBuilding,
			room: labRoom,
			sec: item.childNodes[21].textContent || constants.messages.scrapeError,
			periods: []
		};
		const subjectDescription: string =
			item.childNodes[35].textContent || constants.messages.scrapeError;
		const subjectPeriod = item.childNodes[25];
		subjectPeriod.childNodes.forEach((item) => {
			if (
				item.textContent &&
				constants.scraper.classTypes.lecture.some((typeString) =>
					item.textContent?.includes(typeString)
				)
			) {
				const splitData = item.textContent.split(' ');
				const time = splitData[1].split('-');
				const period = {
					day: splitData[0],
					start: time[0],
					end: time[1]
				};
				subjectLecture.periods.push(period);
			} else if (
				item.textContent &&
				constants.scraper.classTypes.lab.some((typeString) =>
					item.textContent?.includes(typeString)
				)
			) {
				const splitData = item.textContent.split(' ');
				const time = splitData[1].split('-');
				const period = {
					day: splitData[0],
					start: time[0],
					end: time[1]
				};
				subjectLab.periods.push(period);
			}
		});

		const data: Subject = {
			subjectId,
			subjectName,
			subjectDescription,
			subjectCredits,
			subjectLecture,
			subjectLab
		};
		scrapedData.push(data);
	});
	console.log(scrapedData);
	return scrapedData;
}

export function flattenStudyTable(subjects: Subject[]) {
	function getDayFromString(dayString: keyof typeof constants.scraper.days) {
		return constants.scraper.days[dayString];
	}

	const flattenData: ScheduleItem[] = [];
	subjects.forEach((item) => {
		console.log(item);
		const {
			subjectId,
			subjectName,
			subjectCredits,
			subjectLecture,
			subjectLab,
			subjectDescription
		} = item;
		const {
			sec: lectureSec,
			periods: lecturePeriod,
			room: lectureRoom,
			building: lectureBuilding
		} = subjectLecture;
		const { sec: labSec, periods: labPeriod, room: labRoom, building: labBuilding } = subjectLab;
		if (lectureSec) {
			lecturePeriod.forEach((item) => {
				const { day, start, end } = item;
				const data: ScheduleItem = {
					subjectId,
					subjectName,
					subjectCredits,
					subjectDescription,
					sec: lectureSec,
					room: lectureRoom,
					building: lectureBuilding,
					type: 'lecture',
					day: getDayFromString(day as keyof typeof constants.scraper.days),
					start,
					end
				};
				flattenData.push(data);
			});
		}
		if (labSec) {
			labPeriod.forEach((item) => {
				const { day, start, end } = item;
				const data: ScheduleItem = {
					subjectId,
					subjectName,
					subjectCredits,
					subjectDescription,
					day: getDayFromString(day as keyof typeof constants.scraper.days),
					start,
					end,
					type: 'lab',
					sec: labSec,
					room: labRoom,
					building: labBuilding
				};
				flattenData.push(data);
			});
		}
	});
	return flattenData;
}

export function sortByDay(scheduleItems: ScheduleItem[]) {
	return scheduleItems.sort((a, b) => {
		const dayA = a.day;
		const dayB = b.day;
		if (dayA < dayB) {
			return -1;
		} else if (dayA > dayB) {
			return 1;
		} else {
			if (a.start.localeCompare(b.start) == -1) {
				return -1;
			} else if (a.start.localeCompare(b.start) == 1) {
				return 1;
			}
			return 0;
		}
	});
}
