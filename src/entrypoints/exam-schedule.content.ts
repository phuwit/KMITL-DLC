import { renderExamSchedule } from '$lib/util/renderer/exam-schedule';

export default defineContentScript({
	matches: ['*://*.reg.kmitl.ac.th/u_student/report_examtable_show.php'],
	main() {
		renderExamSchedule();
	}
});
