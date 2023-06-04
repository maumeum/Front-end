import React, { useState } from 'react';
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
	const tabs = ['내가 등록한 봉사활동'];
	const [currTab] = useState('내가 등록한 봉사활동');

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
