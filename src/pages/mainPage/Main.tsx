import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { get } from '@api/api';
import {
	CommunityListType,
	VolunteerListType,
	ReviewListType,
} from '@src/types/cardType';
import DataType from '@src/types/dataType';
import {
	MainSection,
	TopSlogan,
	TopContainer,
	ReviewContainer,
	IntroducePage,
	IntroduceTitle,
	MainTitle,
	IntroImg,
	IntroduceDesc,
	Title,
	Desc,
	MidSlogan,
	VolunteerContainer,
	CommunityTitle,
	CommunityContainer,
} from './style';
import VolunteerCard from '@components/Card/VolunteerCard';
import ReviewCard from '@components/Card/ReviewCard';
import CommunityCard from '@components/Card/CommunityCard';
import CardImage from '@assets/images/cardImage.png';

const Main = () => {
	const [reviewList, setReviewList] = useState<ReviewListType>([]);
	const [communityList, setCommunityList] = useState<CommunityListType>([]);
	const [volunteerList, setVolunteerList] = useState<VolunteerListType>([]);
	const navigate = useNavigate();

	// 리뷰 데이터 불러오기
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/review?skip=0&limit=2');
			setReviewList(responseData.data.reviews);
		};
		fetchData();
	}, []);

	// 봉사활동 데이터 불러오기
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(
				'/api/volunteers?skip=0&limit=8',
			);
			setVolunteerList(responseData.data.volunteerList);
		};
		fetchData();
	}, []);

	// 커뮤니티 데이터 불러오기
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/community?skip=0&limit=6');
			setCommunityList(responseData.data.posts);
		};
		fetchData();
		window.scrollTo(0, 0);
	}, []);

	return (
		<MainSection>
			<TopSlogan>
				당신의 아름다운 걸음을
				<br />
				마음이음이 함께합니다.
			</TopSlogan>
			<TopContainer>
				<ReviewContainer>
					{reviewList &&
						reviewList.map((item, index) => (
							<ReviewCard
								reviewData={{ ...item, index }}
								key={item._id}
								onClick={() => navigate(`/review/${item._id}`)}
							/>
						))}
				</ReviewContainer>
				<IntroducePage>
					<IntroduceTitle>
						<MainTitle>
							세상에 행복을 나누러
							<br />한 번 같이 걸어가보실래요?
						</MainTitle>
						<IntroImg src={CardImage} alt='cardLogo' />
					</IntroduceTitle>
					<IntroduceDesc>
						<Title>동행을 추구합니다.</Title>
						<Desc>
							마음이음, 봉사로 하나되는 따뜻한 공간입니다. 우리는 봉사활동을
							모집하고 찾아보며, 함께 봉사하는 이들을 위한 커뮤니티를
							만들었습니다. 봉사의 소중한 경험을 공유하고 나누며, 마음을
							이어가는 마음이음에서 여러분을 기다립니다.
						</Desc>
					</IntroduceDesc>
				</IntroducePage>
			</TopContainer>
			<MidSlogan>시간을 나눠 마음 채우기</MidSlogan>
			<VolunteerContainer>
				{volunteerList &&
					volunteerList.map((item) => (
						<VolunteerCard key={item._id} volunteerData={item} />
					))}
			</VolunteerContainer>
			<CommunityTitle>커뮤니티</CommunityTitle>
			<CommunityContainer>
				{communityList &&
					communityList.map((item) => (
						<CommunityCard
							key={item._id}
							communityData={item}
							onClick={() => {
								navigate(`/community/${item._id}`);
							}}
						/>
					))}
			</CommunityContainer>
		</MainSection>
	);
};

export default Main;
