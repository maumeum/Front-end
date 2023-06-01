import React, { useState } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '../../components/MyPage/myPage.ts';
import Tab from '../../components/Tab/Tab.tsx';
import MyPost from '../../components/MyPost/MyPost.tsx';

const data = [
	{
		title:
			'한강 플로깅 같이 하실분 구합니다~ 카카오톡 오픈채팅방으로 들어오세요',
		content:
			'7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요 7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요 7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요',
		category: '동행구해요',
		date: '2022-01-01',
	},
	{
		title:
			'유기견 봉사활동 고등학생때 가봤는데 냄새때문에 너무 힘들었어요.. 혹시 견사청소쪽 말고 다른 활동 위주인 단체있을가요',
		content:
			'지역은 충남 천안근처였으면 좋겠습니다.! 아니면 여기서 자차타고 한시간 거리도 좋아요! 댓 주세용',
		category: '동행구해요',
		date: '2022-01-01',
	},
];

function myComment() {
	const [currTab, setCurrTab] = useState('내가 쓴 게시글');
	const handleClickTab = (tab: string) => {
		setCurrTab(tab);
	};

	const tabs = ['내가 쓴 게시글', '내가 댓글 단 게시글'];
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
						<Tab currTab={currTab} onClick={handleClickTab} tabs={tabs} />
					</TabMenu>
					{data.map((item, index) => {
						return (
							<MyPost
								key={`postList-${index}`}
								currTab={currTab}
								title={item.title}
								content={item.content}
								category={item.category}
								date={item.date}></MyPost>
						);
					})}
				</Main>
			</Container>
		</>
	);
}

export default myComment;
