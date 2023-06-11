import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getToken } from '@src/api/Token';
import {
	Container,
	Box,
	Title,
	Comment,
	BtnContainer,
	Btn1,
	Btn2,
	CommentContainer,
	ProfileContainer,
	UserContainer,
	UserName,
	Date,
	Contents,
	CommentHolder,
} from './CommentStyle';
import DataType from '@src/types/DataType';
import { get, post } from '@src/api/Api';

type CommentProps = {
	postId: string;
};

const CommentSection: React.FC<CommentProps> = ({ postId }) => {
	const [inputArea, setInputArea] = useState('');
	const [value, setValue] = useState<any>([]);

	useEffect(() => {
		getComments();
	}, []);

	const getComments = async () => {
		try {
			const token = getToken();
			const response = await get<DataType>(`/api/postComments/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setValue(response.data);
			console.log(response.data);
		} catch (error) {
			console.error('Error fetching post:', error);
		}
	};

	const handleCommentChange = (value: string) => {
		setInputArea(value);
	};

	const handleCommentSubmit = async (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();

		if (inputArea.trim() === '') {
			return;
		}
		try {
			const token = getToken();
			await post(
				'/api/postComments/',
				{
					post_id: postId,
					content: inputArea,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			setInputArea('');
			getComments();
		} catch (error) {
			console.log('Error posting comment:', error);
		}
	};

	return (
		<Container>
			<Title>
				<Box></Box>
				<Comment>댓글 작성</Comment>
			</Title>

			<ReactQuill value={inputArea} onChange={handleCommentChange} />
			<BtnContainer>
				<Btn1>취소</Btn1>
				<Btn2 onClick={handleCommentSubmit}>등록</Btn2>
			</BtnContainer>

			<Title>
				<Box></Box>
				<Comment>댓글 목록</Comment>
			</Title>
			{value.length === 0 ? (
				<CommentHolder>등록된 댓글이 없습니다.</CommentHolder>
			) : (
				value &&
				value.map((comment: any) => (
					<CommentContainer key={comment._id}>
						<ProfileContainer>
							{/* <Profile src={} alt='user-profile' /> */}
							<UserContainer>
								<UserName>{comment.user_id.nickname}</UserName>
								<Date>{comment.createdAt}</Date>
							</UserContainer>
						</ProfileContainer>
						<Contents
							dangerouslySetInnerHTML={{ __html: comment.content }}></Contents>
						<BtnContainer>
							<Btn1>수정</Btn1>
							<Btn2>삭제</Btn2>
						</BtnContainer>
					</CommentContainer>
				))
			)}
		</Container>
	);
};
export default CommentSection;
