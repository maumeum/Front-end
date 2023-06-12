import { useState } from 'react';
import WritePage from '@components/WritePage/WritePage';
import { post } from '@api/api';
import { getToken } from '@api/token';
import { useNavigate } from 'react-router-dom';

const FindFriendWrite = () => {
	const navigate = useNavigate();
	const [selectedImage, setSelectedImage] = useState<File[]>([]);
	const [_, setPostData] = useState({
		title: '',
		content: '',
		postType: 'findfriend',
	});

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
			<WritePage onSave={onSavePost} onCancel={onCancelPost} />
		</>
	);
};

export default FindFriendWrite;
