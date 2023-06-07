import React, { useState, useEffect } from 'react';
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

const props = [
	{
		title:
			'지금 당장 이메일 내의 스팸메시지를 삭제해보세요! 탄소가 줄어듭니다.',
		thumbnail: car,
		nickname: '스팸메시지지우기',
		profile: car,
		recruitStatus: '모집중',
		startDate: '2021-01-01',
		endDate: '2021-01-02',
	},
	{
		title:
			'페트병의 라벨을 잘 제거합시다! 1초의 행동으로 환경을 보호할 수 있습니다',
		thumbnail: car,
		nickname: '라벨요정',
		profile: car,
		recruitStatus: '모집완료',
		startDate: '2021-01-01',
		endDate: '2021-01-02',
	},
];

function volunSuggest() {
	// useEffect(() => {

	// 	console.log(getToken());
	// 	const fetchData = async () => {
	// 		try {

	// 			const response = await get('/api/reviews/users', {
	// 				headers: {
	// 					Authorization: `Bearer ${getToken()}`,
	// 				},
	// 			});
	// 			console.log(response);

	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);
	const tabs = [TabTypes.VOLUNTEER_SUGGEST];
	const [currTab] = useState<TabTypes>(TabTypes.VOLUNTEER_SUGGEST);

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
						{props.map((data, idx) => (
							<Card
								key={`suggestcard-${data.id}-${idx}`}
								data={data}
								currTab={currTab}
							/>
						))}
					</CardBox>
				</Main>
			</Container>
		</>
	);
}

export default volunSuggest;
