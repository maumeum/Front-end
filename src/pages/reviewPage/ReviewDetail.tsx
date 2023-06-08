import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get } from '@src/api/Api';
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
} from '@src/pages/community/style.ts';
import CommentSection from '@src/components/Comment/Comment.tsx';
import DataType from '@src/types/DataType';

const ReviewDetail = () => {
	const navigate = useNavigate();
	const { postId } = useParams();
	const [post, setPost] = useState<any>([]);
	//const [datauser, setDataUser] = useState<any>('');

	useEffect(() => {
		fetchPost();
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
			console.log(response);
			//setDataUser(response.data);
		} catch (error) {
			console.error('Error fetching post:', error);
		}
	};
	//로그인한 사용자 구분 로직 받기

	const handleEdit = () => {
		navigate(`/community/findfriend/edit/${postId}`);
	};

	if (!post) {
		return <div>Loading...</div>;
	}

	const { title, _id, createdAt, images, content } = post;
	const loggedInUser = '로그인한 사용자';
	const isAuthor = loggedInUser === _id;
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
							<UserName>유저네임</UserName>
							<Date>작성일 : {formattedDate}</Date>
						</InfoBox>
						{isAuthor && <Btn onClick={handleEdit}>수정하기</Btn>}
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
			<CommentSection />
		</>
	);
};

export default ReviewDetail;
