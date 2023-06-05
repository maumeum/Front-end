import React, { useState, useEffect } from 'react';
import { SignUpSection, SignUpForm } from '@pages/userPage/style';
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
import Swal from 'sweetalert2';
import InputForm from '@src/components/UserForm/InputForm.tsx';
import LargeButton from '@components/Buttons/LargeButton';
import Modal from '@components/Modal/Modal.tsx';
import { TabTypes } from '@src/utils/EnumTypes';

type MyPageUserFormProps = {
	pageType: string;
	myInfo: {
		email: string;
		nickname: string;
		password: string;
		pwdcheck: string;
		phoneNum: string;
	};
};

function MyPageUserForm({ myInfo, pageType }: MyPageUserFormProps) {
	useEffect(() => {
		const { nickname, password, pwdcheck, phoneNum } = myInfo;
		setNickname(nickname);
		setCheckPassword(pwdcheck);
		setPhoneNum(phoneNum);
		setPassword(password);
	}, []);

	const [email, setEmail] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checkPassword, setCheckPassword] = useState<string>('');
	const [phoneNum, setPhoneNum] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const isMyPage = pageType === TabTypes.MYPAGE;

	//모달설정
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};
	function closeModal() {
		setIsOpen(false);
	}
	// inputValue 함수
	const getFormChanger =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSubmit(false);
			setter(e.target.value);
		};

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		{
			isMyPage ? openModal() : null;
		}
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
		console.log(nickname);
	};

	return (
		<>
			<SignUpSection pageType={pageType}>
				<SignUpForm>
					{isMyPage && (
						<InputForm
							isMyPage={isMyPage}
							submit={submit}
							dataName='이메일'
							inputType='text'
							name='email'
							placeholder={myInfo.email}
							value={email}
							onChangeFn={getFormChanger(setEmail)}
							errorMessage={emailError}
							validFn={validEmail}
						/>
					)}
					<InputForm
						isMyPage={isMyPage}
						submit={submit}
						dataName='닉네임'
						inputType='text'
						name='nickname'
						placeholder={myInfo.nickname}
						value={nickname}
						onChangeFn={getFormChanger(setNickname)}
						errorMessage={nicknameError}
					/>
					<InputForm
						isMyPage={isMyPage}
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
					{isMyPage ? null : (
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
					)}
					<InputForm
						isMyPage={isMyPage}
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
					<LargeButton onClick={clickHandler}>회원정보수정</LargeButton>
					<Modal isOpen={isOpen} closeModal={closeModal} user={'user'} />
				</SignUpForm>
			</SignUpSection>
		</>
	);
}

export default MyPageUserForm;
