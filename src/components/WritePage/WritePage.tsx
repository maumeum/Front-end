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

type WritePageProps = {
	title: string;
	subtitle: string;
};
const WritePage = ({ title, subtitle }: WritePageProps) => {
	const quillRef = useRef();
	const [content, setContent] = useState('');

	const onClickHandler = () => {
		console.log(content);
	};

	const deletecontent = () => {
		setContent('');
	};

	return (
		<>
			<Container>
				<TitleInput placeholder={title}></TitleInput>
				<TextContainer>
					<ReactQuill
						style={{ width: '112rem', height: '90rem', margin: '0 auto' }}
						placeholder={subtitle}
						theme='snow'
						ref={quillRef}
						value={content}
						onChange={setContent}
						modules={quillModule}
					/>
				</TextContainer>
				<ButtonContainer>
					<CancelButton onClick={deletecontent}>취소</CancelButton>
					<SubmitButton onClick={onClickHandler}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default WritePage;
