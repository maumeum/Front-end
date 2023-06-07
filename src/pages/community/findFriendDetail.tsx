import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import car from '@src/assets/images/car.png';
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
} from './style';
import CommentSection from '@components/Comment/Comment.tsx';
const FindFriendDetail = () => {
	const [loggedInUser, setLoggedInUser] = useState('로그인한 사용자');
	const { postId } = useParams();

	const data = {
		title: '수원 유기견 봉사활동 같이하실 분 구해요!',
		userInfo: '로그인한 사용자',
		writeDate: '23.05.25',
		postImage: car,
		postContents:
			'안녕하세요. 수원 지역 유기견 봉사활동 같이 하실 분 모집합니다.\n제목 그대로 유기견 봉사활동하고 장소는 수원시 장안구입니다.\n 강아지를 좋아하시고 사랑하는 분이면 누구든 환영합니다.',
	};
	const isAuthor = loggedInUser === data.userInfo;
	const hasPostImage = !!data.postImage;

	return (
		<>
			<DetailContainer>
				<Header>
					<Title>{data.title}</Title>
					<SubContainer>
						<InfoBox>
							<UserName>{data.userInfo}</UserName>
							<Date>작성일 : {data.writeDate}</Date>
						</InfoBox>
						{isAuthor && <Btn>수정하기</Btn>}
					</SubContainer>
				</Header>
				<Line></Line>
				<ContentContainer>
					{hasPostImage && <Image src={data.postImage} alt='content-image' />}
					<Contentdiv>
						<Content>{data.postContents}</Content>
					</Contentdiv>
				</ContentContainer>
			</DetailContainer>
			<CommentSection></CommentSection>
		</>
	);
};

export default FindFriendDetail;
