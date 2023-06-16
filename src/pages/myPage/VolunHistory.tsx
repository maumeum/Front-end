import { useState, useEffect } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
	CardBox,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import Card from '@components/Card/Card.tsx';
import Menu from '@components/Menu/Menu.tsx';
import Pagination from '@components/Pagination/Pagination.tsx';
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@api/api';
import DataType from '@src/types/dataType';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import NoData from '@components/NoData/NoData.tsx';

interface VolunProps {
	createdAt: string;
	_id: string;
	isParticipate: boolean;
	isReviewed: boolean;
	volunteer_id: {
		startDate: string;
		endDate: string;
		_id: string;
		title: string;
		centName: string;
		statusName: string;
		deadline: string;
		images: string[];
	};
}

function MyVolunHistory() {
	const [currTab, setCurrTab] = useState<TabTypes>(TabTypes.VOLUNTEER_APPLIED);
	const tabs = [TabTypes.VOLUNTEER_APPLIED, TabTypes.VOLUNTEER_COMPLETED];
	const handleClickTab = (tab: TabTypes) => {
		setCurrTab(tab);
	};
	const [appliedData, setAppliedData] = useState<VolunProps[]>([]);
	const [completedData, setCompletedData] = useState<VolunProps[]>([]);
	const [volunData, setVolunData] = useState<VolunProps[]>([]);
	//페이지네이션
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5;
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				//완료한 봉사 (false)
				const getCompetededData = await get<DataType>(
					'/api/applications?status=false',
					{},
				);
				setAppliedData(getCompetededData.data as VolunProps[]);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				//신청한 봉사 (true)
				const getAppliedData = await get<DataType>(
					'/api/applications?status=true',
					{},
				);
				setCompletedData(getAppliedData.data as VolunProps[]);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		currTab === TabTypes.VOLUNTEER_APPLIED
			? setVolunData(appliedData)
			: setVolunData(completedData);
	}, [currTab, appliedData, completedData]);

	console.log(volunData);

	return (
		<>
			<Container>
				<MenuBar>
					<Menu title={'마이페이지'} />
				</MenuBar>

				<Main>
					<TabMenu>
						<Tab currTab={currTab} onClick={handleClickTab} tabs={tabs} />
					</TabMenu>
					{volunData.length === 0 && <NoData category='봉사' />}
					<CardBox>
						{volunData.map((data, index) => (
							<Card
								key={data.volunteer_id._id + '-' + index}
								currTab={currTab}
								data={data}
							/>
						))}
					</CardBox>
				</Main>
			</Container>

			{volunData.length > 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={Math.ceil(volunData.length / pageSize)}
					handlePageChange={handlePageChange}
				/>
			)}
		</>
	);
}

export default MyVolunHistory;
