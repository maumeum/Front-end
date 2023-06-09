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
		//유저의 이미지가 변하면 after이미지를 선택하면-> after이미지를 before이미지로 변경해줘야함
		setBeforeImg(userData?.image);
		console.log('이비지 변경됨');
		console.log('beforeImg', beforeImg);
		console.log('afterImg', afterImg);
	}, [userData]);

	const [beforeImg, setBeforeImg] = useState<string | undefined>(''); //기존 이미지
	const [afterImg, setAfterImg] = useState<string>(''); //변경하고자하는 이미지
	const [isUpload, setIsUpload] = useState<boolean>(false); //업로드 여부 -> 업로드 되면 true 미리보기 사진으로 보여짐 , 삭제하기버튼
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
		setFile(null); // 파일 상태 초기화
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
		}).then((result) => {
			//여기에 기본이미지 변경 api
			if (result.isConfirmed) {
				Swal.fire({
					title: '변경되었습니다!',
					icon: 'success',
					confirmButtonColor: 'var(--button--color)',
				});
			}
		});
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
