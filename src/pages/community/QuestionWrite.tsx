import { useState } from 'react';
import WritePage from '../../components/WritePage/WritePage';
import { post } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';

const QuestionWrite = () => {
	const navigate = useNavigate();
	const [postData, setPostData] = useState({
		title: '',
		content: '',
		postType: 'qna',
	});

	const onSavePost = (inputTitle: string, content: string) => {
		setPostData({
			title: inputTitle,
			content: content,
			postType: 'qna',
		});
		console.log('Saved question Post:', inputTitle, content);

		const token = getToken();
		console.log(token);
		// API 호출을 수행하는 부분
		post(
			'/api/community/create',
			{
				title: inputTitle,
				content: parse(content as string),
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
