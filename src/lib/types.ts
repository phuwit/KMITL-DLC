export interface Subject {
	subjectId: string;
	subjectName: string;
	subjectDescription: string;
	subjectCredits: string;
	subjectLecture: ClassInfo;
	subjectLab: ClassInfo;
}

export interface ClassInfo {
	building: string;
	room: string;
	sec: string;
	periods: Period[];
}

export interface Period {
	day: string;
	start: string;
	end: string;
}

export interface ScheduleItem {
	subjectId: string;
	subjectName: string;
	subjectCredits: string;
	subjectDescription: string;
	day: number;
	start: string;
	end: string;
	type: 'lecture' | 'lab';
	sec: string;
	room: string;
	building: string;
}
