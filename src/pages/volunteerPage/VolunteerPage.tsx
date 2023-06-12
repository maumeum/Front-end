import TopBar from '@components/TopBar/TopBar';
import SearchBar from '@components/SearchBar/SearchBar';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber';
import PostList from '@components/PostList/PostList';
import {
	NumberWriteContainer,
	ReviewPageContainer,
} from '@src/pages/community/style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from '@api/api';
import { getToken } from '@api/token';
import DataType from '@src/types/dataType';

type PostData = {
	_id: string;
	title: string;
	content: string;
};
const reviewPage = () => {
	const navigate = useNavigate();
	const [postListData, setPostListData] = useState<PostData[]>([]);

	useEffect(() => {
		fetchPostList();
	}, []);
	const fetchPostList = async () => {
		try {
			const token = getToken();
			const response = await get<DataType>('/api/review', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setPostListData(response.data);
			console.log(response);
		} catch (error) {
			console.error('Error fetching post list:', error);
		}
	};
	const navigateDetail = (postId: string) => {
		navigate(`/review/${postId}`);
	};
	const handleSearch = (query: string) => {
		//검색기능 구현 로직 작성예정
		console.log('검색어:', query);
	};

	return (
		<>
			<ReviewPageContainer>
				<TopBar title='봉사후기 게시판' text='생생한 봉사후기를 공유해요' />
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={postListData.length} />
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
			</ReviewPageContainer>
		</>
	);
};

export default reviewPage;
