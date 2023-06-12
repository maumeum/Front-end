import { useState } from 'react';
import WritePage from '@components/WritePage/WritePage';
import { post } from '@api/api';
import { getToken } from '@api/token';
import { useNavigate } from 'react-router-dom';

const QuestionWrite = () => {
	const navigate = useNavigate();
	const [_, setPostData] = useState({
		title: '',
		content: '',
		postType: 'qna',
	});

	const onSavePost = (inputTitle: string, content: string) => {
		const token = getToken();
		console.log(token);

		post(
			'/api/community/create',
			{
				title: inputTitle,
				content: content,
				postType: 'qna',
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		navigate('/community/question');
	};

	const onCancelPost = () => {
		setPostData({
			title: '',
			content: '',
			postType: 'qna',
		});
		console.log('Cancelled Post');
	};

	return (
		<>
			<WritePage onSave={onSavePost} onCancel={onCancelPost} />
		</>
	);
};

export default QuestionWrite;
