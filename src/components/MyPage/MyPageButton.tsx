import React, { useEffect } from 'react';

import useAuthStore from '@src/store/useAuthStore.ts';
import { getToken } from '@api/Token';
import { ButtonContainer, Image } from './myPage.ts';

import myPic from '@assets/images/car.png';

const MyPageButton = () => {
	const { userData, initialize } = useAuthStore();

	useEffect(() => {
		initialize();
	}, []);

	return (
		<>
			{getToken() !== null ? (
				<ButtonContainer to='/mypage'>
					<Image src={myPic} />
				</ButtonContainer>
			) : (
				''
			)}
		</>
	);
};

export default MyPageButton;
