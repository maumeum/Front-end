import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import PostList from '@components/PostList/PostList.tsx';
import {
	NumberWriteContainer,
	ReviewPageContainer,
} from '@src/pages/community/style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from '@src/api/api';
import DataType from '@src/types/dataType';
import throttle from '@utils/throttle.ts';
import {
	MainContainer,
	Descript,
	MiddleContainer,
	FirstCircle,
	ImgCircle,
	Image,
	SecondCircle,
	ImgCircle2,
	Image2,
} from '@src/pages/reviewPage/ReviewStyle';
import volunteer from '@assets/images/volunteer.jpeg';
import volunteers from '@assets/images/volunteers.jpeg';
type PostData = {
	_id: string;
	title: string;
	content: string;
};
const reviewPage = () => {
	const navigate = useNavigate();
	const [postListData, setPostListData] = useState<PostData[]>([]);
	const [isLoad, setLoad] = useState<boolean>(false);

	useEffect(() => {
		const fetchPostList = async () => {
			const response = await get<DataType>('/api/review?skip=0&limit=10');
			setPostListData(response.data.reviews);
		};
		fetchPostList();
	}, []);

	const loadMoreData = async () => {
		try {
			if (!isLoad) {
				console.log(postListData.length);
				const response = await get<DataType>(
					`/api/review?skip=${postListData.length}&limit=10`,
					{},
				);
				const newPostListData = response.data.reviews;
				setPostListData((prevData) => [...prevData, ...newPostListData]);
				setLoad(response.data.hasMore);
			}
		} catch (error) {
			console.error('Error loading more data:', error);
		}
	};

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

	const navigateDetail = (postId: string) => {
		navigate(`/review/${postId}`);
	};

	const handleSearch = async (query: string) => {
		const response = await get<DataType>(`/api/review/search?keyword=${query}`);
		setPostListData(response.data);
	};

	return (
		<>
			<ReviewPageContainer>
				<MainContainer>
					<p>마음이음,</p>
					<p>무엇이 다른가요?</p>
					<Descript>
						실제 봉사자들이 남긴 생생한 후기로 만들어가는 공간입니다
					</Descript>
				</MainContainer>
				<MiddleContainer>
					<FirstCircle></FirstCircle>
					<ImgCircle>
						<Image src={volunteer} alt='volunteer' />
					</ImgCircle>
					<SecondCircle></SecondCircle>
					<ImgCircle2>
						<Image2 src={volunteers} alt='volunteer' />
					</ImgCircle2>
				</MiddleContainer>
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
