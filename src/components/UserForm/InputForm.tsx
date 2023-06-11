import Swal from 'sweetalert2';
import {
	DataName,
	DataInput,
	CheckValue,
	InputContainer,
	EmailContainer,
	EmailData,
	EmailButton,
} from '@pages/userPage/style';
import { post } from '@api/Api';
import alertData from '@utils/swalObject';

interface ErrorType {
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

interface InputContainerProps {
	canModify?: boolean;
	submit: boolean;
	dataName: string;
	inputType: string;
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

const InputForm = ({
	canModify,
	submit,
	dataName,
	inputType,
	name,
	placeholder,
	value,
	onChangeFn,
	errorMessage,
	validFn,
	passwordData,
	validPassword,
}: InputContainerProps) => {
	const getError = ({
		data,
		submit,
		errorMessage,
		passwordData,
		validFn,
		validPassword,
	}: ErrorType) => {
		switch (true) {
			case data && validFn && !validFn(data):
			case data && validPassword && !validPassword(data):
			case data && passwordData && data !== passwordData:
				return <CheckValue>{errorMessage.validMessage}</CheckValue>;
			case !submit:
				return '';
			case data === '':
				return <CheckValue>{errorMessage.existMessage}</CheckValue>;
			default:
				return '';
		}
	};

	const clickHandler = async () => {
		try {
			const userData = await post<boolean>('/api/email', { email: value });
			if (value === '') {
				return Swal.fire(alertData.emptyEmail);
			}
			if (userData) {
				Swal.fire(alertData.possibleEmail);
			}
		} catch (err) {
			Swal.fire(alertData.usedEmail);
		}
	};

	return (
		<InputContainer>
			{name !== 'email' ? (
				<>
					<DataName>{dataName}</DataName>
					<DataInput
						readOnly={canModify ? true : false}
						type={inputType}
						name={name}
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
						validPassword: validPassword,
						passwordData: passwordData,
					})}
				</>
			) : (
				<>
					<DataName>{dataName}</DataName>
					<EmailContainer className={submit && value === '' ? 'submit' : ''}>
						<EmailData
							readOnly={canModify ? true : false}
							type={inputType}
							name={name}
							placeholder={placeholder}
							onChange={onChangeFn}
							value={value}
						/>
						{!canModify && (
							<EmailButton onClick={clickHandler}>중복 확인</EmailButton>
						)}
					</EmailContainer>
					{getError({
						data: value,
						submit,
						errorMessage,
						validFn: validFn,
						validPassword: validPassword,
						passwordData: passwordData,
					})}
				</>
			)}
		</InputContainer>
	);
};

export default InputForm;
