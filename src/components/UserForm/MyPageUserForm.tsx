import React, { useState, useEffect } from 'react';
import {
	SignUpSection,
	SignUpForm,
	ButtonContainer,
} from '@pages/userPage/style';
import { validEmail, validPhoneNum } from '@src/utils/signUpCheck.ts';
import {
	emailError,
	nicknameError,
	phoneNumError,
} from '@src/utils/errorMessage.ts';
import Swal from 'sweetalert2';
import InputForm from '@src/components/UserForm/InputForm.tsx';
import LargeButton from '@components/Buttons/LargeButton';
import Modal from '@components/Modal/Modal.tsx';
import { useNavigate } from 'react-router-dom';
import { TabTypes } from '@src/utils/EnumTypes';
import { get } from '@src/api/Api';

type MyPageUserFormProps = {
	pageType: string; //readOnly설정을 위한 props 값
};

type UserInfo = {
	email: string;
	nickname: string;
	_id: string;
	phone: string;
	image: string;
};

function MyPageUserForm({ pageType }: MyPageUserFormProps) {
	useEffect(() => {
		const token = localStorage.getItem('userToken');
		const fetchData = async () => {
			try {
				const response = await get('/api/users/info', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const { email, nickname, phone } = response as UserInfo;
				setEmail(email);
				setNickname(nickname);
				setPhone(phone);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const [email, setEmail] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [phoneState, setPhone] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);

	const isMyPage = pageType === TabTypes.MYPAGE;
	const navigate = useNavigate();

	//모달설정

	const [isOpen, setIsOpen] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [authMode, setAuthMode] = useState(false);

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
			if (isMyPage) {
				setEditMode(false);
				setAuthMode(true);
				openModal();
				return;
			}
		}
		// 상태 초기화
		setSubmit(false);
		e.preventDefault();
		setSubmit(true);

		//비밀번호 일치여부
		if (validPhoneNum(phoneState)) {
			Swal.fire({
				title: '회원정보가 수정되었습니다!',
				confirmButtonColor: 'var(--button--color)',
			});
			navigate('/mypage');
		}
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
						value={nickname}
						onChangeFn={getFormChanger(setNickname)}
						errorMessage={nicknameError}
					/>

					<InputForm
						isMyPage={isMyPage}
						submit={submit}
						dataName='핸드폰 번호'
						inputType='text'
						name='phoneNum'
						value={phoneState}
						onChangeFn={getFormChanger(setPhone)}
						errorMessage={phoneNumError}
						validFn={validPhoneNum}
					/>
					<ButtonContainer>
						{!isMyPage && (
							<LargeButton
								onClick={() => {
									setEditMode(true);
									setAuthMode(false);
									setIsOpen(true);
								}}>
								비밀번호변경
							</LargeButton>
						)}
						<LargeButton onClick={clickHandler}>회원정보수정</LargeButton>
					</ButtonContainer>
					<Modal
						isOpen={isOpen}
						closeModal={closeModal}
						user={'user'}
						editMode={editMode}
						authMode={authMode}
					/>
				</SignUpForm>
			</SignUpSection>
		</>
	);
}

export default MyPageUserForm;
