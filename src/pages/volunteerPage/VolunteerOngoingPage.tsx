import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '@assets/images/background.jpg';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import {
	VolunteerCardBox,
	VolunteerPageContainer,
	CardListContainer,
	MiddleContainer,
	BigText,
	FfHighLight,
	Sub,
	MainImage,
	Background,
	SearchContainer,
	DogImage,
	TabBtn1,
	TabBtn2,
	BtnContainer,
	NumberWriteContainer,
} from './style.ts';

import VolunteerTogetherCard from '@src/components/Card/VolunteerTogetherCard.tsx';
import { VolunteerType, VolunteerTogetherType } from '@src/types/cardType.ts';
import { get } from '@api/api';
import DataType from '@src/types/dataType.ts';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import throttle from '@utils/throttle.ts';
import volunteerImage from '@assets/images/volunteerPage.png';
import dog from '@assets/images/dog.png';
import VolunteerClose from './VolunteerClosePage.tsx';

const VolunteerOngoing = () => {
	const navigate = useNavigate();
	const [cardList, setCardList] = useState<VolunteerTogetherType[]>([]);
	const [isLoad, setLoad] = useState<boolean>(false);
	const [activeTab, setActiveTab] = useState('activeOn');
	const [isAuthorizaion, isSetAuthorizaion] = useState<boolean>(false);

	const handleTabChange = (tabName: string) => {
		setActiveTab(tabName);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const responseData = await get<DataType>(
					'/api/volunteers?skip=0&limit=12&status=true',
					{},
				);
				setCardList(responseData.data.volunteerList);
				setLoad(responseData.data.hasMore);
				window.scrollTo(0, 0);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>('/api/users/info');
				isSetAuthorizaion(response.data.authorizaion);
				console.log(response.data.authorizaion);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	// 검색 데이터 불러오기
	const handleSearch = async (query: string) => {
		const response = await get<DataType>(
			`/api/volunteers/search?keyword=${query}&skip=$0&limit=8`,
		);
		setCardList(response.data.searchVolunteers);
		window.scrollTo(0, 0);
	};

	// 데이터 불러오기
	const loadMoreData = async () => {
		try {
			if (isLoad) {
				const response = await get<DataType>(
					`/api/volunteers?skip=${cardList.length}&limit=12&status=true`,
					{},
				);
				const newPostListData = response.data.volunteerList;
				setCardList((prevData) => {
					// 중복된 데이터 필터링
					const filteredData = newPostListData.filter(
						(newItem: VolunteerType) =>
							!prevData.some((item) => item._id === newItem._id),
					);
					return [...prevData, ...filteredData];
				});
				setLoad(response.data.hasMore);
			}
		} catch (error) {
			console.error('Error loading more data:', error);
		}
	};

	// 무한 스크롤
	useEffect(() => {
		if (cardList.length > 0) {
			const handleScroll = throttle(() => {
				const { scrollTop, offsetHeight } = document.documentElement;
				if (offsetHeight - window.innerHeight - scrollTop < 200) {
					loadMoreData();
				}
			});
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [cardList]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>('/api/users/info');
				isSetAuthorizaion(response.data.authorization);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const navigateWrite = () => {
		navigate('/volunteers/ongoing/edit');
	};

	return (
		<>
			<VolunteerPageContainer>
				<MiddleContainer>
					<BigText>같이 봉사해요</BigText>
					<Sub>
						<FfHighLight>
							더 나은 세상을 위해 지금 할 수 있는 일을 같이 봉사하기에서 찾아볼
							수 있어요
						</FfHighLight>
						<MainImage src={volunteerImage} alt='main-image' />
						<Background src={background} alt='background' />
						<DogImage src={dog} alt='dog' />
					</Sub>
				</MiddleContainer>
				<SearchContainer>
					<BtnContainer>
						<TabBtn1 onClick={() => handleTabChange('activeOn')}>
							모집중인 활동
						</TabBtn1>
						<TabBtn2 onClick={() => handleTabChange('activeClose')}>
							모집종료 활동
						</TabBtn2>
					</BtnContainer>
					<SearchBar onSearch={handleSearch} />
					<NumberWriteContainer>
						{isAuthorizaion && <WriteButton toNavigate={navigateWrite} />}
					</NumberWriteContainer>
				</SearchContainer>
				<CardListContainer>
					{activeTab === 'activeOn' && (
						<VolunteerCardBox>
							{cardList.length === 0 && <h2>봉사 내역이 존재하지 않습니다.</h2>}
							{cardList &&
								cardList.map((data, index) => (
									<VolunteerTogetherCard
										key={data._id + '-' + index}
										volunteerData={data}
									/>
								))}
						</VolunteerCardBox>
					)}
					{activeTab === 'activeClose' && <VolunteerClose />}
				</CardListContainer>
			</VolunteerPageContainer>
		</>
	);
};

export default VolunteerOngoing;
