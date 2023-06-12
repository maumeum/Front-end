import { useEffect } from 'react';

import useAuthStore from '@src/store/useAuthStore';
import { getToken } from '@api/token';
import { ButtonContainer, ButtonWord } from './myPage.ts';

const MyPageButton = () => {
	const { userData, getUserData } = useAuthStore();

	// user 정보 불러오기
	useEffect(() => {
		getUserData();
	}, []);

	return (
		<>
			{getToken() !== null ? (
				<>
					{userData !== null && userData.role === 'user' ? (
						<ButtonContainer to='/mypage'>
							<ButtonWord>MY</ButtonWord>
						</ButtonContainer>
					) : (
						<ButtonContainer to='/admin/team_auth'>
							<ButtonWord>관리자</ButtonWord>
						</ButtonContainer>
					)}
				</>
			) : (
				''
			)}
		</>
	);
};

export default MyPageButton;
