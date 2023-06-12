import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get, del } from '@src/api/api.ts';
import { getToken } from '@src/api/Token';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import {
	DetailContainer,
	Header,
	Title,
	SubContainer,
	InfoBox,
	UserName,
	Date,
	Btn,
	Line,
	ContentContainer,
	Image,
	Contentdiv,
	Content,
	BtnDelete,
} from './style.ts';
import CommentSection from '@src/components/Comment/Comment.tsx';
import DataType from '@src/types/DataType.ts';

const FindFriendDetail = () => {
	const navigate = useNavigate();
	const { postId } = useParams() as { postId: string };
	const [post, setPost] = useState<any>([]);
	const [datauser, setDataUser] = useState<any>('');
	const [loginUser, setLoginUser] = useState(false);

	useEffect(() => {
		fetchPost();
		loginUserLogic();
	}, []);

	const fetchPost = async () => {
		try {
			const token = getToken();
			const response = await get<DataType>(`/api/community/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setPost(response.data.post.post);
			setDataUser(response.data.post.user);
			console.log(response);
		} catch (error) {
			console.error('Error fetching post:', error);
		}
	};

	const loginUserLogic = async () => {
		try {
			const token = getToken();
			const response = await get<DataType>(`/api/community/check/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setLoginUser(response.data);
			console.log(response);
		} catch (error) {
			console.error('Error fetching post:', error);
		}
	};

	const handleEdit = () => {
		navigate(`/community/edit/${postId}`, {
			state: { postId },
		});
	};

	const handleDelete = async () => {
		try {
			const token = getToken();
			await del<DataType>(`/api/community/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			navigate('/community/findfriend');
		} catch (error) {
			console.log('Error delecting post:', error);
		}
	};

	if (!post) {
		return <div>Loading...</div>;
	}

	const { title, createdAt, images, content } = post;
	const hasPostImage = !!images;
	const formattedDate = dayjs(createdAt)
		.locale('ko')
		.format('YYYY년 MM월 DD일 HH:mm:ss');

	return (
		<>
			<DetailContainer>
				<Header>
					<Title>{title}</Title>
					<SubContainer>
						<InfoBox>
							<UserName>{datauser}</UserName>
							<Date>작성일 : {formattedDate}</Date>
						</InfoBox>
						{loginUser && <Btn onClick={handleEdit}>수정하기</Btn>}
						{loginUser && (
							<BtnDelete onClick={handleDelete}>삭제하기</BtnDelete>
						)}
					</SubContainer>
				</Header>
				<Line></Line>
				<ContentContainer>
					{hasPostImage && <Image src={images} alt='content-image' />}
					<Contentdiv>
						<Content>{content}</Content>
					</Contentdiv>
				</ContentContainer>
			</DetailContainer>
			<CommentSection postId={postId} />
		</>
	);
};

export default FindFriendDetail;
