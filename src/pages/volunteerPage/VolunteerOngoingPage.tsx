import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@components/TopBar/TopBar.tsx';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import {
	VolunteerCardBox,
	NumberWriteContainer,
	VolunteerPageContainer,
	CardListContainer,
} from './style.ts';
import Menu from '@components/Menu/Menu.tsx';
import { MenuBar } from '@components/MyPage/myPage.ts';
import VolunteerTogetherCard from '@src/components/Card/VolunteerTogetherCard.tsx';
import { VolunteerType, VolunteerTogetherType } from '@src/types/cardType.ts';
import { get } from '@api/api';
import DataType from '@src/types/dataType.ts';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import throttle from '@utils/throttle.ts';

const VolunteerOngoing = () => {
	const navigate = useNavigate();
	const [cardList, setCardList] = useState<VolunteerTogetherType[]>([]);
	const [isLoad, setLoad] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const responseData = await get<DataType>(
					'/api/volunteers?skip=0&limit=12&status=true',
					{},
				);
				setCardList(responseData.data.volunteerList);
				setLoad(responseData.data.hasMore);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
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

	const navigateWrite = () => {
		navigate('/volunteers/ongoing/edit');
	};

	return (
		<VolunteerPageContainer>
			<MenuBar>
				<Menu title={'같이봉사해요'} />
			</MenuBar>
			<CardListContainer>
				<TopBar
					title='모집 중인 활동'
					text='인증받은 단체에서 함께 봉사활동을 해요.'
				/>
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={cardList.length} />
					<WriteButton toNavigate={navigateWrite} />
				</NumberWriteContainer>
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
			</CardListContainer>
		</VolunteerPageContainer>
	);
};

export default VolunteerOngoing;
