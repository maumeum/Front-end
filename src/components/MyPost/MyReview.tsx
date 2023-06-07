import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BtnConatiner, TitleInput } from '@components/Modal/modal';

import LargeButton from '@components/Buttons/LargeButton';
import TopBar from '@components/TopBar/TopBar';
import { quillModule } from '@components/Modal/quillModule.ts';

type MyReviewProps = {
	closeModal: () => void;
};

function MyReview({ closeModal }: MyReviewProps) {
	const placeholder = '본문을 입력해주세요';
	const handleChange = (value: string) => {
		console.log(value);
	};
	const handleSubmit = () => {
		//요청보내는 코드 들어가야하는 부분
		closeModal();
	};

	return (
		<>
			{' '}
			<TopBar
				modal='modal'
				title={'봉사활동 리뷰작성'}
				text={'다른 사람들과 함께 봉사의 즐거움을 나눠보아요!'}
			/>
			<TitleInput placeholder='제목을 입력해주세요.' />
			<ReactQuill
				onChange={handleChange}
				modules={quillModule}
				placeholder={placeholder}
				style={{ height: '35rem', marginTop: '2rem' }}
			/>
			<BtnConatiner>
				<LargeButton onClick={handleSubmit}>후기 작성하기</LargeButton>
			</BtnConatiner>
		</>
	);
}

export default MyReview;
