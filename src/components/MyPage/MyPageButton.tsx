import { useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthStore from '@src/store/useAuthStore';
import { getToken } from '@api/token';
import { ButtonContainer, ButtonWord } from './myPage.ts';

interface ClickProps {
	setClick: Dispatch<SetStateAction<string>>;
}

const MyPageButton = ({ setClick }: ClickProps) => {
	const { userData, getUserData } = useAuthStore();
	const navigate = useNavigate();

	// user 정보 불러오기
	useEffect(() => {
		getUserData();
	}, []);

	// user page
	const myPageHandler = () => {
		navigate('/mypage');
		window.scrollTo(0, 0);
		setClick(() => 'home');
	};

	// admin page
	const adminHandler = () => {
		navigate('/admin/team_auth');
		window.scrollTo(0, 0);
		setClick(() => 'home');
	};

	return (
		<>
			{getToken() !== null ? (
				<>
					{userData !== null && userData.role === 'user' ? (
						<ButtonContainer onClick={myPageHandler}>
							<ButtonWord>MY</ButtonWord>
						</ButtonContainer>
					) : (
						<ButtonContainer onClick={adminHandler}>
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
