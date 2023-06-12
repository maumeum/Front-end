import { useState } from 'react';
import WritePage from '@components/WritePage/WritePage';
import { post } from '@src/api/api';
import { getToken } from '@src/api/Token';
import { useNavigate } from 'react-router-dom';

const FindFriendWrite = () => {
	const navigate = useNavigate();
	const [selectedImage, setSelectedImage] = useState<File[]>([]);
	const [postData, setPostData] = useState({
		title: '',
		content: '',
		postType: 'findfriend',
	});

	const imageHandler = () => {
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.onchange = (e: any) => {
			const file = e.target.files[0];
			setSelectedImage(file);
		};
		input.click();
	};

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
		if (selectedImage) {
			formData.append('image', selectedImage);
		}
		await post('/api/community/create', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			},
		});
		navigate('/community/findfriend');
	};

	const onCancelPost = () => {
		setPostData({
			title: '',
			content: '',
			postType: 'findfriend',
		});
		console.log('Cancelled Post');
	};

	return (
		<>
			<WritePage
				onSave={onSavePost}
				onCancel={onCancelPost}
				ImageHandler={imageHandler}
			/>
		</>
	);
};

export default FindFriendWrite;
