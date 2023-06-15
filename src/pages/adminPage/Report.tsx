import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { get } from '@api/api';
import {
	CommunityListType,
	ReviewListType,
	VolunteerListType,
	CommentListType,
} from '@src/types/cardType';
import DataType from '@src/types/dataType';
import Menu from '@components/Menu/Menu.tsx';
import PostList from '@components/PostList/PostList';
import { MenuBar, TopBarContainer, ClickTopBar, PostContainer } from './style';

const Report = () => {
	const [communityList, setCommunityList] = useState<CommunityListType>([]);
	const [reviewList, setReviewList] = useState<ReviewListType>([]);
	const [volunteerList, setVolunteerList] = useState<VolunteerListType>([]);
	const [communityCommentList, setCommunityCommentList] =
		useState<CommentListType>([]);
	const [communityNav, setCommunityNav] = useState<boolean>(false);
	const [reviewNav, setReviewNav] = useState<boolean>(true);
	const [volunteerNav, setVolunteerNav] = useState<boolean>(false);
	const [commentNav, setCommentNav] = useState<boolean>(false);
	const [isModified, setIsModified] = useState<boolean>(false);
	const navigate = useNavigate();

	// 신고된 커뮤니티
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/community/admins/reports');
			setCommunityList(responseData.data);
		};
		fetchData();
		if (isModified) {
			fetchData();
			setIsModified(false);
			window.scrollTo(0, 0);
		}
	}, [isModified]);

	// 신고된 리뷰
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/review/admins/reports');
			setReviewList(responseData.data.reviews);
		};
		fetchData();
		if (isModified) {
			fetchData();
			setIsModified(false);
			window.scrollTo(0, 0);
		}
	}, [isModified]);

	// 신고된 봉사활동
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(
				'/api/volunteers/admins/reports',
			);
			setVolunteerList(responseData.data.reportedVolunteer);
		};
		fetchData();
		if (isModified) {
			fetchData();
			setIsModified(false);
			window.scrollTo(0, 0);
		}
	}, [isModified]);

	// 신고된 커뮤니티 댓글
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(
				'/api/postComments/admins/reports',
			);
			setCommunityCommentList(responseData.data.reportedPostComment);
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

	const volunteerClick = (postId: string) => {
		navigate(`/volunteers/ongoing/${postId}`);
	};

	// 상단 nav바 클릭
	const reviewNavClick = () => {
		setCommunityNav(false);
		setReviewNav(true);
		setCommentNav(false);
		setVolunteerNav(false);
	};

	const communityNavClick = () => {
		setCommunityNav(true);
		setReviewNav(false);
		setCommentNav(false);
		setVolunteerNav(false);
	};

	const volunteerNavClick = () => {
		setCommunityNav(false);
		setReviewNav(false);
		setCommentNav(false);
		setVolunteerNav(true);
	};

	const CommentNavClick = () => {
		setCommunityNav(false);
		setReviewNav(false);
		setCommentNav(true);
		setVolunteerNav(false);
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
				<ClickTopBar
					onClick={volunteerNavClick}
					className={volunteerNav ? 'curr' : ''}>
					봉사활동 글 목록
				</ClickTopBar>
				<ClickTopBar
					onClick={CommentNavClick}
					className={commentNav ? 'curr' : ''}>
					댓글 목록
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
							postId={postData._id}
							postType='postType'
							setIsModified={setIsModified}
							isReported={true}
						/>
					))}
				{communityCommentList &&
					commentNav &&
					communityCommentList.map((postData) => (
						<PostList
							key={postData._id}
							postTitle={
								postData.content.slice(0, 50) +
								(postData.content.length > 50 ? '...' : '')
							}
							postContents={postData.user_id.nickname}
							onClick={() => postClick(postData.post_id)}
							postId={postData._id}
							setIsModified={setIsModified}
							isReported={true}
							comment={'community'}
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
							onClick={() => reviewClick(postData._id)}
							postId={postData._id}
							volunteerId={postData.volunteer_id}
							setIsModified={setIsModified}
							isReported={true}
						/>
					))}
				{volunteerList &&
					volunteerNav &&
					volunteerList.map((postData) => (
						<PostList
							key={postData._id}
							postTitle={
								postData.title.slice(0, 50) +
								(postData.title.length > 50 ? '...' : '')
							}
							postContents={
								postData.content
									? postData.content.slice(0, 50) +
									  (postData.content.length > 50 ? '...' : '')
									: ''
							}
							onClick={() => volunteerClick(postData._id)}
							postId={postData._id}
							setIsModified={setIsModified}
							isReported={true}
							volunteer='volunteer'
						/>
					))}
			</PostContainer>
		</>
	);
};

export default Report;
