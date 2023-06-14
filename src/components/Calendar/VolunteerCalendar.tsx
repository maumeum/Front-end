import { limitCalendarRange } from '@utils/dateUtils';
import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';

import {
	CalenderWrapper,
	CustomHeaderContainer,
	Month,
	Year,
	MonthButton,
} from './Component.style';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarProps {
	selectedDate: Date | null;
	setSelectedDate: Dispatch<SetStateAction<Date>>;
}

interface DateData {
	date: Date;
	changeYear: (value: number) => void;
	decreaseMonth: () => void;
	increaseMonth: () => void;
	prevMonthButtonDisabled: boolean;
	nextMonthButtonDisabled: boolean;
}

const CURRENT_YEAR = getYear(new Date());

const YEARS = Array.from(
	{ length: CURRENT_YEAR + 2 - CURRENT_YEAR },
	(_, i) => CURRENT_YEAR + i,
);
const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const Calendar = ({ selectedDate, setSelectedDate }: CalendarProps) => {
	const limitRange = limitCalendarRange();
	return (
		<CalenderWrapper>
			<DatePicker
				dateFormat='yyyy.MM.dd'
				formatWeekDay={(nameOfDay: string) => nameOfDay.substring(0, 1)}
				showYearDropdown
				scrollableYearDropdown
				shouldCloseOnSelect
				yearDropdownItemNumber={100}
				minDate={new Date(limitRange[0])}
				maxDate={new Date(limitRange[1])}
				selected={selectedDate}
				onChange={(date: Date) => setSelectedDate(date)}
				isClearable={true}
				renderCustomHeader={({
					date,
					changeYear,
					decreaseMonth,
					increaseMonth,
					prevMonthButtonDisabled,
					nextMonthButtonDisabled,
				}: DateData) => (
					<CustomHeaderContainer>
						<MonthButton
							type='button'
							onClick={decreaseMonth}
							disabled={prevMonthButtonDisabled}>
							{'<'}
						</MonthButton>
						<Month>{MONTHS[getMonth(date)]}</Month>
						<Year
							value={getYear(date)}
							onChange={({ target: { value } }) => changeYear(+value)}>
							{YEARS.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</Year>
						<MonthButton
							type='button'
							onClick={increaseMonth}
							disabled={nextMonthButtonDisabled}>
							{'>'}
						</MonthButton>
					</CustomHeaderContainer>
				)}
			/>
		</CalenderWrapper>
	);
};

export default Calendar;
