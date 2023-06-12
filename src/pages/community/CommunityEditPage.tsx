import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getToken } from '@src/api/token';
import DataType from '@src/types/dataType.ts';
import { get, patch } from '@src/api/api';
import {
	TextContainer,
	Container,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
	ContentInput,
	TextLength,
} from '@src/components/WritePage/WritePageStyle';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';

const CommunityEditPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { postId } = location.state;
	const [post, setPost] = useState<any>([]);
	const [inputContent, setInputContent] = useState('');
	const [inputTitle, setInputTitle] = useState('');

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
				setInputTitle(response.data.post.post.title);
				setInputContent(response.data.post.post.content);
				console.log(response);
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		};
		fetchPost();
	}, [postId]);

	const handleInputChange = (event: any) => {
		const text = event.target.value;
		if (text.length <= 2000) {
			setInputContent(text);
		}
	};

	const editPost = async () => {
		if (!inputTitle || !inputContent) {
			Swal.fire(alertData.fillTitleContent);
			return;
		}
		await patch<DataType>(`/api/community/${postId}`, {
			title: inputTitle,
			content: inputContent,
		});
		navigate(`/community/${postId}`);
	};

	const backPostList = () => {
		navigate(`/community/${postId}`);
	};

	const { title, content } = post;

	return (
		<>
			<Container>
				<TitleInput
					placeholder={title}
					value={inputTitle}
					onChange={(e) => setInputTitle(e.target.value)}
				/>
				<TextContainer>
					<ContentInput
						placeholder={content}
						value={inputContent}
						onChange={handleInputChange}
						maxLength={2000}
					/>
				</TextContainer>
				<TextLength>{inputContent.length}/2000</TextLength>
				<ButtonContainer>
					<CancelButton onClick={backPostList}>취소</CancelButton>
					<SubmitButton onClick={editPost}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default CommunityEditPage;
