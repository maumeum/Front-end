import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getToken } from '@src/api/Token';
import DataType from '@src/types/DataType.ts';
import { get, patch } from '@src/api/api';
import ReactQuill from 'react-quill';
import {
	TextContainer,
	Container,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
} from '@src/components/WritePage/WritePageStyle';
import 'react-quill/dist/quill.snow.css';

//react-quill 태그문제 미완 코드입니다.

const CommunityEditPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { postId } = location.state;
	const [post, setPost] = useState<any>([]);
	const [input, setInput] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const quillRef = useRef<ReactQuill>(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const token = getToken();
				const response = await get<DataType>(`/api/community/${postId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setPost(response.data.post.post);
				console.log(response);
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		};
		fetchPost();
	}, [postId]);

	const editPost = async () => {
		try {
			const token = getToken();
			const response = await patch<DataType>(
				`/api/community/${postId}`,
				{
					title: inputTitle,
					content: input,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			console.log(inputTitle, input);
			console.log('Post edited successfully:', response);
			navigate(`/community/${postId}`);
		} catch (error) {
			console.error(error);
		}
	};

	const { title, images, content } = post;
	console.log(content);

	return (
		<>
			<Container>
				<TitleInput
					placeholder={title}
					value={inputTitle}
					onChange={(e) => setInputTitle(e.target.value)}
				/>
				<TextContainer>
					<ReactQuill
						style={{ width: '112rem', height: '90rem', margin: '0 auto' }}
						placeholder='내용을 입력해주세요'
						theme='snow'
						ref={quillRef}
						value={input}
						onChange={setInput}
					/>
				</TextContainer>
				<ButtonContainer>
					<CancelButton>취소</CancelButton>
					<SubmitButton onClick={editPost}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default CommunityEditPage;
