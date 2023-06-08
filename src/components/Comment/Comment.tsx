import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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

type Comment = {
	id: string;
	content: string;
};

const CommentSection: React.FC = () => {
	const userData = {
		id: '01',
		userName: '닉네임',
		userProfile: car,
		date: '23.05.21 12:00',
	};
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState<Comment[]>([]);

	const handleCommentChange = (value: string) => {
		setComment(value);
	};

	const handleCommentSubmit = () => {
		if (comment.trim() !== '') {
			const newComment: Comment = {
				id: generateUniqueId(),
				content: comment,
			};
			setComments([...comments, newComment]);
			setComment('');
		}
	};
	const handleCommentDelete = () => {
		setComment('');
	};
	const deleteComment = (commentId: string) => {
		setComments((prevComments) =>
			prevComments.filter((comment) => comment.id !== commentId),
		);
	};
	const generateUniqueId = (): string => {
		return Math.random().toString(36).substring(2);
	};

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
				comments.map((comment) => (
					<CommentContainer key={comment.id}>
						<ProfileContainer>
							<Profile src={userData.userProfile} alt='user-profile' />
							<UserContainer>
								<UserName>{userData.userName}</UserName>
								<Date>{userData.date}</Date>
							</UserContainer>
						</ProfileContainer>
						<Contents dangerouslySetInnerHTML={{ __html: comment.content }} />
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
