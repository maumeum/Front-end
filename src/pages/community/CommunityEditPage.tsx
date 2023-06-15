import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DataType from '@src/types/dataType.ts';
import { get, patch } from '@api/api';
import {
	TextContainer,
	Container,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
	ContentInput,
	TextLength,
	ImageArea,
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
	const [selectedImage, setSelectedImage] = useState<File[]>([]);

	useEffect(() => {
		const fetchPost = async () => {
			const response = await get<DataType>(`/api/community/${postId}`, {});
			setPost(response.data.post.post);
			setInputTitle(response.data.post.post.title);
			setInputContent(response.data.post.post.content);
		};
		fetchPost();
	}, []);

	const handleInputChange = (event: any) => {
		const text = event.target.value;
		if (text.length <= 2000) {
			setInputContent(text);
		}
	};

	const handelImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const chosenFiles = e.target.files;
		if (chosenFiles) {
			setSelectedImage((prevFiles) => [
				...prevFiles,
				...Array.from(chosenFiles),
			]);
		}
	};

	const editPost = async () => {
		if (!inputTitle || !inputContent) {
			Swal.fire(alertData.fillTitleContent);
			return;
		}

		const formData = new FormData();
		formData.append('title', inputTitle);
		formData.append('content', inputContent);
		formData.append('postType', 'findfriend');
		if (selectedImage) {
			for (let i = 0; i < selectedImage.length; i++) {
				formData.append('images', selectedImage[i]);
			}
		}
		for (const [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}
		await patch<DataType>(`/api/community/${postId}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		Swal.fire(alertData.successMessage('게시글이 수정되었습니다.'));
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
				<ImageArea>
					이미지업로드
					<input
						id='fileInput'
						type='file'
						accept='image/*'
						name='image'
						multiple
						onChange={handelImageChange}
					/>
				</ImageArea>
			</Container>
		</>
	);
};

export default CommunityEditPage;
