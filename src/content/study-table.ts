import studyTable from '$lib/components/study-table.svelte';
import { scrapeTable, flattenStudyTable, sortByDay, getinfo } from '$lib/utils/scraper/study-table';

import '$lib/styles/styles.css';
import { mount } from 'svelte';

const originalTable = document.querySelector('table');
if (!originalTable) throw new Error('unable to select table to scrape from');
const info = getinfo(originalTable);
const scrapedData = sortByDay(flattenStudyTable(scrapeTable(originalTable)));

// Add font เพราะเรียกจาก CSS แล้วมันจะไม่ load ให้
const fontPrompt = document.createElement('style');
fontPrompt.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap');
`;
document.head.appendChild(fontPrompt);

document.body.innerHTML = '';

console.log(scrapedData);

mount(studyTable, {
	target: document.body,
	props: {
		schedule: scrapedData,
		originalTable,
		faculty: info.facultyName,
		department: info.department,
		major: info.major,
		semester: info.semester,
		year: info.year,
		studentId: info.studentId,
		studentName: info.studentName
	}
});
