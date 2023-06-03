import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LargeButton from '../../components/Buttons/LargeButton';
import {
	SignUpSection,
	SignUpForm,
	InputContainer,
	DataName,
	EmailContainer,
	EmailData,
	EmailButton,
	CheckValue,
	DataInput,
} from './style';
import Swal from 'sweetalert2';
import Modal from '../../components/Modal/Modal.tsx';
import { checkEmail, validEmail, validPassword, validPhoneNum } from '@src/utils/signUpCheck.ts';
import { emailError, nicknameError, passwordError, passwordCheckError, phoneNumError } from '@src/utils/errorMessage.ts';

type Props = {
	mypage?: string;
	myInfo?: {
		email: string;
		nickname: string;
		password: string;
		pwdcheck: string;
		phoneNum: string;
	};
};

interface ErrorType {
	data: string, 
	submit: boolean,
	errorMessage: {
		existMessage: string,
		validMessage?: string,
	},
	passwordData?: string,
	validFn?: (data: string) => boolean | null,
	validPassword?: (password: string, checkPassword: string) => boolean | undefined,
}

const SignUp = ({ mypage, myInfo }: Props) => {
	const [email, setEmail] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checkPassword, setCheckPassword] = useState<string>('');
	const [phoneNum, setPhoneNum] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	
	//Error Message 전달
	const getError = ({data, submit, errorMessage, passwordData, validFn, validPassword}: ErrorType) => {
		if (validFn && !validFn(data) && data !== "") {
			return <CheckValue>{errorMessage.validMessage}</CheckValue>;
		} 
		if (validPassword && passwordData) {
			if (!validPassword(data, passwordData) && password !== "") {
				return <CheckValue>{errorMessage.validMessage}</CheckValue>;
			}
		} 
		if (passwordData) {
			if (data !== passwordData && data !== "") {
				return <CheckValue>{errorMessage.validMessage}</CheckValue>;
			}
		}
		if (!submit){
			return "";
		}
		if (!data || submit){
			return <CheckValue>{errorMessage.existMessage}</CheckValue>;
		}
	}

	// inputValue 함수
	const getFormChanger = (setter: React.Dispatch<React.SetStateAction<string>>) =>
	(e: React.ChangeEvent<HTMLInputElement>) => {
		setSubmit(false);
		setter(e.target.value);
	};

	//회원정보 수정 클릭시 모달
	const [isOpen, setOpen] = useState(false);

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		// 상태 초기화
		{
			if (mypage) {
				setOpen(true);
				return;
			}
		}
		setSubmit(false);
		e.preventDefault();
		setSubmit(true);

		// 비밀번호 일치여부
		if (password !== checkPassword) {
			Swal.fire({
				icon: 'error',
				title: '비밀번호가 일치하지 않습니다.',
				confirmButtonColor: '#d33',
			});
		}

		// 회원가입 완료
		if (
			validEmail(email) &&
			validPassword(password, checkPassword) &&
			validPhoneNum(phoneNum)
		) {
			Swal.fire({
				title: `마음이음에 오신 것을 환영합니다!`,
				confirmButtonColor: 'var(--button--color)',
			});
		} else {
			Swal.fire({
				icon: 'error',
				title: '정보를 모두 입력해주세요.',
				confirmButtonColor: '#d33',
			});
		}
	};

	return (
		<SignUpSection mypage={mypage}>
			<SignUpForm>
				<InputContainer>
					<DataName>이메일</DataName>
					<EmailContainer
						className={checkEmail(email) && submit ? 'submit' : ''}>
						<EmailData
							readOnly={mypage ? true : false}
							type='text'
							name="email"
							placeholder='이메일을 입력해주세요.'
							value={mypage ? myInfo?.email : email}
							onChange={getFormChanger(setEmail)}
						/>
						<EmailButton mypage={mypage}>중복 확인</EmailButton>
					</EmailContainer>
					{getError({data: email, submit, errorMessage: emailError, validFn: validEmail})}
				</InputContainer>
				<InputContainer>
					<DataName>닉네임</DataName>
					<DataInput
						readOnly={mypage ? true : false}
						type='text'
						name="nickname"
						placeholder='닉네임을 입력해주세요.'
						className={submit ? 'submit' : ''}
						onChange={getFormChanger(setNickname)}
						value={mypage ? myInfo?.nickname : nickname}
					/>
					{getError({data: nickname, submit, errorMessage: nicknameError})}
				</InputContainer>
				<InputContainer>
					<DataName>비밀번호</DataName>
					<DataInput
						readOnly={mypage ? true : false}
						type='password'
						name="password"
						placeholder='비밀번호 4~20자 입력'
						value={mypage ? myInfo?.password : password}
						className={submit ? 'submit' : ''}
						onChange={getFormChanger(setPassword)}
					/>
					{getError({data: password, submit, errorMessage: passwordError, validPassword: validPassword})}
				</InputContainer>
				<InputContainer>
					<DataName>비밀번호 확인</DataName>
					<DataInput
						readOnly={mypage ? true : false}
						type='password'
						name="checkPassword"
						placeholder='비밀번호 다시 입력'
						value={mypage ? myInfo?.pwdcheck : checkPassword}
						className={submit ? 'submit' : ''}
						onChange={getFormChanger(setCheckPassword)}
					/>
					{getError({data: checkPassword, submit, passwordData: password, errorMessage: passwordCheckError,})}
				</InputContainer>
				<InputContainer>
					<DataName>핸드폰 번호</DataName>
					<DataInput
						readOnly={mypage ? true : false}
						type='text'
						name="phoneNum"
						placeholder="핸드폰 번호('-'없이 입력)"
						value={mypage ? myInfo?.password : phoneNum}
						className={submit ? 'submit' : ''}
						onChange={getFormChanger(setPhoneNum)}
					/>
					{getError({data: phoneNum, submit, errorMessage: phoneNumError, validFn: validPhoneNum})}
				</InputContainer>
				{mypage ? (
					<LargeButton onClick={clickHandler}>회원정보 수정</LargeButton>
				) : (
					<LargeButton onClick={clickHandler}>회원가입</LargeButton>
				)}
				<Modal isOpen={isOpen} setOpen={setOpen} user={'user'} />
			</SignUpForm>
		</SignUpSection>
	);
};

export default SignUp;

