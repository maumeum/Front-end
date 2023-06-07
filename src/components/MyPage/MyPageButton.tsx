import { getToken } from '@api/Token';
import { ButtonContainer, ButtonWord } from './myPage.ts';

const MyPageButton = () => {
	return (
		<>
			{getToken() !== null ? (
				<ButtonContainer to='/mypage'>
					<ButtonWord>마이페이지</ButtonWord>
				</ButtonContainer>
			) : (
				''
			)}
		</>
	);
};

export default MyPageButton;
