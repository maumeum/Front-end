import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get, del } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import Parser from 'html-react-parser';
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
} from '@src/pages/community/style.ts';
import CommentSection from '@src/components/Comment/Comment.tsx';
import DataType from '@src/types/DataType';

const ReviewDetail = () => {
	const navigate = useNavigate();
	const { postId } = useParams() as { postId: string };
	const [post, setPost] = useState<any>([]);
	const [loginUser, setLoginUser] = useState(false);
	const [datauser, setDataUser] = useState<any>('');

	useEffect(() => {
		fetchPost();
		loginUserLogic();
	}, []);

	const fetchPost = async () => {
		try {
			const token = getToken();
			const response = await get<DataType>(`/api/review/detail/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setPost(response.data);
			setDataUser(response.data.user_id);
			console.log(response.data);
			// console.log(response.data.content);
			//setDataUser(response.data);
		} catch (error) {
			console.error('Error fetching post:', error);
		}
	};

	const loginUserLogic = async () => {
		try {
			const token = getToken();
			const response = await get<DataType>(`/api/review/check/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setLoginUser(response.data);
			console.log('loginLogic test', response);
		} catch (error) {
			console.error(error);
		}
	};

	const handleEdit = () => {
		navigate(`/community/findfriend/edit/${postId}`);
	};

	if (!post) {
		return <div>Loading...</div>;
	}

	const handleDelete = async () => {
		try {
			const token = getToken();
			await del<DataType>(`/api/review/users/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			navigate('/review');
		} catch (error) {
			console.log('Error delecting post:', error);
		}
	};

	const { title, _id, createdAt, images, content } = post;
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
							<UserName>{datauser.nickname}</UserName>
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
						{/* <Content>{Parser(content)}</Content> */}
						<Content>
							{typeof content === 'string' ? Parser(content) : null}
						</Content>
					</Contentdiv>
				</ContentContainer>
			</DetailContainer>
			<CommentSection postId={postId} />
		</>
	);
};

export default ReviewDetail;
