import { useRef, useState } from 'react';
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

	const modules = {
		toolbar: {
			container: [
				[{ header: [1, 2, 3, false] }],
				['bold', 'italic', 'underline', 'strike'],
				['blockquote'],
				[{ list: 'ordered' }, { list: 'bullet' }],
				[{ color: [] }, { background: [] }],
				[{ align: [] }, 'link', 'image'],
			],
		},
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
						modules={modules}
					/>
				</TextContainer>
				<ButtonContainer>
					<CancelButton>취소</CancelButton>
					<SubmitButton onClick={onClickHandler}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default WritePage;
