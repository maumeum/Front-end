interface SelectorProps {
	value: string;
	onChange: (selectedValue: string) => void;
	options: Array<{ value: string; label: string }>;
	disabled?: boolean;
}

export default SelectorProps;
