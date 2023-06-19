import { useState } from 'react';
import WritePage from '@components/WritePage/WritePage';
import { post } from '@api/api';
import { getToken } from '@api/token';
import { useNavigate } from 'react-router-dom';
import { ImageArea, Container } from './style';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';

const QuestionWrite = () => {
	const navigate = useNavigate();
	const [selectedImage, setSelectedImage] = useState<File[]>([]);
	const [_, setPostData] = useState({
		title: '',
		content: '',
		postType: 'qna',
	});

	const handelImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const chosenFiles = e.target.files;
		if (chosenFiles) {
			setSelectedImage((prevFiles) => [
				...prevFiles,
				...Array.from(chosenFiles),
			]);
		}
	};

	const onSavePost = async (inputTitle: string, content: string) => {
		setPostData({
			title: inputTitle,
			content: content,
			postType: 'qna',
		});

		const token = getToken();
		const formData = new FormData();
		formData.append('title', inputTitle);
		formData.append('content', content);
		formData.append('postType', 'qna');
		for (let i = 0; i < selectedImage.length; i++) {
			formData.append('images', selectedImage[i]);
		}
		for (const [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}
		await post('/api/community/create', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			},
		});
		Swal.fire(alertData.successMessage('게시글이 등록되었습니다.'));
		navigate('/community/question');
	};

	const onCancelPost = () => {
		setPostData({
			title: '',
			content: '',
			postType: 'qna',
		});
	};

	return (
		<>
			<Container>
				<WritePage onSave={onSavePost} onCancel={onCancelPost} />
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

export default QuestionWrite;
