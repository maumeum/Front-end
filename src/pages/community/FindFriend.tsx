import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import {
	NumberWriteContainer,
	PageContainer,
	MainContainer,
	FFImageArea,
	MainTitle,
	Subtitle,
	TextArea,
	MenuBar,
	MiddleContainer,
	BigText,
	Sub,
	FfHighLight,
} from './style.ts';
import PostList from '@components/PostList/PostList.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { get } from '@api/api';
import DataType from '@src/types/dataType.ts';
import findfriendImage from '@assets/images/findfriendImage.png';
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
			<PageContainer>
				<MainContainer>
					<TextArea>
						<MainTitle>마음이음</MainTitle>
						<Subtitle>
							마음이음은 동행을 추구합니다.
							<br />
							함께 봉사하는 이들을 위한 커뮤니티에서 소중한 경험을 공유하고
							마음을 이어보세요!
						</Subtitle>
					</TextArea>

					<FFImageArea src={findfriendImage} alt='findfriend-image' />
				</MainContainer>

				<MiddleContainer>
					<BigText>동행구해요!</BigText>
					<Sub>
						<p>마음이 통하는 친구들과 아름다운 마음을 이어나가요</p>
						<p>
							<FfHighLight>제목에 봉사활동의 정보</FfHighLight>를 포함하면 더욱
							많은 댓글을 받을 수 있어요
						</p>
					</Sub>
				</MiddleContainer>
				<MenuBar>
					<Menu title={'커뮤니티'} />
				</MenuBar>
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
