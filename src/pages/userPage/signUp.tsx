import React, { useState } from 'react';
import LargeButton from '@components/Buttons/LargeButton';
import { SignUpSection, SignUpForm } from './style';
import Swal from 'sweetalert2';
import {
	validEmail,
	validPassword,
	validPhoneNum,
} from '@src/utils/signUpCheck.ts';
import {
	emailError,
	nicknameError,
	passwordError,
	passwordCheckError,
	phoneNumError,
} from '@src/utils/errorMessage.ts';
import InputForm from '@src/components/UserForm/InputForm.tsx';

const SignUp = () => {
	const [email, setEmail] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checkPassword, setCheckPassword] = useState<string>('');
	const [phoneNum, setPhoneNum] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);

	// inputValue 함수
	const getFormChanger =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSubmit(false);
			setter(e.target.value);
		};

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		// 상태 초기화
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
			validPassword(password) &&
			validPhoneNum(phoneNum)
		) {
			Swal.fire({
				title: '마음이음에 오신 것을 환영합니다!',
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
		<SignUpSection>
			<SignUpForm>
				<InputForm
					submit={submit}
					dataName='이메일'
					inputType='text'
					name='email'
					placeholder='이메일을 입력해주세요.'
					value={email}
					onChangeFn={getFormChanger(setEmail)}
					errorMessage={emailError}
					validFn={validEmail}
				/>
				<InputForm
					submit={submit}
					dataName='닉네임'
					inputType='text'
					name='nickname'
					placeholder='닉네임을 입력해주세요.'
					value={nickname}
					onChangeFn={getFormChanger(setNickname)}
					errorMessage={nicknameError}
				/>
				<InputForm
					submit={submit}
					dataName='비밀번호'
					inputType='password'
					name='password'
					placeholder='비밀번호 4~20자 입력'
					value={password}
					onChangeFn={getFormChanger(setPassword)}
					errorMessage={passwordError}
					validPassword={validPassword}
				/>
				<InputForm
					submit={submit}
					dataName='비밀번호 확인'
					inputType='password'
					name='checkPassword'
					placeholder='비밀번호 다시 입력'
					value={checkPassword}
					onChangeFn={getFormChanger(setCheckPassword)}
					errorMessage={passwordCheckError}
					passwordData={password}
				/>
				<InputForm
					submit={submit}
					dataName='핸드폰 번호'
					inputType='text'
					name='phoneNum'
					placeholder="핸드폰 번호('-'없이 입력)"
					value={phoneNum}
					onChangeFn={getFormChanger(setPhoneNum)}
					errorMessage={phoneNumError}
					validFn={validPhoneNum}
				/>
				<LargeButton onClick={clickHandler}>회원가입</LargeButton>
			</SignUpForm>
		</SignUpSection>
	);
};

export default SignUp;
