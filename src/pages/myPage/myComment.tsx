import { useState, useEffect } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import MyPost from '@components/MyPost/MyPost.tsx';
import Menu from '@components/Menu/Menu.tsx';
import DataType from '@src/types/DataType';
import { TabTypes } from '@src/utils/EnumTypes';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';

const comment = [
	{
		title: '이건 완료된 봉사에서만 보이는 글 제목입니다. 제발 성공해라',
		content:
			'지역은 충남 천안근처였으면 좋겠습니다.! 아니면 여기서 자차타고 한시간 거리도 좋아요! 댓 주세용',
		postType: '동행구해요',
		createdAt: '2022-01-01',
		_id: '123123',
		images: null,
	},
];

type CommunityProps = {
	title: string;
	content: string;
	createdAt: string;
	_id: string;
	images: string | null;
	postType: string;
};

function myComment() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>('/api/community/user', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				console.log(response);
				setPost(response.data as CommunityProps[]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const tabs = [TabTypes.WRITTEN_POSTS, TabTypes.COMMENTED_POSTS];
	const [currTab, setCurrTab] = useState<TabTypes>(TabTypes.WRITTEN_POSTS);
	const [post, setPost] = useState<CommunityProps[]>([]);
	const [data, setData] = useState<CommunityProps[]>([]);
	// const [comment, setComment] = useState<CommunityProps[]>([]);

	useEffect(() => {
		currTab === TabTypes.WRITTEN_POSTS ? setData(post) : setData(comment);
	}, [currTab, post, comment]);

	const handleClickTab = (tab: TabTypes) => {
		setCurrTab(tab);
	};

	const removePost = (postId: string) => {
		setData(data.filter((post) => post._id !== postId));
	};
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
					{data.map((data) => {
						return (
							<MyPost
								key={data._id}
								currTab={currTab}
								data={data}
								onRemovePost={removePost}
							/>
						);
					})}
				</Main>
			</Container>
		</>
	);
}

export default myComment;
