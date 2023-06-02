import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import { UserFormContainer, InputContainer } from './userForm';
import { DataInput, DataName } from '../../pages/userPage/style';
import LargeButton from '../../components/Buttons/LargeButton';
import Swal from 'sweetalert2';

function UserForm() {
	const [password, setPassword] = useState('');
	const DbPassword = '1234';
	const navigate = useNavigate();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		//유저의 db 비밀번호와 일치한다면
		if (password === DbPassword) {
			Swal.fire({
				title: '확인되었습니다:)',
				icon: 'success',
				confirmButtonColor: '#afcd81',
				confirmButtonText: '확인',
			});
			navigate('/');
		} else {
			Swal.fire({
				title: '비밀번호가 일치하지 않습니다',
				icon: 'error',
				confirmButtonColor: '#afcd81',
				confirmButtonText: '확인',
			});
		}
	};
	return (
		<UserFormContainer>
			<form action=''>
				<TopBar
					title={'유저 정보 확인'}
					text={'회원정보 수정을 위해 비밀번호를 입력해주세요:)'}
					modal='modal'
				/>
				<InputContainer>
					<DataName>비밀번호</DataName>
					<DataInput
						type='password'
						name='name'
						placeholder='비밀번호를 입력해주세요.'
						onChange={e => setPassword(e.target.value)}
					/>
					<LargeButton onClick={handleClick}>확인하기</LargeButton>
				</InputContainer>
			</form>
		</UserFormContainer>
	);
}

export default UserForm;
