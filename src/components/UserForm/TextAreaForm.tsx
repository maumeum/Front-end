import { DataText } from './userForm.ts';
import { CheckValue } from '@pages/userPage/style.ts';
import { InputErrorType } from '@src/types/errorType.ts';
import InputContainerProps from '@src/types/inputType.ts';

const TextAreaForm = ({
	canModify,
	submit,
	placeholder,
	value,
	onChangeFn,
	errorMessage,
	validFn,
}: InputContainerProps) => {
	const getError = ({
		data,
		submit,
		errorMessage,
		validFn,
	}: InputErrorType) => {
		switch (true) {
			case data && validFn && !validFn(data):
				return <CheckValue>{errorMessage.validMessage}</CheckValue>;
			case !submit:
				return '';
			case data === '':
				return <CheckValue>{errorMessage.existMessage}</CheckValue>;
			default:
				return '';
		}
	};
	return (
		<>
			<DataText
				readOnly={canModify ? true : false}
				placeholder={placeholder}
				className={submit ? 'submit' : ''}
				onChange={onChangeFn}
				value={value}
			/>
			{getError({
				data: value,
				submit,
				errorMessage,
				validFn: validFn,
			})}
		</>
	);
};

export default TextAreaForm;
