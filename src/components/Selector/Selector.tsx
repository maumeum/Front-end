import React from 'react';
import { OptionColor, SelectColor } from '@components/Selector/selector';
import SelectorProps from './selectorProps';

function Selector({ value, onChange, options, disabled }: SelectorProps) {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;

		if (onChange) {
			onChange(selectedValue);
		}
	};

	return (
		<SelectColor onChange={handleChange} value={value} disabled={disabled}>
			{options.map((option, idx) => (
				<OptionColor key={`option.value${idx}`} value={option.value}>
					{option.label}
				</OptionColor>
			))}
		</SelectColor>
	);
}

export default Selector;
