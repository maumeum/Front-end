import {
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
import { TabTypes } from '@src/types/myPageConstants';
import { get, patch } from '@src/api/Api';
import DataType from '@src/types/DataType';

interface MyPageUserFormProps {
	pageType: string;
}

type UserInfo = {
	email: string;
	nickname: string;
	_id: string;
	phone: string;
	image: string;
};

function MyPageUserForm({ pageType }: MyPageUserFormProps) {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>('/api/users/info', {});
				const { email, nickname, phone } = response.data as UserInfo;
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

	const toggleModal = (onoff: boolean) => () => {
		setIsOpen(onoff);
	};

	const changePwClickHandler = () => {
		setEditMode(true);
		setAuthMode(false);
		toggleModal(true)();
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

	const UserInfoChangeHandler = async (e: MouseEvent<HTMLButtonElement>) => {
		{
			if (isMyPage) {
				setEditMode(false);
				setAuthMode(true);
				toggleModal(true)();
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
				await patch('/api/users/info', { nickname, phone });
			} catch (error) {
				Swal.fire({
					title: '회원정보 수정에 실패했습니다',
					icon: 'error',
					confirmButtonColor: 'var(--button--color)',
				});
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
						<LargeButton
							onClick={UserInfoChangeHandler}
							disabled={isButtonDisabled}>
							회원정보수정
						</LargeButton>
					</ButtonContainer>
					<Modal
						isOpen={isOpen}
						closeModal={toggleModal(false)}
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
