import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import {
	TextContainer,
	Container,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
} from '../WritePage/WritePageStyle';
import 'react-quill/dist/quill.snow.css';
import { quillModule } from '../Modal/quillModule';
import parse from 'html-react-parser';

type WritePageProps = {
	onSave: (inputTitle: string, content: string) => void;
	onCancel: () => void;
};

const WritePage: React.FC<WritePageProps> = ({ onSave, onCancel }) => {
	const quillRef = useRef<ReactQuill>(null);
	const [content, setContent] = useState('');
	const [inputTitle, setInputTitle] = useState('');

	const onClickHandler = () => {
		const parsedContent = parse(content);
		const textContent = extractTextFromParsedContent(parsedContent);
		onSave(inputTitle, textContent);
		clearContent();
	};

	const deleteContent = () => {
		clearContent();
		onCancel();
	};

	const clearContent = () => {
		setInputTitle('');
		setContent('');
		if (quillRef.current) {
			quillRef.current.getEditor().setText('');
		}
	};
	const extractTextFromParsedContent = (parsedContent: any): string => {
		if (typeof parsedContent === 'string') {
			return parsedContent;
		}
		if (parsedContent && parsedContent.props && parsedContent.props.children) {
			return extractTextFromParsedContent(parsedContent.props.children);
		}
		return '';
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
					<ReactQuill
						style={{ width: '112rem', height: '90rem', margin: '0 auto' }}
						placeholder='내용입력'
						theme='snow'
						ref={quillRef}
						value={content}
						onChange={setContent}
						modules={quillModule}
					/>
				</TextContainer>
				<ButtonContainer>
					<CancelButton onClick={deleteContent}>취소</CancelButton>
					<SubmitButton onClick={onClickHandler}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default WritePage;
