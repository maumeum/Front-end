import { useState } from 'react';
import WritePage from '../../components/WritePage/WritePage';
import { post } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import parse from 'html-react-parser';

const QuestionWrite = () => {
	const [postData, setPostData] = useState({
		title: '',
		content: '',
	});

	const onSavePost = (inputTitle: string, content: string) => {
		setPostData({
			title: inputTitle,
			content: content,
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
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	};

	const onCancelPost = () => {
		setPostData({
			title: '',
			content: '',
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
