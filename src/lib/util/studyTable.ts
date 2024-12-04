import { ClassInfo, ScheduleItem, Subject } from "../types";

export function getinfo(rawTable: HTMLTableElement) {
  const table = rawTable.querySelectorAll("tbody")[1];
  const facultyName = table.childNodes[6].textContent.trim();
  const departmentSubject = table.childNodes[10].textContent.trim().split("   ");
  const departmentTerm = table.childNodes[14].textContent.trim().split("   ");
  const studentName = table.childNodes[18].textContent.trim().split("   ");
  return {
    facultyName,
    department : departmentSubject[0].trim(),
    major : departmentSubject[1].trim(),
    semester : departmentTerm[0].trim(),
    year: departmentTerm[1].trim(),
    studentId: studentName[0].trim(),
    studentName: studentName[1].trim(),
  };
}

export function scrapeTable(rawTable: HTMLTableElement) {
  const studyTableRows = rawTable.querySelectorAll("tr");

  const studyTableRowsArray = Array.from(studyTableRows)
    .filter((item) => {
      return item.childNodes.length == 37;
    })
    .splice(1);

  let scrapedData: Subject[] = [];

  studyTableRowsArray.forEach((item) => {
    const subjectId = item.childNodes[5].textContent;
    const subjectName = item.childNodes[9].textContent;
    const subjectCredits = item.childNodes[13].textContent;

    const roomInfo = item.childNodes[29];
    let room = [];
    roomInfo.childNodes.forEach((item) => {
      if (item.textContent != "") {
        room.push(item.textContent);
      }
    });
    const lectureRoom = room[0];
    const labRoom = room[1];

    const buildingInfo = item.childNodes[33];
    const building = [];
    buildingInfo.childNodes.forEach((item) => {
      if (item.textContent != "") {
        building.push(item.textContent);
      }
    });
    const lectureBuilding = building[0];
    const labBuilding = building[1];

    const subjectLecture: ClassInfo = {
      building: lectureBuilding,
      room: lectureRoom,
      sec: item.childNodes[17].textContent,
      periods: [],
    };
    const subjectLab: ClassInfo = {
      building: labBuilding,
      room: labRoom,
      sec: item.childNodes[21].textContent,
      periods: [],
    };
    const subjectDescription = item.childNodes[35].textContent;
    const subjectPeriod = item.childNodes[25];
    subjectPeriod.childNodes.forEach((item) => {
      if (item.textContent.includes("ท") || item.textContent.includes("L")) {
        const splitData = item.textContent.split(" ");
        const time = splitData[1].split("-");
        const period = {
          day: splitData[0],
          start: time[0],
          end: time[1],
        };
        subjectLecture.periods.push(period);
      } else if (item.textContent.includes("ป") || item.textContent.includes("P")) {
        const splitData = item.textContent.split(" ");
        const time = splitData[1].split("-");
        const period = {
          day: splitData[0],
          start: time[0],
          end: time[1],
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
      subjectLab,
    };
    scrapedData.push(data);
  });
  console.log(scrapedData)
  return scrapedData;
}

export function flattenStudyTable(subjects: Subject[]) {
  let flattenData: ScheduleItem[] = [];
  subjects.forEach((item) => {
    console.log(item)
    const {
      subjectId,
      subjectName,
      subjectCredits,
      subjectLecture,
      subjectLab,
      subjectDescription,
    } = item;
    const {
      sec: lectureSec,
      periods: lecturePeriod,
      room: lectureRoom,
      building: lectureBuilding,
    } = subjectLecture;
    const {
      sec: labSec,
      periods: labPeriod,
      room: labRoom,
      building: labBuilding,
    } = subjectLab;
    if (lectureSec != "") {
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
          type: "ท",
          day,
          start,
          end,
        };
        flattenData.push(data);
      });
    }
    if (labSec != "") {
      labPeriod.forEach((item) => {
        const { day, start, end } = item;
        const data: ScheduleItem = {
          subjectId,
          subjectName,
          subjectCredits,
          subjectDescription,
          day,
          start,
          end,
          type: "ป",
          sec: labSec,
          room: labRoom,
          building: labBuilding,
        };
        flattenData.push(data);
      });
    }
  });
  return flattenData;
}

export function sortByDay(scheduleItems: ScheduleItem[]) {
  const days = {
    "จ.": 0,
    "อ.": 1,
    "พ.": 2,
    "พฤ.": 3,
    "ศ.": 4,
    "ส.": 5,
    "อา.": 6,
    "Sun": 0,
    "Mon": 1,
    "Tue": 2,
    "Wed": 3,
    "Thu": 4,
    "Fri": 5,
    "Sat": 6,
  };

  const sortedData = scheduleItems.sort((a, b) => {
    const dayA = days[a.day];
    const dayB = days[b.day];
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

  return sortedData;
}
