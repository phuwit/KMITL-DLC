import constants from '$lib/constants';
import { getDayIndexOfWeek } from '$lib/utils/ical/generator';

interface SemesterResponse {
	// Buddhist Calendar
	YEAR: string;
	SEMESTER: string;
	START_DATETIME_SYSTEM: string;
	START_DATETIME_ACADEMIC: string;
	END_DATETIME_ACADEMIC: string;
}

interface SemesterInfo {
	academicYear: number;
	semester: number;
	// always be day "0" which means sunday
	starts: Date;
	// always be day "6" which means saturday
	ends: Date;
}

export async function getSemesterInfo(): Promise<SemesterInfo> {
	const semesterResponse: SemesterResponse = await fetch(
		`${constants.apiPaths.newReg}get-year-semester-now`
	)
		.then((response) => response.json())
		.catch((error) => new Error(error));

	const semesterInfo: SemesterInfo = {
		academicYear: Number(semesterResponse.YEAR) - 543,
		semester: Number(semesterResponse.SEMESTER),
		starts: getDayIndexOfWeek(new Date(semesterResponse.START_DATETIME_ACADEMIC), 0),
		ends: getDayIndexOfWeek(new Date(semesterResponse.END_DATETIME_ACADEMIC), 6)
	};
	return semesterInfo;
}
