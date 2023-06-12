import React, { useEffect, useState } from 'react';
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
	CommentArea,
	CommentLength,
	EditCommentArea,
} from './CommentStyle';
import DataType from '@src/types/dataType';
import { get, post, patch, del } from '@src/api/api';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

type CommentProps = {
	postId: string;
};

const CommentSection: React.FC<CommentProps> = ({ postId }) => {
	const [inputArea, setInputArea] = useState('');
	const [value, setValue] = useState<any>([]);
	const [editingCommentId, setEditingCommentId] = useState('');
	const [editedComment, setEditedComment] = useState('');

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

	const handleCommentChange = (event: any) => {
		const text = event.target.value;
		if (text.length <= 50) {
			setInputArea(text);
		}
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

	const handleCancelSubmit = () => {
		setInputArea('');
	};

	const handelEditingComment = (comment_id: string) => {
		const comment = value.find((comment: any) => comment._id === comment_id);
		if (comment) {
			setEditingCommentId(comment_id);
			setEditedComment(comment.content);
		}
	};

	//구현중
	const handleEditComment = async (comment_id: string) => {
		if (!editedComment) {
			alert('내용을 입력해주세요');
			return;
		}
		const token = getToken();
		const response = await patch<DataType>(
			`/api/postComments/${comment_id}`,
			{
				content: editedComment,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		setEditingCommentId('');
		setEditedComment('');
		getComments();
	};

	const handleDeleteComment = async (comment_id: string) => {
		const token = getToken();
		const response = await del<DataType>(
			`/api/postComments/${comment_id}`,

			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		getComments();
	};

	return (
		<Container>
			<Title>
				<Box></Box>
				<Comment>댓글 작성</Comment>
			</Title>

			<CommentArea
				value={inputArea}
				onChange={handleCommentChange}
				maxLength={50}
			/>
			<CommentLength>{inputArea.length}/50</CommentLength>
			<BtnContainer>
				<Btn1 onClick={handleCancelSubmit}>취소</Btn1>
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
							<UserContainer>
								<UserName>{comment.user_id.nickname}</UserName>
								<Date>
									{dayjs(comment.createdAt)
										.locale('ko')
										.format('YYYY년 MM월 DD일 HH:mm:ss')}
								</Date>
							</UserContainer>
						</ProfileContainer>
						{editingCommentId === comment._id ? (
							// 수정 중인 댓글 표시
							<>
								<EditCommentArea
									value={editedComment}
									onChange={(e) => setEditedComment(e.target.value)}
									maxLength={50}
								/>
								<BtnContainer>
									<Btn1 onClick={() => handleCancelSubmit()}>취소</Btn1>
									<Btn2 onClick={() => handleEditComment(comment._id)}>
										저장
									</Btn2>
								</BtnContainer>
							</>
						) : (
							// 수정 중이 아닌 댓글 표시
							<>
								<Contents>{comment.content}</Contents>
								<BtnContainer>
									<Btn1 onClick={() => handelEditingComment(comment._id)}>
										수정
									</Btn1>
									<Btn2 onClick={() => handleDeleteComment(comment._id)}>
										삭제
									</Btn2>
								</BtnContainer>
							</>
						)}
					</CommentContainer>
				))
			)}
		</Container>
	);
};
export default CommentSection;
