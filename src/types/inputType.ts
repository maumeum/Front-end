interface InputContainerProps {
	isMyPage?: boolean | string;
	submit: boolean;
	dataName?: string;
	inputType?: string;
	name: string;
	placeholder?: string;
	value: string;
	onChangeFn: any;
	errorMessage: {
		existMessage: string;
		validMessage?: string;
	};
	validFn?: (data: string) => boolean | null;
	passwordData?: string;
	validPassword?: (password: string) => boolean | undefined;
}

export default InputContainerProps;
