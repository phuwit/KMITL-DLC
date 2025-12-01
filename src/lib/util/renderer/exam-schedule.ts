import ExamSchedule from '$lib/components/exam/exam-schedule.svelte';
import '$lib/styles/styles.css';
import { scrapeExamSchedule, scrapePersonalInfo } from '$lib/util/scraper/exam-schedule';
import { mount } from 'svelte';

export function renderExamSchedule() {
  const originalTable = document.createElement('div');
  originalTable.innerHTML = document.body.innerHTML;

  const rawTable = document.querySelector('table')?.querySelector('table')?.querySelector('tbody') ?? (() => { throw new Error('Cannot query raw table for scraping.'); })();
  const bodyElement = document.querySelector('body') ?? (() => { throw new Error('Cannot query body for scraping.'); })();

  const schedules = scrapeExamSchedule(rawTable);
  const personalInfo = scrapePersonalInfo(bodyElement);

  document.body.innerHTML = '';

  const oldStyles = document.head.querySelector("link[type='text/css']");
  if (oldStyles) document.head.removeChild(oldStyles);

  console.log(schedules);
  // console.log(personalInfo);
  // console.log(originalTable);

  mount(ExamSchedule, {
    target: document.body,
    props: {
      schedules,
      personalInfo,
      originalTable
    }
  });
}
