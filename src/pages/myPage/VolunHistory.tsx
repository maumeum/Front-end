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
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@src/api/Api';
import DataType from '@src/types/DataType';
import Swal from 'sweetalert2';

interface VolunProps {
	createdAt: string;
	_id: string;
	isParticipate: boolean;
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
	const [data, setData] = useState<VolunProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>(
					'/api/applications?status=true',
					{},
				);
				setAppliedData(response.data as VolunProps[]);
			} catch (error) {
				Swal.fire({
					title: '데이터를 불러오는데 실패하였습니다.',
					icon: 'error',
					confirmButtonColor: 'var(--button--color)',
				});
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>(
					'/api/applications?status=false',
					{},
				);
				setCompletedData(response.data as VolunProps[]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		currTab === TabTypes.VOLUNTEER_APPLIED
			? setData(appliedData)
			: setData(completedData);
	}, [currTab, appliedData, completedData]);

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
					<CardBox>
						{data.length === 0 && <div>봉사 내역이 존재하지 않습니다.</div>}
						{data.map((data) => (
							<Card key={data.volunteer_id._id} currTab={currTab} data={data} />
						))}
					</CardBox>
				</Main>
			</Container>
		</>
	);
}

export default MyVolunHistory;
