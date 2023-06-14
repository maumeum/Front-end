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
import { validEmail, validPhoneNum } from '@utils/signUpCheck.ts';
import {
	emailError,
	nicknameError,
	phoneNumError,
} from '@utils/errorMessage.ts';
import Swal from 'sweetalert2';
import InputForm from '@components/UserForm/InputForm.tsx';
import LargeButton from '@components/Buttons/LargeButton';
import Modal from '@components/Modal/Modal.tsx';
import { useNavigate } from 'react-router-dom';
import { TabTypes } from '@src/types/myPageConstants';
import { get, patch } from '@api/api';
import alertData from '@utils/swalObject';
import DataType from '@src/types/dataType';
import check from '@assets/icons/authentication.svg';

interface MyPageUserFormProps {
	pageType: string;
}

interface UserInfo {
	email: string;
	nickname: string;
	_id: string;
	phone: string;
	image: string;
	authorization: boolean;
}

function MyPageUserForm({ pageType }: MyPageUserFormProps) {
	const [initialNickname, setInitialNickname] = useState<string>('');
	const [initialPhone, setInitialPhone] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const [authorization, setAuthorization] = useState<boolean>(false);
	const canModify = pageType === TabTypes.MYPAGE;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getUserInfoData = await get<DataType>('/api/users/info', {});
				const responseData = getUserInfoData.data as UserInfo;
				const { email, nickname, phone, authorization } = responseData;
				setEmail(email);
				setNickname(nickname);
				setPhone(phone);
				setInitialNickname(nickname);
				setInitialPhone(phone);
				setAuthorization(authorization);
			} catch (error) {
				Swal.fire(
					alertData.errorMessage('데이터를 가져오는데 실패하였습니다.'),
				);
			}
		};

		fetchData();
	}, []);
	const navigate = useNavigate();

	//모달설정
	const [isOpen, setIsOpen] = useState(false);
	const [isChangePasswordModal, setIsChangePasswordModal] = useState(false);

	const toggleModal = (onoff: boolean) => () => {
		setIsOpen(onoff);
	};

	const changePwClickHandler = () => {
		setIsChangePasswordModal(true);
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
		!canModify && !(isNicknameValid && isPhoneValid && isInfoChanged());

	const UserInfoChangeHandler = async (e: MouseEvent<HTMLButtonElement>) => {
		{
			if (canModify) {
				setIsChangePasswordModal(false);
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
				Swal.fire(alertData.errorMessage('회원정보 변경에 실패하였습니다.'));
			}
		}
		if (validPhoneNum(phone) && nickname.length > 0) {
			Swal.fire(alertData.successMessage('회원정보가 변경되었습니다.'));
			navigate('/mypage');
		}
	};

	return (
		<>
			<SignUpSection pageType={pageType}>
				<SignUpForm>
					{canModify && (
						<InputForm
							canModify={canModify}
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
					{authorization && <img src={check} alt='인증유저' />}

					<InputForm
						canModify={canModify}
						submit={submit}
						dataName='닉네임'
						inputType='text'
						name='nickname'
						value={nickname}
						onChangeFn={getFormChanger(setNickname)}
						errorMessage={nicknameError}
					/>

					<InputForm
						canModify={canModify}
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
						{!canModify && (
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
						isChangePasswordModal={isChangePasswordModal}
					/>
				</SignUpForm>
			</SignUpSection>
		</>
	);
}

export default MyPageUserForm;
