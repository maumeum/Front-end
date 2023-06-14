import { useState } from 'react';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject.ts';
import VolunteerWritePage from '@components/WritePage/VolunteerWritePage';
import { post } from '@api/api';
import { getToken } from '@api/token';
import { useNavigate } from 'react-router-dom';
import { ImageArea, Container } from './style';

const VolunteerWrite = () => {
	const navigate = useNavigate();
	const [selectedImage, setSelectedImage] = useState<File[]>([]);
	const [_, setPostData] = useState({
		title: '',
		content: '',
		postType: '',
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

	// selectedActType: string, inputRegisterCount: number, deadline: Date, startDate: Date, endDate: Date,
	const onSavePost = async (inputTitle: string, content: string) => {
		setPostData({
			title: inputTitle,
			content: content,
			postType: 'findfriend',
		});

		const token = getToken();
		const formData = new FormData();
		formData.append('title', inputTitle);
		formData.append('content', content);
		formData.append('postType', 'findfriend');
		for (let i = 0; i < selectedImage.length; i++) {
			formData.append('images', selectedImage[i]);
		}
		for (const [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}
		await post('/api/volunteer', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			},
		});
		navigate('/volunteer');
	};

	const onCancelPost = () => {
		setPostData({
			title: '',
			content: '',
			postType: 'findfriend',
		});
		console.log('Cancelled Post');
		navigate('/volunteers');
	};

	return (
		<>
			<Container>
				<VolunteerWritePage onSave={onSavePost} onCancel={onCancelPost} />
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

export default VolunteerWrite;
