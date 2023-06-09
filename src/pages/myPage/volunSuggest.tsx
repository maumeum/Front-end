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

interface ResponseData {
	_id: string;
	title: string;
	centName: string;
	createdAt: string;
	statusName: string;
	deadline: string;
	startDate: string;
	endDate: string;
	image: string;
	register_user_id: {
		nickname: string;
		image: string;
		introduction: string;
	};
	updatedAt: string;
}

function volunSuggest() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>('/api/volunteers/registerations', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				setDataList(response.data as ResponseData[]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const [dataList, setDataList] = useState<ResponseData[]>([]);
	const tabs = [TabTypes.VOLUNTEER_SUGGEST];
	const [currTab] = useState<TabTypes>(TabTypes.VOLUNTEER_SUGGEST);

	const transformData = dataList.map((data) => {
		return {
			createdAt: data.createdAt,
			volunteer_id: {
				startDate: data.startDate,
				endDate: data.endDate,
				_id: data._id,
				title: data.title,
				centName: data.centName,
				statusName: data.statusName,
				deadline: data.deadline,
				images: [car],
			},
		};
	});

	return (
		<>
			<Container>
				<MenuBar>
					<Menu title={'마이페이지'} />
				</MenuBar>

				<Main>
					<TabMenu>
						<Tab currTab={currTab} tabs={tabs} />
					</TabMenu>
					<CardBox>
						{transformData.map((data) => (
							<Card key={data.volunteer_id._id} data={data} currTab={currTab} />
						))}
					</CardBox>
				</Main>
			</Container>
		</>
	);
}

export default volunSuggest;
