import React from 'react';

import { ImageLabel, ImageInput } from '@components/Profile/myIntro';

interface ImageData {
	setFile: (file: File | null) => void;
	imageType: 'thumbnail' | 'image';
}

const UploadThumbnail = ({ setFile, imageType }: ImageData) => {
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
				{imageType === 'thumbnail' &&
					'봉사활동과 관련된 썸네일을 등록해주세요.'}
				{imageType === 'image' && '봉사활동과 관련된 이미지를 등록해주세요.'}
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

export default UploadThumbnail;
