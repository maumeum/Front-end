import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@components/TopBar/TopBar.tsx';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import { NumberWriteContainer, PageContainer } from './style.ts';
// import PostList from '@components/PostList/PostList.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { MenuBar, CardBox } from '@components/MyPage/myPage.ts';
import VolunteerTogetherCard from '@src/components/Card/VolunteerTogetherCard.tsx';
import { VolunteerTogetherType } from '@src/types/cardType.ts';
import { get } from '@api/api';
// import { getToken } from '@api/token';
import DataType from '@src/types/dataType.ts';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
// /volunteers?skip=0&limit=1&status=true(or false)

const VolunteerOngoing = () => {
	const navigate = useNavigate();
	const [appliedData, setAppliedData] = useState<VolunteerTogetherType[]>([]);
	const [completedData, setCompletedData] = useState<VolunteerTogetherType[]>(
		[],
	);
	const [volunData, setVolunData] = useState<VolunteerTogetherType[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getCompetededData = await get<DataType>(
					'/api/applications?status=true',
					{},
				);
				setAppliedData(getCompetededData.data as VolunteerTogetherType[]);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getAppliedData = await get<DataType>(
					'/api/applications?status=false',
					{},
				);
				setCompletedData(getAppliedData.data as VolunteerTogetherType[]);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};
		fetchData();
	}, []);

	// volunteers/search/?keyword=유기견&skip=1&limit=2
	const handleSearch = async (query: string) => {
		const response = await get<DataType>(
			`/api/volunteers/search?keyword=${query}`,
		);
		setVolunData(response.data);
		console.log('검색어:', query);
	};

	const navigateWrite = () => {
		navigate('/volunteers/edit');
	};

	return (
		<>
			<MenuBar>
				<Menu title={'같이봉사해요'} />
			</MenuBar>
			<PageContainer>
				<TopBar
					title='모집 중인 활동'
					text='인증받은 단체에서 함께 봉사활동을 해요.'
				/>
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={volunData.length} />
					<WriteButton toNavigate={navigateWrite} />
				</NumberWriteContainer>
				<CardBox>
					{volunData.length === 0 && <h2>봉사 내역이 존재하지 않습니다.</h2>}
					{volunData.map((data, index) => (
						<VolunteerTogetherCard key={data._id + '-' + index} data={data} />
					))}
				</CardBox>
			</PageContainer>
		</>
	);
};

export default VolunteerOngoing;
