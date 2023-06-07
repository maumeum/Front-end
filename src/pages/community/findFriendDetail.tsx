import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';
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
} from './style.ts';

const FindFriendDetail = () => {
	const navigate = useNavigate();
	const { postId } = useParams();
	const [post, setPost] = useState<any>([]);
	const [datauser, setDataUser] = useState<any>('');

	useEffect(() => {
		fetchPost();
	}, []);

	const fetchPost = async () => {
		try {
			const token = getToken();
			const response = await get(`/api/community/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setPost(response!.post.post);
			setDataUser(response!.post);
			console.log(response);
		} catch (error) {
			console.error('Error fetching post:', error);
		}
	};

	const handleEdit = () => {
		navigate(`/community/findfriend/edit/${postId}`);
	};

	if (!post) {
		return <div>Loading...</div>;
	}

	const { title, user_id, createdAt, images, content } = post;
	const { user } = datauser;
	const loggedInUser = '로그인한 사용자';
	const isAuthor = loggedInUser === user_id;
	const hasPostImage = !!images;

	return (
		<>
			<DetailContainer>
				<Header>
					<Title>{title}</Title>
					<SubContainer>
						<InfoBox>
							<UserName>{datauser.user}</UserName>
							<Date>작성일 : {createdAt}</Date>
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
		</>
	);
};

export default FindFriendDetail;
