import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getToken } from '@src/api/Token';
import DataType from '@src/types/DataType.ts';
import { get, patch } from '@src/api/Api';
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
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';

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
		if (!inputTitle || !input) {
			Swal.fire(alertData.fillTitleContent);
			return;
		}
		const response = await patch<DataType>(`/api/community/${postId}`, {
			title: inputTitle,
			content: input,
		});
		navigate(`/community/${postId}`);
	};

	const backPostList = () => {
		navigate(`/community/${postId}`);
	};

	const { title } = post;

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
					<CancelButton onClick={backPostList}>취소</CancelButton>
					<SubmitButton onClick={editPost}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default CommunityEditPage;
