import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { get } from '@src/api/api';
import { CommunityListType, ReviewListType } from '@src/types/cardType';
import DataType from '@src/types/dataType';
import Menu from '@components/Menu/Menu.tsx';
import PostList from '@components/PostList/PostList';
import { MenuBar, TopBarContainer, ClickTopBar, PostContainer } from './style';

const Report = () => {
	const [communityList, setCommunityList] = useState<CommunityListType>([]);
	const [reviewList, setReviewList] = useState<ReviewListType>([]);
	const [communityNav, setCommunityNav] = useState<boolean>(true);
	const [reviewNav, setReviewNav] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/community');
			setCommunityList(responseData.data);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/review?limit=0&skip=10');
			setReviewList(responseData.data.reviews);
		};
		fetchData();
	}, []);

	// 세부 글 클릭
	const postClick = (postId: string) => {
		navigate(`/community/${postId}`);
	};

	const reviewClick = () => {
		navigate('/admin/report');
	};

	// 상단 nav바 클릭
	const reviewNavClick = () => {
		setCommunityNav(false);
		setReviewNav(true);
	};

	const communityNavClick = () => {
		setCommunityNav(true);
		setReviewNav(false);
	};

	return (
		<>
			<MenuBar>
				<Menu title='관리자' />
			</MenuBar>
			<TopBarContainer>
				<ClickTopBar
					onClick={reviewNavClick}
					className={reviewNav ? 'curr' : ''}>
					리뷰 글 목록
				</ClickTopBar>
				<ClickTopBar
					onClick={communityNavClick}
					className={communityNav ? 'curr' : ''}>
					커뮤니티 글 목록
				</ClickTopBar>
			</TopBarContainer>
			<PostContainer>
				{communityList &&
					communityNav &&
					communityList.map((postData) => (
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
							onClick={() => postClick(postData._id)}
						/>
					))}
				{reviewList &&
					reviewNav &&
					reviewList.map((postData) => (
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
							onClick={() => reviewClick()}
						/>
					))}
			</PostContainer>
		</>
	);
};

export default Report;
