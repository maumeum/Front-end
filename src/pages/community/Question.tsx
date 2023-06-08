import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@components/TopBar/TopBar.tsx';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import { NumberWriteContainer, PageContainer } from './style.ts';
import PostList from '@components/PostList/PostList.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { MenuBar } from '@components/MyPage/myPage.ts';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';

type PostData = {
	_id: string;
	title: string;
	content: string;
};
const Question = () => {
	const navigate = useNavigate();
	const [postListData, setPostListData] = useState<PostData[]>([]);

	useEffect(() => {
		fetchPostList();
	}, []);

	const fetchPostList = async () => {
		try {
			const token = getToken();
			const response = await get<PostData[]>('/api/community/category/qna', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: {
					postType: 'qna',
				},
			});
			setPostListData(response.data);
			console.log(response);
		} catch (error) {
			console.error('Error fetching post list:', error);
		}
	};

	const handleSearch = (query: string) => {
		// 검색기능 구현 로직 작성예정
		console.log('검색어:', query);
	};

	const navigateWrite = () => {
		navigate('/community/question/write');
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
				<TopBar title='궁금해요' text='봉사와 관련된 궁금한 사항을 질문해요' />
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={postListData.length} />
					<WriteButton toNavigate={navigateWrite} />
				</NumberWriteContainer>
				{postListData.map((postData) => (
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

export default Question;
