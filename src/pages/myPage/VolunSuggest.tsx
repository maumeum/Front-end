import { useState, useEffect } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
	CardBox,
} from '@components/MyPage/myPage.ts';
import car from '@src/assets/images/car.png';
import MyReview from '@src/components/MyPost/MyReview';

import Tab from '@components/Tab/Tab.tsx';
import Card from '@components/Card/Card.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@src/api/api';
import DataType from '@src/types/dataType';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject';

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
	const [suggestVolunList, setSuggestVolunList] = useState<ResponseData[]>([]);
	const tabs = [TabTypes.VOLUNTEER_SUGGEST];
	const currTab = tabs[0];
	// const [isOpen, setIsOpen] = useState(false);
	// const toggleModal = (onoff: boolean) => () => {
	// 	setIsOpen(onoff);
	// };

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getSuggestedData = await get<DataType>(
					'/api/volunteers/registerations',
					{},
				);
				setSuggestVolunList(getSuggestedData.data as ResponseData[]);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};
		fetchData();
	}, []);

	const transformData = suggestVolunList.map((data) => {
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
						{suggestVolunList.length === 0 && (
							<div>내가 등록한 봉사 내역이 없습니다.</div>
						)}
						{transformData.map((data) => (
							<Card key={data.volunteer_id._id} data={data} currTab={currTab} />
						))}
					</CardBox>
					{/* <MyReview closeModal={toggleModal(false)} /> */}
				</Main>
			</Container>
		</>
	);
}

export default VolunSuggest;
