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
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import Swal from 'sweetalert2';

interface CommunityProps {
	title: string;
	content: string;
	createdAt: string;
	_id: string;
	images: string | null;
	postType: string;
}

function MyComment() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>('/api/community/user', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});

				setPost(response.data as CommunityProps[]);
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

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get('/api/volunteerComments/users', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				setComment(response as CommunityProps[]);
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

	const tabs = [TabTypes.WRITTEN_POSTS, TabTypes.COMMENTED_POSTS];
	const [currTab, setCurrTab] = useState<TabTypes>(TabTypes.WRITTEN_POSTS);
	const [post, setPost] = useState<CommunityProps[]>([]);
	const [data, setData] = useState<CommunityProps[]>([]);
	const [comment, setComment] = useState<CommunityProps[]>([]);

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
					{data.length === 0 && <p>나의 활동내역이 없습니다</p>}
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

export default MyComment;
