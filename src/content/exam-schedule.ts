import ExamSchedule from '$lib/components/exam-schedule.svelte';
import constants from '$lib/constants';
import '$lib/styles/styles.css';
import { mount } from 'svelte';

let start = 17;

let getSubject = [];
const oldDesign = document.body.innerHTML;

const monthTxt2Num = {
	'ม.ค.': '1',
	'ก.พ.': '2',
	'มี.ค.': '3',
	'เม.ย.': '4',
	'พ.ค.': '5',
	'มิ.ย.': '6',
	'ก.ค.': '7',
	'ส.ค.': '8',
	'ก.ย.': '9',
	'ต.ค.': '10',
	'พ.ย.': '11',
	'ธ.ค.': '12',
	Jan: '1',
	Feb: '2',
	Mar: '3',
	Apr: '4',
	May: '5',
	Jun: '6',
	Jul: '7',
	Aug: '8',
	Sep: '9',
	Oct: '10',
	Nov: '11',
	Dec: '12'
};

interface PersonalInfo {
	departmentAndProgramme: string;
	faculty: string;
	semester: string;
	semesterAndYear: string;
	studentId: string;
	idAndName: string;
	term: string;
	year: string;
}

interface ExamScheduleItem {
	order: string;
	subjectCode: string;
	subjectName: string;
	sec: string;
	credit: string;
	examType: string;
	room: string;
	startTime: Date;
	endTime: Date;
	date: Date;
}

interface ExamScheduleData {
	date: Date;
	subject: ExamScheduleItem[];
}

const fontPrompt = document.createElement('style');
fontPrompt.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap');
`;
document.head.appendChild(fontPrompt);

while (true) {
	const rawData = document.querySelector(
		`body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(${start})`
	);
	if (!rawData) {
		break;
	}
	const getSubjectInfo: (string | null)[] = [];
	for (let i = 0; i < rawData.children.length; i += 2) {
		const element = rawData.children[i];
		const text = element.textContent;
		getSubjectInfo.push(text);
	}
	const isExist = getSubject.find((e) => e.order === getSubjectInfo[0]);
	if (isExist) {
		isExist.examType =
			isExist.examType + (getSubjectInfo[5] ? `/${String(getSubjectInfo[5]).trim()}` : '');
		start += 2;
		continue;
	}
	const dateScrape = getSubjectInfo[6]?.split(' ');
	const date =
		dateScrape && dateScrape.length > 1
			? new Date(
					`20${Number(dateScrape[3])}-${monthTxt2Num[dateScrape[2] as keyof typeof monthTxt2Num]}-${dateScrape[1]}`
				)
			: new Date(0);
	const timeScrape = getSubjectInfo[7]
		?.replace('น.', '')
		.trim()
		.split('-')
		.map((e) => e.split(':'));
	let startTime;
	let endTime;
	if (timeScrape && timeScrape.length == 2) {
		startTime = new Date(date).setHours(parseInt(timeScrape[0][0]), parseInt(timeScrape[0][1]));
		endTime = new Date(date).setHours(parseInt(timeScrape[1][0]), parseInt(timeScrape[1][1]));
	}
	const data: ExamScheduleItem = {
		order: getSubjectInfo[0] ? getSubjectInfo[0] : '',
		subjectCode: getSubjectInfo[1] ? getSubjectInfo[1] : '',
		subjectName: getSubjectInfo[2] ? getSubjectInfo[2] : '',
		sec: getSubjectInfo[3] ? getSubjectInfo[3] : '',
		credit: getSubjectInfo[4] ? getSubjectInfo[4] : '',
		examType: getSubjectInfo[5] ? String(getSubjectInfo[5]).trim() : '',
		startTime: startTime ? new Date(startTime) : new Date(0),
		endTime: endTime ? new Date(endTime) : new Date(0),
		date,
		room: getSubjectInfo[8] ? getSubjectInfo[8] : ''
	};
	getSubject.push(data);
	start += 2;
}

getSubject = getSubject.sort((a, b) => {
	if (a.startTime && b.startTime) {
		return a.startTime?.getTime() - b.startTime?.getTime();
	} else {
		if (a.startTime) {
			return -1;
		} else if (b.startTime) {
			return 1;
		}
	}
	return 0;
});

const schedule: ExamScheduleData[] = [];
getSubject.forEach((e) => {
	const isExist = schedule.find((f) => f.date?.getTime() === e.date?.getTime());
	if (isExist) {
		isExist.subject.push(e);
	} else {
		schedule.push({ date: e.date, subject: [e] });
	}
});

const personalInfo: PersonalInfo = {
	term:
		document.querySelector<HTMLSelectElement>('#mid_or_final')?.value ||
		constants.messages.scrapeError,
	faculty:
		document.querySelector(
			'body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(4) > td > strong'
		)?.textContent || constants.messages.scrapeError,
	departmentAndProgramme:
		document.querySelector(
			'body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(6) > td'
		)?.textContent || constants.messages.scrapeError,
	semesterAndYear:
		document.querySelector(
			'body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(8) > td'
		)?.textContent || constants.messages.scrapeError,
	idAndName:
		document.querySelector(
			'body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(10) > td'
		)?.textContent || constants.messages.scrapeError,
	year: document.querySelector<HTMLInputElement>('#year')?.value || constants.messages.scrapeError,
	semester:
		document.querySelector<HTMLInputElement>('#semester')?.value || constants.messages.scrapeError,
	studentId:
		document.querySelector<HTMLInputElement>('#student_id')?.value || constants.messages.scrapeError
};

document.body.innerHTML = '';

const oldStyles = document.head.querySelector("link[type='text/css']");
if (oldStyles) document.head.removeChild(oldStyles);

console.log(schedule);
console.log(personalInfo);

mount(ExamSchedule, {
	target: document.body,
	props: {
		schedule,
		data: personalInfo,
		oldDesign
	}
});
