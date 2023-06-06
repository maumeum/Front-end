import React, { useState, useEffect } from 'react';
import {
	ImgContainer,
	ImgPreview,
	ButtonContainer,
	InputConatiner,
} from '@components/Profile/profileImg';
import img from '@assets/images/car.png';
import Swal from 'sweetalert2';

function ProfileImg() {
	useEffect(() => {
		setBeforeImg(img);
	}, []);

	const [beforeImg, setBeforeImg] = useState<string>('');
	const [afterImg, setAfterImg] = useState<string>('');
	const [isUpload, setIsUpload] = useState<boolean>(false);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		console.log(file);
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const imageDataUrl = reader.result as string;
				setAfterImg(imageDataUrl);
			};
			reader.readAsDataURL(file);
			setIsUpload(true);
		}
	};

	const handleResetImage = () => {
		setAfterImg(beforeImg);
		setIsUpload(false);
	};

	const handleDeleteImage = () => {
		console.log('이미지 취소 요청');
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		Swal.fire({
			title: '프로필 사진이 변경되었습니다',
			icon: 'success',
			confirmButtonColor: 'var(--button--color)',
		});
	};
	return (
		<>
			<ImgContainer>
				<form action='#' onSubmit={handleSubmit}>
					<ImgPreview>
						{isUpload ? (
							<img src={afterImg} alt='Uploaded' />
						) : (
							<img src={beforeImg} alt='Original' />
						)}
					</ImgPreview>
					<InputConatiner>
						<label htmlFor='fileInput'>파일을 선택해주세요</label>
						<input
							id='fileInput'
							type='file'
							accept='image/*'
							onChange={handleImageChange}
						/>
					</InputConatiner>
					<ButtonContainer>
						<button>저장하기</button>
						{isUpload ? (
							<button type='button' onClick={handleResetImage}>
								삭제하기
							</button>
						) : (
							<button type='button' onClick={handleDeleteImage}>
								기본 프로필
							</button>
						)}
					</ButtonContainer>
				</form>
			</ImgContainer>
		</>
	);
}

export default ProfileImg;
