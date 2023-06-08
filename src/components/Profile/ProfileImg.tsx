import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
	ImgContainer,
	ImgPreview,
	ButtonContainer,
	InputConatiner,
} from '@components/Profile/profileImg';
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
	const [file, setFile] = useState<File | null>(null);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0]; //input 으로넘긴 file데이터
		console.log(selectedFile);
		if (selectedFile) {
			//파일이있으면
			const reader = new FileReader(); // 파일리더를만들어서 file데이터를 읽음
			reader.readAsDataURL(selectedFile);
			reader.onload = () => {
				//성공적으로 읽으면
				const imageDataUrl = reader.result as string; //결과를 변수에 저장
				setAfterImg(imageDataUrl); //파일을 url로 바꾼 데이터를 afterImage에 저장
			};
			setFile(selectedFile); //
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
		const formData = new FormData(); //키밸류

		if (file) {
			formData.append('image', file);
		} else {
			console.log('업로드할 이미지가 없습니다.');
			return;
		}
		try {
			await patch('/api/users/image', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${getToken()}`,
				},
			});
			setIsUpload(true);
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
				<form onSubmit={handleSubmit}>
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
