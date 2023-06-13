import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export function dateFormatter(dateData: string, format: string, local = 'ko') {
	const date = dayjs(dateData).locale(local).format(format);
	return date;
}

export function getCurrent() {
	const currentDate = dayjs().format('YYYY-MM-DD');
	return currentDate;
}

export function remainingDaysCulcurator(
	currentDate: string,
	deadlineDate: string,
) {
	const oneDay = 24 * 60 * 60 * 1000;
	const currentDateObj = new Date(currentDate);
	const deadlineDateObj = new Date(deadlineDate);

	// 윤년 체크
	function isLeapYear(year: number) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	const currentYear = currentDateObj.getFullYear();
	const deadlineYear = deadlineDateObj.getFullYear();
	const isCurrentYearLeap = isLeapYear(currentYear);
	const isDeadlineYearLeap = isLeapYear(deadlineYear);

	const timeDiff = deadlineDateObj.getTime() - currentDateObj.getTime();
	let remainingDays = Math.ceil(timeDiff / oneDay);

	if (isCurrentYearLeap && currentDateObj.getMonth() < 1) {
		remainingDays += 1;
	}
	if (isDeadlineYearLeap && deadlineDateObj.getMonth() >= 1) {
		remainingDays += 1;
	}

	return remainingDays;
}
