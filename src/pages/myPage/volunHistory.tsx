import { useState, useEffect } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
	CardBox,
} from '@components/MyPage/myPage.ts';
import car from '@src/assets/images/car.png';

import Tab from '@components/Tab/Tab.tsx';
import Card from '@components/Card/Card.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/utils/EnumTypes';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import DataType from '@src/types/DataType';
import Swal from 'sweetalert2';

type VolunProps = {
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
};

const completedData1 = [
	{
		createdAt: '2021-01-01',
		_id: '1',
		isParticipate: false,
		volunteer_id: {
			startDate: '2021-01-01',
			endDate: '2021-01-02',
			_id: '6478ac1fb4594284808acbea',
			title: '이건 완료된 봉사에서만 보이는 글 제목입니다. 제발 성공해라',
			centName: '배가고파요배가고파',
			statusName: '모집중',
			deadline: '내일까지모집',
			images: [car],
		},
	},
];

function myVolunHistory() {
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
				const response = await get<DataType>('/api/applications?status=true', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				setAppliedData(response.data as VolunProps[]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>('/api/applications?status=false', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
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
						{data.length === 0 && <h1>봉사 내역이 존재하지 않습니다.</h1>}
						{data.map((data) => (
							<Card key={data.volunteer_id._id} currTab={currTab} data={data} />
						))}
					</CardBox>
				</Main>
			</Container>
		</>
	);
}

export default myVolunHistory;
