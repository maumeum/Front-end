import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
	ImgContainer,
	ImgPreview,
	ButtonContainer,
	InputConatiner,
} from '@components/Profile/profileImg';
import img from '@assets/images/car.png';
import Swal from 'sweetalert2';
import useAuthStore from '@src/store/useAuthStore.ts';
import { patch } from '@api/Api';
import { getToken } from '@api/Token';

const url = import.meta.env.VITE_API_URL;
function ProfileImg() {
	const { userData, initialize } = useAuthStore();

	useEffect(() => {
		initialize();
	}, []);

	useEffect(() => {
		setBeforeImg(userData?.image);
	}, [userData]);

	const [beforeImg, setBeforeImg] = useState<string | undefined>('');
	const [afterImg, setAfterImg] = useState<string>('');
	const [isUpload, setIsUpload] = useState<boolean>(false);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

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
		if (beforeImg) {
			setAfterImg(beforeImg);
		}
		setIsUpload(false);
	};

	const handleDeleteImage = () => {
		console.log('이미지 취소 요청');
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			await patch(
				'/api/users/image',
				{ image: afterImg },
				{
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				},
			);
		} catch (error) {
			console.log(error);
			return;
		}
		Swal.fire({
			title: '프로필 사진이 변경되었습니다',
			icon: 'success',
			confirmButtonColor: 'var(--button--color)',
		});
	};
	return (
		<>
			<ImgContainer>
				<form onSubmit={handleSubmit} encType='multipart/form-data'>
					<ImgPreview>
						{isUpload ? (
							<img src={afterImg} alt='Uploaded' />
						) : (
							<img src={`${url}/${beforeImg}`} alt='Original' />
						)}
					</ImgPreview>
					<InputConatiner>
						<label htmlFor='fileInput'>파일을 선택해주세요</label>
						<input
							id='fileInput'
							type='file'
							accept='image/*'
							name='image'
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
