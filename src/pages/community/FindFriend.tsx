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
import { getToken } from '@api/token';
import DataType from '@src/types/dataType.ts';

type PostData = {
	_id: string;
	title: string;
	content: string;
};
const FindFriend = () => {
	const navigate = useNavigate();
	const obsRef = useRef(null);
	const [page, setPage] = useState(1);
	const [load, setLoad] = useState(false); //로딩스피너
	const preventRef = useRef(true); //옵저버 중복실행방지
	const endRef = useRef(false); //모든 글 로드 확인
	const [postListData, setPostListData] = useState<PostData[]>([]);

	//옵저버 생성하기
	useEffect(() => {
		const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
		if (obsRef.current) observer.observe(obsRef.current);
		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		const fetchPostList = async () => {
			try {
				const token = getToken();
				const response = await get<DataType>(
					'/api/community/category/findfriend?skip=0&limit=10',
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
						params: {
							postType: 'findfriend',
						},
					},
				);
				setPostListData(response.data);
				console.log(response);
			} catch (error) {
				console.error('Error fetching post list:', error);
			}
		};
		fetchPostList();
	}, []);

	const obsHandler = (entries: any) => {
		const target = entries[0];
		if (!endRef.current && target.isIntersecting && preventRef.current) {
			preventRef.current = false;
			setPage((prev) => prev + 1);
		}
	};

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
					<TotalPostNumber totalPosts={postListData.length} />
					<WriteButton toNavigate={navigateWrite} />
				</NumberWriteContainer>
				{postListData &&
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
