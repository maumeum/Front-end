import React, { useState, MouseEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import {
	UserFormContainer,
	InputContainer,
} from '@components/UserForm/userForm';
import LargeButton from '@components/Buttons/LargeButton';
import Swal from 'sweetalert2';
import { post, patch } from '@src/api/Api';
import { validPassword } from '@src/utils/signUpCheck.ts';
import { passwordError, passwordCheckError } from '@src/utils/errorMessage.ts';
import InputForm from '@src/components/UserForm/InputForm.tsx';
import { getToken, deleteToken } from '@src/api/Token';

const token = getToken();

type UserFormProps = {
	closeModal: () => void;
	editMode?: boolean;
	authMode?: boolean;
};

function UserForm({ closeModal, editMode, authMode }: UserFormProps) {
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const navigate = useNavigate();
	const modalTitle = editMode
		? '비밀번호 변경'
		: authMode
		? '유저 정보 확인'
		: '';
	const modalText = editMode
		? '변경할 새로운 비밀번호를 입력해주세요:)'
		: authMode
		? '본인확인을 위해 비밀번호를 입력해주세요:)'
		: '';

	const getFormChanger =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSubmit(false);
			setter(e.target.value);
		};

	const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		//본인확인요청
		if (authMode) {
			try {
				await post(
					'/api/users/auth',
					{ password },
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				Swal.fire({
					title: '확인되었습니다:)',
					icon: 'success',
					confirmButtonColor: '#afcd81',
					confirmButtonText: '확인',
				});
				//회원정보 수정하는 컴포넌트
				navigate('/mypage/edit');
			} catch (error) {
				console.log(error);
				Swal.fire({
					title: '비밀번호가 일치하지 않습니다',
					icon: 'error',
					confirmButtonColor: '#afcd81',
					confirmButtonText: '확인',
				});
			}
		}

		if (editMode) {
			if (password !== checkPassword) {
				Swal.fire({
					icon: 'error',
					title: '비밀번호가 일치하지 않습니다.',
					confirmButtonColor: '#d33',
				});
				return;
			}

			if (validPassword(password)) {
				try {
					await patch(
						'/api/users/info',
						{ password },
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						},
					);
					Swal.fire({
						title: '비밀번호가 변경되었습니다! 재로그인 해주세요:)',
						confirmButtonColor: 'var(--button--color)',
					});
					//모달닫고 로그아웃하고 메인으로이동시키기
					closeModal();
					deleteToken();
					navigate('/login');
				} catch (error) {
					console.log(error);
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

					{editMode && (
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
					<LargeButton onClick={handleClick}>확인하기</LargeButton>
				</InputContainer>
			</UserFormContainer>
		</>
	);
}

export default UserForm;
