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
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import DataType from '@src/types/DataType';
import Swal from 'sweetalert2';

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

function VolunSuggest() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>(
					'/api/volunteers/registerations',
					{},
				);
				setDataList(response.data as ResponseData[]);
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

	const [dataList, setDataList] = useState<ResponseData[]>([]);
	const tabs = [TabTypes.VOLUNTEER_SUGGEST];

	const transformData = dataList.map((data) => {
		//Card 컴포넌트 형식에 맞게 데이터형태 변환
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
						<Tab tabs={tabs} />
					</TabMenu>
					<CardBox>
						{dataList.length === 0 && (
							<div>내가 등록한 봉사 내역이 없습니다.</div>
						)}
						{transformData.map((data) => (
							<Card key={data.volunteer_id._id} data={data} />
						))}
					</CardBox>
				</Main>
			</Container>
		</>
	);
}

export default VolunSuggest;
