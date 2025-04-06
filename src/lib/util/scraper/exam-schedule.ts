import constants from "$lib/constants";
import { toTitleCase } from "$lib/util/string";

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

export interface ExamSubject {
  order: string;
  id: string;
  name: string;
  section: string;
  credits: string;
  type: string;
  location: string;
  startTime: Date | null;
  endTime: Date | null;
  date: Date | null;
}

export interface ExamSchedule {
  date: Date | null;
  subjects: ExamSubject[];
}

export interface PersonalInfo {
  departmentAndProgramme: string;
  faculty: string;
  semester: string;
  semesterAndYear: string;
  studentId: string;
  idAndName: string;
  term: string;
  year: string;
}


const FIRST_SUBJECT_ROW_INDEX = 16;


export function scrapeExamSchedule(rawData: Element): ExamSchedule[] {
  const rawSubjectRows = [...rawData.children].filter((_, index) => (index >= FIRST_SUBJECT_ROW_INDEX) && (index % 2 == FIRST_SUBJECT_ROW_INDEX % 2));

  const scrapedSubjects = rawSubjectRows.map((subjectRow) => {
    const getSubjectInfo: (string | null)[] = [];
    for (let i = 0; i < subjectRow.children.length; i += 2) {
      const element = subjectRow.children[i];
      const text = element.textContent;
      getSubjectInfo.push(text);
    }

    // const isExist = getSubject.find((e) => e.order === getSubjectInfo[0]);
    // if (isExist) {
    //   isExist.examType =
    //     isExist.examType + (getSubjectInfo[5] ? `/${String(getSubjectInfo[5]).trim()}` : '');
    //   start += 2;
    //   continue;
    // }

    const dateScrape = getSubjectInfo[6]?.split(' ');
    const date: Date | null =
      dateScrape && dateScrape.length > 1
        ? new Date(
            `20${Number(dateScrape[3])}-${monthTxt2Num[dateScrape[2] as keyof typeof monthTxt2Num]}-${dateScrape[1]}`
          )
        : null;

    const timeScrape = getSubjectInfo[7]
      ?.replace('น.', '')
      .trim()
      .split('-')
      .map((e) => e.split(':'));
    let startTime: Date | null = null;
    let endTime: Date | null = null;
    if (date && timeScrape && timeScrape.length == 2) {
      startTime = new Date(date);
      startTime.setHours(parseInt(timeScrape[0][0]), parseInt(timeScrape[0][1]))

      endTime = new Date(date);
      endTime.setHours(parseInt(timeScrape[1][0]), parseInt(timeScrape[1][1]));
    }

    const scheduleData: ExamSubject = {
      order: getSubjectInfo[0] ? getSubjectInfo[0] : '',
      id: getSubjectInfo[1] ? getSubjectInfo[1] : '',
      name: getSubjectInfo[2] ? toTitleCase(getSubjectInfo[2]) : '',
      section: getSubjectInfo[3] ? getSubjectInfo[3] : '',
      credits: getSubjectInfo[4] ? getSubjectInfo[4] : '',
      type: getSubjectInfo[5] ? String(getSubjectInfo[5]).trim() : '',
      startTime,
      endTime,
      date,
      location: getSubjectInfo[8] ? getSubjectInfo[8] : ''
    };
    return scheduleData;
  });

  const scrapedSubjectsTimeSorted = scrapedSubjects.sort((a, b) => {
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

  const schedule: ExamSchedule[] = [];
  scrapedSubjectsTimeSorted.forEach((scheduleItem) => {
    const isExist = schedule.find((scheduleData) => scheduleData.date?.getTime() === scheduleItem.date?.getTime());
    if (isExist) {
      isExist.subjects.push(scheduleItem);
    } else {
      schedule.push({ date: scheduleItem.date, subjects: [scheduleItem] });
    }
  });
  return schedule;
}

export function scrapePersonalInfo(rawTable: Element) {
  const personalInfo: PersonalInfo = {
    term:
      rawTable.querySelector<HTMLSelectElement>('#mid_or_final')?.value ||
      constants.messages.scrapeError,
    faculty:
      rawTable.querySelector(
        'tbody > tr:nth-child(4) > td > strong'
      )?.textContent || constants.messages.scrapeError,
    departmentAndProgramme:
      rawTable.querySelector(
        'tbody > tr:nth-child(6) > td'
      )?.textContent || constants.messages.scrapeError,
    semesterAndYear:
      rawTable.querySelector(
        'tbody > tr:nth-child(8) > td'
      )?.textContent || constants.messages.scrapeError,
    idAndName:
      rawTable.querySelector(
        'tbody > tr:nth-child(10) > td'
      )?.textContent || constants.messages.scrapeError,
    year: rawTable.querySelector<HTMLInputElement>('#year')?.value || constants.messages.scrapeError,
    semester:
      rawTable.querySelector<HTMLInputElement>('#semester')?.value || constants.messages.scrapeError,
    studentId:
      rawTable.querySelector<HTMLInputElement>('#student_id')?.value || constants.messages.scrapeError
  };
  return personalInfo;
}