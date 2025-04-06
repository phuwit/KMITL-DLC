import studyTable from '$lib/components/study-table.svelte';
import { scrapeTable, flattenStudyTable, sortByDay, getinfo } from '$lib/util/scraper/study-table';

import '$lib/styles/styles.css';
import { mount } from 'svelte';

export function renderStudyTable() {
  const rawStudyTable = document.querySelector('table');
  if (!rawStudyTable) throw new Error('Unable to select the raw study table');
  const info = getinfo(rawStudyTable);
  const scrapedData = sortByDay(flattenStudyTable(scrapeTable(rawStudyTable)));
  const oldTable = document.createElement('div');
  oldTable.innerHTML = document.body.innerHTML;

  document.body.innerHTML = '';

  console.log(scrapedData);

  mount(studyTable, {
    target: document.body,
    props: {
      schedule: scrapedData,
      oldTable: oldTable,
      faculty: info.facultyName,
      department: info.department,
      major: info.major,
      semester: info.semester,
      year: info.year,
      studentId: info.studentId,
      studentName: info.studentName
    }
  });
}
