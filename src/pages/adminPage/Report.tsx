import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { get } from '@api/api';
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
	const [isModified, setIsModified] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(
				'/api/community?skip=0&limit=10',
			);
			setCommunityList(responseData.data.posts);
		};
		fetchData();
		if (isModified) {
			fetchData();
			setIsModified(false);
			window.scrollTo(0, 0);
		}
	}, [isModified]);

	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/review?skip=0&limit=10');
			setReviewList(responseData.data.reviews);
		};
		fetchData();
		if (isModified) {
			fetchData();
			setIsModified(false);
			window.scrollTo(0, 0);
		}
	}, [isModified]);

	// 세부 글 클릭
	const postClick = (postId: string) => {
		navigate(`/community/${postId}`);
	};

	const reviewClick = (postId: string) => {
		navigate(`/review/${postId}`);
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
					communityList
						.filter((item) => {
							return item.isReported;
						})
						.map((postData) => (
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
								postId={postData._id}
								postType={postData.postType}
								setIsModified={setIsModified}
							/>
						))}
				{reviewList &&
					reviewNav &&
					reviewList
						.filter((item) => {
							return item.isReported;
						})
						.map((postData) => (
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
								onClick={() => reviewClick(postData._id)}
								postId={postData._id}
								volunteerId={postData.volunteer_id}
								setIsModified={setIsModified}
							/>
						))}
			</PostContainer>
		</>
	);
};

export default Report;
