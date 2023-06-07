import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import {
	UserFormContainer,
	InputContainer,
} from '@components/UserForm/userForm';
import { DataInput, DataName } from '@src/pages/userPage/style';
import LargeButton from '@components/Buttons/LargeButton';
import Swal from 'sweetalert2';
import { post } from '@src/api/Api';
const token = localStorage.getItem('userToken');

type UserFormProps = {
	closeModal: () => void;
	editMode?: boolean;
	authMode?: boolean;
};

function UserForm({ closeModal, editMode, authMode }: UserFormProps) {
	const [password, setPassword] = useState('');
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
	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

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
			closeModal();
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
	};

	return (
		<>
			<UserFormContainer>
				<TopBar title={modalTitle} text={modalText} modal='modal' />

				<InputContainer>
					<div>
						<DataName>비밀번호 </DataName>
						<DataInput
							type='password'
							name='name'
							placeholder='변경할 비밀번호를  입력해주세요.'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					{editMode && (
						<div>
							<DataName>비밀번호 확인</DataName>
							<DataInput
								type='password'
								name='password'
								placeholder='비밀번호를 다시 입력해주세요.'
								onChange={(e) => setPassword(e.target.value)}
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
