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
	const { userData, getUserData } = useAuthStore();

	useEffect(() => {
		getUserData();
	}, []);

	useEffect(() => {
		setBeforeImg(userData?.image);
	}, [userData]);

	const [beforeImg, setBeforeImg] = useState<string | undefined>('');
	const [afterImg, setAfterImg] = useState<string>('');
	const [isUpload, setIsUpload] = useState<boolean>(false);
	const [file, setFile] = useState<File | null>(null);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			const reader = new FileReader();
			reader.readAsDataURL(selectedFile);
			reader.onload = () => {
				const imageDataUrl = reader.result as string;
				setAfterImg(imageDataUrl);
			};
			setFile(selectedFile);
			setIsUpload(true);
		}
	};

	const handleResetImage = () => {
		if (beforeImg) {
			setAfterImg(beforeImg);
		}
		setIsUpload(false);
		setFile(null);
	};

	const handleDeleteImage = () => {
		Swal.fire({
			title: '기본 이미지로 변경하시겠습니까??',
			icon: 'info',
			showCancelButton: true,
			confirmButtonColor: '#ffd4d4',
			cancelButtonColor: '#afcd81',
			confirmButtonText: '네',
			cancelButtonText: '아니요',
		}).then(async (result) => {
			//여기에 기본이미지 변경 api
			try {
				await patch('/api/users/original/image', {});
				Swal.fire({
					title: '기본이미지로 변경되었습니다',
					icon: 'success',
					confirmButtonText: '확인',
					confirmButtonColor: 'var(--button--color)',
				});
			} catch (error) {
				console.log(error);
			}
			if (result.isConfirmed) {
				Swal.fire({
					title: '기본이미지로 변경되었습니다!',
					icon: 'success',
					confirmButtonColor: 'var(--button--color)',
				}).then(() => {
					window.location.reload();
				});
			}
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const formData = new FormData();
		if (file) {
			formData.append('image', file);
		} else {
			Swal.fire({
				title: '업로드할 이미지가 없습니다',
				icon: 'error',
				confirmButtonColor: 'var(--button--color)',
			});
			return;
		}
		try {
			await patch('/api/users/image', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			setIsUpload(true);
		} catch (error) {
			Swal.fire({
				title: '이미지 변경에 실패했습니다.',
				icon: 'error',
				confirmButtonColor: 'var(--button--color)',
			});
			return;
		}
		Swal.fire({
			title: '프로필 사진이 변경되었습니다',
			icon: 'success',
			confirmButtonColor: 'var(--button--color)',
		}).then(() => {
			window.location.reload();
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
								취소하기
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
