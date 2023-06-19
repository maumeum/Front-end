import React from 'react';
import {
	OptionColorLarge,
	SelectColorLarge,
} from '@components/Selector/selector';
import SelectorProps from './selectorProps';

function LargeSelector({ value, onChange, options, disabled }: SelectorProps) {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;

		if (onChange) {
			onChange(selectedValue);
		}
	};

	return (
		<SelectColorLarge onChange={handleChange} value={value} disabled={disabled}>
			{options.map((option, idx) => (
				<OptionColorLarge key={`option.value${idx}`} value={option.value}>
					{option.label}
				</OptionColorLarge>
			))}
		</SelectColorLarge>
	);
}

export default LargeSelector;
