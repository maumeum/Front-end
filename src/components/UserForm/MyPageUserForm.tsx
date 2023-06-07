import React, {
	useState,
	useEffect,
	MouseEvent,
	SetStateAction,
	Dispatch,
	ChangeEvent,
} from 'react';
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
import { get, patch } from '@src/api/Api';
import { getToken } from '@src/api/Token';

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
const token = getToken();

function MyPageUserForm({ pageType }: MyPageUserFormProps) {
	useEffect(() => {
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
				setInitialNickname(nickname);
				setInitialPhone(phone);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);
	const [initialNickname, setInitialNickname] = useState<string>('');
	const [initialPhone, setInitialPhone] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
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
	const closeModal = () => {
		setIsOpen(false);
	};
	const changePwClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		setEditMode(true);
		setAuthMode(false);
		setIsOpen(true);
	};
	// inputValue 함수
	const getFormChanger =
		(setter: Dispatch<SetStateAction<string>>) =>
		(e: ChangeEvent<HTMLInputElement>) => {
			setSubmit(false);
			setter(e.target.value);
		};

	//유저값 변경 확인
	const isInfoChanged = () => {
		return initialNickname !== nickname || initialPhone !== phone;
	};
	const isNicknameValid = nickname.length > 0;
	const isPhoneValid = validPhoneNum(phone);
	const isButtonDisabled =
		!isMyPage && !(isNicknameValid && isPhoneValid && isInfoChanged());

	const clickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
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

		//회원정보 수정 요청
		{
			try {
				await patch(
					'/api/users/info',
					{ nickname, phone },
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
			} catch (error) {
				console.log(error);
			}
		}
		if (validPhoneNum(phone) && nickname.length > 0) {
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
						value={phone}
						onChangeFn={getFormChanger(setPhone)}
						errorMessage={phoneNumError}
						validFn={validPhoneNum}
					/>
					<ButtonContainer>
						{!isMyPage && (
							<LargeButton onClick={changePwClickHandler}>
								비밀번호변경
							</LargeButton>
						)}
						<LargeButton onClick={clickHandler} disabled={isButtonDisabled}>
							회원정보수정
						</LargeButton>
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
