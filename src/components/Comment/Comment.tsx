import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
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
	Profile,
	ProfileContainer,
	UserContainer,
	UserName,
	Date,
	Contents,
	CommentHolder,
} from './CommentStyle';
import car from '@assets/images/car.png';
import DataType from '@src/types/DataType';
import { get, post } from '@src/api/Api';

type Comment = {
	id: string;
	content: string;
};

const CommentSection: React.FC = () => {
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState<Comment[]>([]);
	const { post_id } = useParams();
	const [value, setValue] = useState<any>([]);
	const [document, setDocument] = useState({
		content: '',
	});

	useEffect(() => {
		getComments();
	}, []);

	const getComments = async () => {
		try {
			const token = getToken();
			const response = await get<DataType>(
				'/api/postComments/647ff688c388f06766412d2f',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			setValue(response.data);
			console.log(response);
		} catch (error) {
			console.error('Error fetching post:', error);
		}
	};

	const handleCommentChange = (value: string) => {
		setComment(value);
	};

	const handleCommentSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		setDocument({
			content: comment,
		});
		console.log('Saved Comment:', comment);

		const token = getToken();
		post(
			'/api/postComments',
			{
				content: comment,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	};
	const handleCommentDelete = () => {
		setComment('');
	};
	const deleteComment = (commentId: string) => {
		setComments((prevComments) =>
			prevComments.filter((comment) => comment.id !== commentId),
		);
	};
	// const generateUniqueId = (): string => {
	// 	return Math.random().toString(36).substring(2);
	// };
	const { createdAt, user, content } = value;

	return (
		<Container>
			<Title>
				<Box></Box>
				<Comment>댓글 작성</Comment>
			</Title>

			<ReactQuill value={comment} onChange={handleCommentChange} />
			<BtnContainer>
				<Btn1 onClick={handleCommentDelete}>취소</Btn1>
				<Btn2 onClick={handleCommentSubmit}>등록</Btn2>
			</BtnContainer>

			<Title>
				<Box></Box>
				<Comment>댓글 목록</Comment>
			</Title>
			{comments.length === 0 ? (
				<CommentHolder>등록된 댓글이 없습니다.</CommentHolder>
			) : (
				comments &&
				comments.map((comment) => (
					<CommentContainer key={comment.id}>
						<ProfileContainer>
							{/* <Profile src={} alt='user-profile' /> */}
							<UserContainer>
								<UserName>{user}</UserName>
								<Date>{createdAt}</Date>
							</UserContainer>
						</ProfileContainer>
						<Contents dangerouslySetInnerHTML={{ __html: content }} />
						<BtnContainer>
							<Btn1>수정</Btn1>
							<Btn2 onClick={() => deleteComment(comment.id)}>삭제</Btn2>
						</BtnContainer>
					</CommentContainer>
				))
			)}
		</Container>
	);
};

export default CommentSection;
