import { useState, ChangeEvent, useEffect } from 'react';
import { IntroContainer, IntroBox } from '@components/Profile/myIntro';
import { InputConatiner } from '@components/Profile/profileImg';
import { BtnConatiner, TitleInput } from '@components/Modal/modal';
import { post } from '@api/api';
import LargeButton from '@components/Buttons/LargeButton';
import TopBar from '@components/TopBar/TopBar';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import DataType from '@src/types/dataType';
interface MyReviewProps {
	closeModal: () => void;
	id?: string;
}

function MyReview({ closeModal, id }: MyReviewProps) {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [files, setFiles] = useState<File[]>([]);
	const [isUploaded, setIsUploaded] = useState<boolean>(false);
	const volunteer_id = id;

	// useEffect(() => {
	// 	if (isUploaded) {
	// 		// 이미지 업로드가 완료되었으므로 업데이트된 리스트를 가져옵니다.
	// 		// 리스트 업데이트 관련 코드
	// 	}
	// }, [isUploaded]);

	const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const chosenFiles = e.target.files;
		if (chosenFiles) {
			setFiles((prevFiles) => [...prevFiles, ...Array.from(chosenFiles)]);
		}
	};

	const handleSubmit = async () => {
		if (title === '') {
			Swal.fire(alertData.errorMessage('제목을 입력해주세요!'));
			return;
		} else if (content === '') {
			Swal.fire(alertData.errorMessage('본문을 입력해주세요!'));
			return;
		}

		const formData = new FormData();

		if (volunteer_id) {
			formData.append('volunteer_id', volunteer_id);
		}
		formData.append('title', title);
		formData.append('content', content);
		for (let i = 0; i < files.length; i++) {
			formData.append('images', files[i]);
		}

		try {
			await post<DataType>('/api/review', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			// window.location.reload();
			setIsUploaded(true);
		} catch (error) {
			console.log(error);
		}
		Swal.fire(alertData.successMessage('리뷰가 성공적으로 등록되었습니다:)'));
		closeModal();
	};

	return (
		<>
			<TopBar
				modal='modal'
				title={'봉사활동 리뷰작성'}
				text={'다른 사람들과 함께 봉사의 즐거움을 나눠보아요!'}
			/>
			<TitleInput
				placeholder='제목을 입력해주세요.'
				onChange={handleTitleChange}
			/>
			<IntroContainer>
				<IntroBox
					onChange={handleContentChange}
					value={content}
					placeholder='본문을 입력해주세요:)'
				/>
			</IntroContainer>

			<InputConatiner>
				<input
					id='fileInput'
					type='file'
					accept='image/*'
					name='image'
					multiple
					onChange={handleImageChange}
				/>
			</InputConatiner>

			<BtnConatiner>
				<LargeButton onClick={handleSubmit}>후기 작성하기</LargeButton>
			</BtnConatiner>
		</>
	);
}

export default MyReview;
