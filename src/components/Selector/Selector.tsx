import React from 'react';
import { OptionColor, SelectColor } from '@components/Selector/selector';

function Selector({
	value,
	onChange,
}: {
	value: string;
	onChange: (selectedValue: string) => void;
}) {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;

		if (onChange) {
			onChange(selectedValue);
		}
	};

	return (
		<SelectColor onChange={handleChange} value={value}>
			<OptionColor value='모집중'>모집중</OptionColor>
			<OptionColor value='모집완료'>모집완료</OptionColor>
			<OptionColor value='모집중단'>모집중단</OptionColor>
		</SelectColor>
	);
}

export default Selector;
