import React from 'react';

import { ImageLabel, ImageInput } from './myIntro';

interface ImageData {
	setFile: (file: File | null) => void;
}

const UploadTeamImg = ({ setFile }: ImageData) => {
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			const reader = new FileReader();
			reader.readAsDataURL(selectedFile);
			setFile(selectedFile);
		}
	};

	return (
		<>
			<ImageLabel htmlFor='fileInput'>
				팀의 로고나 대표할 수 있는 이미지로 등록해주세요.
			</ImageLabel>
			<ImageInput
				id='fileInput'
				type='file'
				accept='image/*'
				name='image'
				onChange={handleImageChange}
			/>
		</>
	);
};

export default UploadTeamImg;
