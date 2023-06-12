import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get, del } from '@api/api';
import { getToken } from '@api/token';
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
} from '@src/pages/community/style';
import CommentSection from '@src/components/Comment/Comment';
import DataType from '@src/types/dataType';

const ReviewDetail = () => {
	const navigate = useNavigate();
	const { postId } = useParams() as { postId: string };
	const [post, setPost] = useState<any>([]);
	const [loginUser, setLoginUser] = useState(false);
	const [datauser, setDataUser] = useState<any>('');

	useEffect(() => {
		const fetchPost = async () => {
			const response = await get<DataType>(`/api/review/detail/${postId}`);
			setPost(response.data);
			setDataUser(response.data.user_id);
			console.log(response.data);
		};
		fetchPost();
	}, []);

	useEffect(() => {
		const loginUserLogic = async () => {
			const response = await get<DataType>(`/api/review/check/${postId}`);
			setLoginUser(response.data);
		};
		loginUserLogic();
	}, []);

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
						<Content>{content}</Content>
					</Contentdiv>
				</ContentContainer>
			</DetailContainer>
			<CommentSection postId={postId} />
		</>
	);
};

export default ReviewDetail;
