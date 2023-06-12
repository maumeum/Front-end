import { useState } from 'react';
import WritePage from '@components/WritePage/WritePage';
import { post } from '@src/api/api';
import { getToken } from '@src/api/Token';
import { useNavigate } from 'react-router-dom';

const FindFriendWrite = () => {
	const navigate = useNavigate();
	const [postData, setPostData] = useState({
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
		await post(
			'/api/community/create',
			{
				title: inputTitle,
				content: content,
				postType: 'findfriend',
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
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
