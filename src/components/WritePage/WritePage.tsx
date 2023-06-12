import { useState } from 'react';
import {
	TextContainer,
	Container,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
	ContentInput,
	TextLength,
} from '@components/WritePage/WritePageStyle';

type WritePageProps = {
	onSave: (inputTitle: string, textContent: string) => void;
	onCancel: () => void;
};

const WritePage = ({ onSave, onCancel }: WritePageProps) => {
	const [content, setContent] = useState('');
	const [inputTitle, setInputTitle] = useState('');

	const onClickHandler = () => {
		const textContent = content;
		onSave(inputTitle, textContent);
		clearContent();
	};

	const handelInputChange = (event: any) => {
		const text = event.target.value;
		if (text.length <= 2000) {
			setContent(text);
		}
	};

	const deleteContent = () => {
		clearContent();
		onCancel();
	};

	const clearContent = () => {
		setInputTitle('');
		setContent('');
	};

	return (
		<>
			<Container>
				<TitleInput
					placeholder='제목을 입력해주세요'
					value={inputTitle}
					onChange={(e) => setInputTitle(e.target.value)}
				/>
				<TextContainer>
					<ContentInput
						placeholder='내용입력'
						value={content}
						onChange={handelInputChange}
						maxLength={2000}
					/>
				</TextContainer>
				<TextLength>{content.length}/2000</TextLength>
				<ButtonContainer>
					<CancelButton onClick={deleteContent}>취소</CancelButton>
					<SubmitButton onClick={onClickHandler}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default WritePage;
