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
import DataType from '@src/types/dataType';
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@api/api';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject';
import Pagination from '@src/components/Pagination/Pagination.tsx';

interface CommunityProps {
	title: string;
	content: string;
	createdAt: string;
	_id: string;
	images: string | null;
	postType: string;
}

function MyComment() {
	const tabs = [TabTypes.WRITTEN_POSTS, TabTypes.COMMENTED_POSTS];
	const [currTab, setCurrTab] = useState<TabTypes>(TabTypes.WRITTEN_POSTS);
	const [postData, setPostData] = useState<CommunityProps[]>([]);
	const [selectedData, setSelectedData] = useState<CommunityProps[]>([]);
	const [commentData, setCommentData] = useState<CommunityProps[]>([]);

	//페이지네이션
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5;
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getPostData = await get<DataType>('/api/community/user', {});
				setPostData(getPostData.data as CommunityProps[]);
			} catch (error) {
				Swal.fire(
					alertData.errorMessage('데이터를 불러오는데 실패하였습니다.'),
				);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getCommentData = await get<DataType>('/api/postComments/users');
				setCommentData(getCommentData.data as CommunityProps[]);
			} catch (error) {
				Swal.fire(
					alertData.errorMessage('데이터를 불러오는데 실패하였습니다.'),
				);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		currTab === TabTypes.WRITTEN_POSTS
			? setSelectedData(postData)
			: setSelectedData(commentData);
	}, [currTab, postData, commentData]);

	const handleClickTab = (tab: TabTypes) => {
		setCurrTab(tab);
	};

	const removePost = (postId: string) => {
		setSelectedData(selectedData.filter((post) => post._id !== postId));
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
					{selectedData.length === 0 && <h2>나의 활동내역이 없습니다</h2>}

					{selectedData
						.slice((currentPage - 1) * pageSize, currentPage * pageSize)
						.map((data, idx) => {
							return (
								<MyPost
									key={data._id + idx}
									currTab={currTab}
									communityData={data}
									onRemovePost={removePost}
								/>
							);
						})}
					{selectedData.length > 0 && (
						<Pagination
							currentPage={currentPage}
							totalPages={Math.ceil(selectedData.length / pageSize)}
							handlePageChange={handlePageChange}
						/>
					)}
				</Main>
			</Container>
		</>
	);
}

export default MyComment;
