import { renderStudyTable } from '$lib/util/renderer/study-table';

export default defineContentScript({
	matches: ['*://*.reg.kmitl.ac.th/u_student/report_studytable_show.php'],
	main() {
		renderStudyTable();
	}
});
