import { useState } from 'react';
import { BtnConatiner, TitleInput } from '@components/Modal/modal';
import { post } from '@src/api/api';
import LargeButton from '@components/Buttons/LargeButton';
import TopBar from '@components/TopBar/TopBar';
import { IntroBox } from '@components/Profile/myIntro.ts';
interface MyReviewProps {
	closeModal: () => void;
	id?: string;
}

function MyReview({ closeModal, id }: MyReviewProps) {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [file, setFile] = useState<File | null>(null);

	const handleSubmit = async () => {
		try {
			const response = await post(
				'/api/review',
				{ title: title, content: content, volunteer_id: id },
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				},
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
		closeModal();
	};

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		set;
	};

	<IntroBox
		placeholder='최대 200자 까지 가능합니다'
		onChange={handleContentChange}
	/>;

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

			<ReactQuill
				onChange={onEditorContentChanged}
				modules={modules}
				placeholder={placeholder}
				style={{ height: '35rem', marginTop: '2rem' }}
				formats={formats}
				ref={quillRef}
			/>
			<BtnConatiner>
				<LargeButton onClick={handleSubmit}>후기 작성하기</LargeButton>
			</BtnConatiner>
		</>
	);
}

export default MyReview;
