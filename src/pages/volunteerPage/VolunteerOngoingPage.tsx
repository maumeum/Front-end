import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@components/TopBar/TopBar.tsx';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import {
	NumberWriteContainer,
	VolunteerPageContainer,
	CardListContainer,
} from './style.ts';
import Menu from '@components/Menu/Menu.tsx';
import { MenuBar, CardBox } from '@components/MyPage/myPage.ts';
import VolunteerTogetherCard from '@src/components/Card/VolunteerTogetherCard.tsx';
import { VolunteerTogetherType } from '@src/types/cardType.ts';
import { get } from '@api/api';
import DataType from '@src/types/dataType.ts';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import Pagination from '@components/Pagination/Pagination.tsx';

const VolunteerOngoing = () => {
	const navigate = useNavigate();
	const [cardListData, setCardListData] = useState<VolunteerTogetherType[]>([]);

	//페이지네이션
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5;
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getData = await get<DataType>(
					'/api/volunteers?skip=0&limit=12&status=true',
					{},
				);
				setCardListData(getData.data.volunteerList as VolunteerTogetherType[]);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};
		fetchData();
	}, []);

	const transformData = cardListData.map((data) => {
		return {
			_id: data._id,
			title: data.title,
			teamName: data.teamName,
			statusName: data.statusName,
			deadline: data.deadline,
			applyCount: data.applyCount,
			registerCount: data.registerCount,
			images: data.images,
			register_user_id: {
				_id: data.register_user_id._id,
				nickname: data.register_user_id.nickname,
				image: data.register_user_id.image,
				uuid: data.register_user_id.uuid,
			},
			createdAt: data.createdAt,
		};
	});

	const uuid = cardListData.map((i) => i.register_user_id.uuid);

	// volunteers/search/?keyword=유기견&skip=1&limit=2
	const handleSearch = async (query: string) => {
		const response = await get<DataType>(
			`/api/volunteers/search?keyword=${query}`,
		);
		setCardListData(response.data);
		console.log(response.data);
		console.log('검색어:', query);
	};

	const navigateWrite = () => {
		navigate('/volunteers/ongoing/edit');
	};

	const navigateDetail = (postId: string) => {
		navigate(`/volunteers/ongoing/detail/${postId}`, { state: { uuid: uuid } });
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
					<TotalPostNumber totalPosts={cardListData.length} />
					<WriteButton toNavigate={navigateWrite} />
				</NumberWriteContainer>
				<CardBox>
					{transformData.length === 0 && (
						<h2>봉사 내역이 존재하지 않습니다.</h2>
					)}
					{transformData.map((data, index) => (
						<VolunteerTogetherCard
							key={data._id + '-' + index}
							data={data}
							onClick={() => navigateDetail(data._id)}
						/>
					))}
				</CardBox>
			</CardListContainer>
			{transformData.length > 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={Math.ceil(transformData.length / pageSize)}
					handlePageChange={handlePageChange}
				/>
			)}
		</VolunteerPageContainer>
	);
};

export default VolunteerOngoing;
