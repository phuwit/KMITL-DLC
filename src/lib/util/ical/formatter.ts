import constants from "$lib/constants";
import { ScheduleItem } from "$lib/types";

export function getScheduleItemStringify(scheduleItem: ScheduleItem): Record<string, string>{
  const stringed: Record<string, string> = {};
  for (const [key, value] of Object.entries(scheduleItem)) {
    stringed[key] = String(value);
  }
  stringed['appName'] = constants.appName;
  stringed['dateNow'] = (new Date()).toDateString();
  return stringed;
}

/**
 * format string with values with data from data object
 * @param {string} original string to format
 * @param {Record<string, string>} data data object
 * @param {RegExp} formatPattern *global* regex with the first capture group is a data key
 */
export function formatStringFromTemplate(original: string, data: Record<string, string>, formatPattern: RegExp): string {
  if (formatPattern.global == false) throw new Error('Format RegExp is not global');

  const formatted = original.replaceAll(formatPattern, (match: string, key: string) => {
    const value = data[key];
    return value === undefined || value === null ? '' : String(value);
  });

  return formatted
}
