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
import { TabTypes } from '@src/utils/EnumTypes';

function myVolunHistory() {
	const [currTab, setCurrTab] = useState<TabTypes>(TabTypes.VOLUNTEER_APPLIED);
	const tabs = [TabTypes.VOLUNTEER_APPLIED, TabTypes.VOLUNTEER_COMPLETED];
	const handleClickTab = (tab: TabTypes) => {
		setCurrTab(tab);
	};

	const appliedData = [
		{
			id: 1,
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			thumbnail: car,
			nickname: '내닉네임은너무나도길어',
			profile: car,
			recruitStatus: '모집중',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
		{
			id: 2,
			title: '쪽방촌에 계시는 어른들에게 도시락을 전달해요!',
			thumbnail: car,
			nickname: '도시락요정',
			profile: car,
			recruitStatus: '모집완료',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
		{
			id: 3,
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			thumbnail: car,
			nickname: '내닉네임은너무나도길어',
			profile: car,
			recruitStatus: '모집중',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
		{
			id: 4,
			title: '쪽방촌에 계시는 어른들에게 도시락을 전달해요!',
			thumbnail: car,
			nickname: '도시락요정',
			profile: car,
			recruitStatus: '모집완료',
			startDate: '2021-06-01',
			endDate: '2021-06-01',
		},
		{
			id: 5,
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			thumbnail: car,
			nickname: '내닉네임은너무나도길어',
			profile: car,
			recruitStatus: '모집중',
			startDate: '2021-01-01',
			endDate: '2021-01-01',
		},
		{
			id: 6,
			title: '쪽방촌에 계시는 어른들에게 도시락을 전달해요!',
			thumbnail: car,
			nickname: '도시락요정',
			profile: car,
			recruitStatus: '모집완료',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
		{
			id: 7,
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			thumbnail: car,
			nickname: '내닉네임은너무나도길어',
			profile: car,
			recruitStatus: '모집중',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
		{
			id: 8,
			title: '쪽방촌에 계시는 어른들에게 도시락을 전달해요!',
			thumbnail: car,
			nickname: '도시락요정',
			profile: car,
			recruitStatus: '모집완료',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
	];

	const completedData = [
		{
			id: 1,
			title: '이건 완료된 봉사에서만 보이는 글 제목입니다. 제발 성공해라',
			thumbnail: car,
			nickname: '배가고파요배가고파',
			profile: car,
			recruitStatus: '모집중',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
	];

	const data = currTab === '신청한 봉사' ? appliedData : completedData;
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
						{data.map((data, idx) => (
							<Card
								key={`historycard-${data.id}-${idx}`}
								currTab={currTab}
								data={data}
							/>
						))}
					</CardBox>
				</Main>
			</Container>
		</>
	);
}

export default myVolunHistory;
