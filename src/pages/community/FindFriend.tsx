import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@components/TopBar/TopBar.tsx';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import { NumberWriteContainer, PageContainer } from './style.ts';
import PostList from '@components/PostList/PostList.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { MenuBar } from '@components/MyPage/myPage.ts';
import { get } from '@api/api';
import DataType from '@src/types/dataType.ts';
import throttle from '@utils/throttle.ts';

type PostData = {
	_id: string;
	title: string;
	content: string;
};
const FindFriend = () => {
	const navigate = useNavigate();
	const [postListData, setPostListData] = useState<PostData[]>([]);
	const [isLoad, setLoad] = useState<boolean>(false);

	// 처음 데이터 불러오기
	useEffect(() => {
		const fetchPostList = async () => {
			try {
				const response = await get<DataType>(
					'/api/community/category/findfriend?skip=0&limit=10',
					{},
				);
				setPostListData(response.data.categoryPost);
				setLoad(response.data.hasMore);
			} catch (error) {
				console.error('Error fetching post list:', error);
			}
		};

		fetchPostList();
	}, []);

	// 데이터 불러오기
	const loadMoreData = async () => {
		try {
			if (!isLoad) {
				console.log(postListData.length);
				const response = await get<DataType>(
					`/api/community/category/findfriend?skip=${postListData.length}&limit=10`,
					{},
				);
				const newPostListData = response.data.categoryPost;
				setPostListData((prevData) => [...prevData, ...newPostListData]);
				setLoad(response.data.hasMore);
			}
		} catch (error) {
			console.error('Error loading more data:', error);
		}
	};

	// 무한 스크롤
	useEffect(() => {
		if (postListData.length > 0) {
			const handleScroll = throttle(() => {
				const { scrollTop, offsetHeight } = document.documentElement;
				if (offsetHeight - window.innerHeight - scrollTop < 200) {
					loadMoreData();
				}
			});

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [postListData]);

	const handleSearch = async (query: string) => {
		const response = await get<DataType>(
			`/api/community/search?keyword=${query}&posttype=findfriend`,
		);
		setPostListData(response.data);
		console.log('검색어:', query);
	};

	const navigateWrite = () => {
		navigate('/community/findfriend/write');
	};
	const navigateDetail = (postId: string) => {
		navigate(`/community/${postId}`);
	};

	return (
		<>
			<MenuBar>
				<Menu title={'커뮤니티'} />
			</MenuBar>
			<PageContainer>
				<TopBar title='동행 구해요' text='같이 봉사할 친구를 모집해요' />
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={postListData && postListData.length} />
					<WriteButton toNavigate={navigateWrite} />
				</NumberWriteContainer>
				{postListData !== null &&
					postListData.length > 0 &&
					postListData.map((postData) => (
						<PostList
							key={postData._id}
							postTitle={
								postData.title.slice(0, 50) +
								(postData.title.length > 50 ? '...' : '')
							}
							postContents={
								postData.content.slice(0, 50) +
								(postData.content.length > 50 ? '...' : '')
							}
							onClick={() => navigateDetail(postData._id)}
						/>
					))}
			</PageContainer>
		</>
	);
};

export default FindFriend;
