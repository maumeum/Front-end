import React, { useState } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
	CardBox,
} from '../../components/MyPage/myPage.ts';
import car from '../../assets/images/car.png';

import Tab from '../../components/Tab/Tab.tsx';
import Card from '../../components/Card/Card.tsx';

function myVolunHistory() {
	const [currTab, setCurrTab] = useState('신청한 봉사');

	const handleClickTab = (tab: string) => {
		setCurrTab(tab);
	};

	const props = [
		{
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
			title: '쪽방촌에 계시는 어른들에게 도시락을 전달해요!',
			thumbnail: car,
			nickname: '도시락요정',
			profile: car,
			recruitStatus: '모집완료',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
		{
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
			title: '쪽방촌에 계시는 어른들에게 도시락을 전달해요!',
			thumbnail: car,
			nickname: '도시락요정',
			profile: car,
			recruitStatus: '모집완료',
			startDate: '2021-06-01',
			endDate: '2021-06-01',
		},
		{
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
			title: '쪽방촌에 계시는 어른들에게 도시락을 전달해요!',
			thumbnail: car,
			nickname: '도시락요정',
			profile: car,
			recruitStatus: '모집완료',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
		{
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
			title: '쪽방촌에 계시는 어른들에게 도시락을 전달해요!',
			thumbnail: car,
			nickname: '도시락요정',
			profile: car,
			recruitStatus: '모집완료',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
	];
	return (
		<>
			<Container>
				<MenuBar>
					<p>내가쓴글</p>
					<p>내가 댓글 쓴글</p>
					<p>봉사내역조회</p>
				</MenuBar>

				<Main>
					<TabMenu>
						<Tab currTab={currTab} onClick={handleClickTab} />
					</TabMenu>
					<CardBox>
						{props.map((data, index) => (
							<Card key={index} currTab={currTab} data={data} />
						))}
					</CardBox>
				</Main>
			</Container>
		</>
	);
}

export default myVolunHistory;
