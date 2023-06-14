import React from 'react';
import { useState } from 'react';
import WritePageProps from './WritePageProps';
import {
	TextContainer,
	Container,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
	ContentInput,
	TextLength,
} from '../WritePage/WritePageStyle';

const WritePage = ({ onSave, onCancel }: WritePageProps) => {
	const [content, setContent] = useState('');
	const [inputTitle, setInputTitle] = useState('');

	const onClickHandler = () => {
		onSave(inputTitle, content);
		clearContent();
	};

	const handelInputContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value;
		if (text.length <= 2000) {
			setContent(text);
		}
	};

	const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setInputTitle(text);
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
					onChange={handleInputTitle}
				/>
				<TextContainer>
					<ContentInput
						placeholder='내용입력'
						value={content}
						onChange={handelInputContent}
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
