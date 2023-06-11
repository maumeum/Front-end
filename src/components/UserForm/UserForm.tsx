import React, { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import {
	UserFormContainer,
	InputContainer,
} from '@components/UserForm/userForm';
import LargeButton from '@components/Buttons/LargeButton';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import { post, patch } from '@src/api/Api';
import { validPassword } from '@src/utils/signUpCheck.ts';
import { passwordError, passwordCheckError } from '@src/utils/errorMessage.ts';
import InputForm from '@src/components/UserForm/InputForm.tsx';
import { deleteToken } from '@src/api/Token';

interface UserFormProps {
	closeModal: () => void;
	isChangePasswordModal?: boolean;
}

function UserForm({ closeModal, isChangePasswordModal }: UserFormProps) {
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const navigate = useNavigate();
	const modalTitle = isChangePasswordModal ? '비밀번호 변경' : '유저 정보 확인';
	const modalText = isChangePasswordModal
		? '변경할 새로운 비밀번호를 입력해주세요:)'
		: '본인확인을 위해 비밀번호를 입력해주세요:)';

	const getFormChanger =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSubmit(false);
			setter(e.target.value);
		};

	const changePasswordHandle = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		//본인확인요청
		if (!isChangePasswordModal) {
			try {
				await post('/api/users/auth', { password });
				Swal.fire(alertData.successMessage('확인되었습니다:)'));
				navigate('/mypage/edit');
			} catch (error) {
				Swal.fire(alertData.errorMessage('비밀번호를 확인해주세요:)'));
			}
		}

		if (isChangePasswordModal) {
			if (password === '' || checkPassword === '') {
				Swal.fire(alertData.infoMessage('비밀번호를 입력해주세요!'));
				return;
			}

			if (password !== checkPassword || !validPassword(password)) {
				Swal.fire(alertData.wrongPwd);
				return;
			}

			if (validPassword(password)) {
				try {
					await patch('/api/users/info', { password });
					Swal.fire(
						alertData.successMessage(
							'비밀번호가 변경되었습니다! 재로그인 해주세요:)',
						),
					);
					closeModal();
					deleteToken();
					navigate('/login');
				} catch (error) {
					Swal.fire(alertData.errorMessage('비밀번호 변경에 실패하였습니다.'));
				}
			}
		}
	};

	return (
		<>
			<UserFormContainer>
				<TopBar title={modalTitle} text={modalText} modal='modal' />

				<InputContainer>
					<div>
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
					</div>

					{isChangePasswordModal && (
						<div>
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
						</div>
					)}
					<LargeButton onClick={changePasswordHandle}>확인하기</LargeButton>
				</InputContainer>
			</UserFormContainer>
		</>
	);
}

export default UserForm;
