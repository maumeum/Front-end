export interface InputErrorType {
	data: string;
	submit: boolean;
	errorMessage: {
		existMessage: string;
		validMessage?: string;
	};
	passwordData?: string;
	validFn?: (data: string) => boolean | null;
	validPassword?: (password: string) => boolean | undefined;
}
