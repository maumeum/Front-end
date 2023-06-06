import React, { useState, useEffect } from 'react';

import { get } from '@api/Api';
import { getToken } from '@api/Token';
import userType from '@src/types/userType.ts';
import { ButtonContainer, Image } from './myPage.ts';

import myPic from '@assets/images/car.png';

const MyPageButton = () => {
	const [userData, setUserData] = useState<userType[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<userType[]>('/api/users/info', {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});
			setUserData(responseData);
		};
		fetchData();
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
