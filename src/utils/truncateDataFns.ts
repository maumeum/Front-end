import dayjs from 'dayjs';

export const truncateDate = (date: string) => {
	if (!date) {
		return '';
	}
	return dayjs(date).format('YYYY-MM-DD');
};

export const truncateCentName = (name: string) => {
	if (!name) {
		return '';
	}
	if (name.length > 10) {
		return `${name.slice(0, 10)}...`;
	} else {
		return name;
	}
};

export const splitStatusName = (statusName: string) => {
	return statusName.length === 4
		? `${statusName.slice(0, 2)}<br />${statusName.slice(2)}`
		: statusName;
};
