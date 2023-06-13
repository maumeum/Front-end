import React from 'react';
import { OptionColor, SelectColor } from '@components/Selector/selector';

interface SelectorProps {
	value: string;
	onChange: (selectedValue: string) => void;
	options: Array<{ value: string; label: string }>;
}

function Selector({ value, onChange, options }: SelectorProps) {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;

		if (onChange) {
			onChange(selectedValue);
		}
	};

	return (
		<SelectColor onChange={handleChange} value={value}>
			{options.map((option, idx) => (
				<OptionColor key={`option.value${idx}`} value={option.value}>
					{option.label}
				</OptionColor>
			))}
		</SelectColor>
	);
}

export default Selector;
