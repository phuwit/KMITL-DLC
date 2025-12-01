export default {
	appName: 'KMITL DLC',
	utcOffset: 7,
	messages: {
		scrapeError: 'Scraping error.'
	},
	scraper: {
		classTypes: {
			lecture: ['ท', 'L'],
			lab: ['ป', 'P']
		},
		days: {
			'อา.': 0,
			'จ.': 1,
			'อ.': 2,
			'พ.': 3,
			'พฤ.': 4,
			'ศ.': 5,
			'ส.': 6,
			Sun: 0,
			Mon: 1,
			Tue: 2,
			Wed: 3,
			Thu: 4,
			Fri: 5,
			Sat: 6
		}
	},
	apiPaths: {
		newReg: 'https://k8s.reg.kmitl.ac.th/reg/api/?level_id=1&function='
	},
  storage:{
    icalFilenamePattern: {
      key: 'ical-filename-pattern',
      default: '{{ appName }}-StudyCalendar({{ dateNow }})',
    },
    icalSummaryPattern: {
      key: 'ical-summary-pattern',
      default: '{{ subjectName }} ({{ type }})',
    },
    icalLocationPattern: {
      key: 'ical-location-pattern',
      default: '{{ building }}:{{ room }}',
    },
  },
  stringFormatPattern: new RegExp(/{{ (.+?) }}/g),
};
