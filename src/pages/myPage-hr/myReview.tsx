import React, { useState } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '../../components/MyPage/myPage.ts';

import Tab from '../../components/Tab/Tab.tsx';
import MyPost from '../../components/MyPost/MyPost.tsx';
import { SmallButton } from '../../components/Buttons/SmallButton';

function myReview() {
	const tabs = ['내가 쓴 리뷰'];
	const [currTab, setCurrTab] = useState('내가 쓴 리뷰');

	const data = [
		{
			title: '한강 플로깅 메이트 구하고 같이 러닝하며 플러깅한 후기',
			content:
				'7월 8일 8시쯤 저녁먹고 산책할겸 마음이음을 통해서 메이트를 구했습니다. 다행히도 저랑 나이가 비슷한 여성분이 연락을 주셔서 너무 재미있게 활동할 수 있었습니다. 사실 인원수가 안차면 어떡하나라고 걱정했는데 주기적으로 이어갈 수 있게 되어서 다행입니다',
			category: '동행구해요',
			date: '2022-01-01',
		},
		{
			title:
				'다문화 가정 일일 보육선생님 후기. 예산에 있는 한 초등학교에서 진행되었습니다. 저는 대학교에서 진행하는 봉사활동 동아리를 통해 같이 참여할 수 있게 되었는데 아이들도 너무 귀엽고 초롱초롱 수업을 잘따라와줘서 행복했습니다. 부족한 선생님이었지만 친구들이 너무 좋아해줘서 기뻤네요',
			content:
				'예산에 있는 한 초등학교에서 진행되었습니다. 저는 대학교에서 진행하는 봉사활동 동아리를 통해 같이 참여할 수 있게 되었는데 아이들도 너무 귀엽고 초롱초롱 수업을 잘따라와줘서 행복했습니다. 부족한 선생님이었지만 친구들이 너무 좋아해줘서 기뻤네요',
			category: '동행구해요',
			date: '2022-01-01',
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
						<Tab currTab={currTab} tabs={tabs} />
					</TabMenu>
					{data.map((item, idx) => {
						return (
							<MyPost
								key={`reviewList-${idx}`}
								title={item.title}
								date={item.date}
								content={item.content}
								category={item.category}
								currTab={currTab}
							/>
						);
					})}
				</Main>
			</Container>
		</>
	);
}

export default myReview;