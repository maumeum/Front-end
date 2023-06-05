import React from 'react';
import { ImgContainer } from '@components/Profile/profileImg';

function ProfileImg() {
	return (
		<>
			<ImgContainer>
				<p>이미지</p>
				<input type='file' />
			</ImgContainer>
		</>
	);
}

export default ProfileImg;
