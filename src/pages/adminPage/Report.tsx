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

	// 데이터 가져오기
	const fetchData = async (url: string, setData: any, datatype?: string) => {
		const responseData = await get<DataType>(url);
		if (datatype) {
			setData(responseData.data[datatype]);
		} else {
			setData(responseData.data);
		}
	};

	useEffect(() => {
		const fetchAllData = async () => {
			await Promise.all([
				fetchData('/api/community/admins/reports', setCommunityList),
				fetchData('/api/review/admins/reports', setReviewList, 'reviews'),
				fetchData(
					'/api/volunteers/admins/reports',
					setVolunteerList,
					'reportedVolunteer',
				),
				fetchData(
					'/api/postComments/admins/reports',
					setCommunityCommentList,
					'reportedPostComment',
				),
			]);
		};

		fetchAllData();

		if (isModified) {
			fetchAllData();
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

	// Nav
	const setNav = (
		community: boolean,
		review: boolean,
		comment: boolean,
		volunteer: boolean,
	) => {
		setCommunityNav(community);
		setReviewNav(review);
		setCommentNav(comment);
		setVolunteerNav(volunteer);
	};

	const reviewNavClick = () => {
		setNav(false, true, false, false);
	};

	const communityNavClick = () => {
		setNav(true, false, false, false);
	};

	const volunteerNavClick = () => {
		setNav(false, false, false, true);
	};

	const CommentNavClick = () => {
		setNav(false, false, true, false);
	};

	// title, content 미리보기 함수
	const previewData = (data: string) => {
		return data.slice(0, 50) + (data.length > 50 ? '...' : '');
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
							postTitle={previewData(postData.title)}
							postContents={previewData(postData.content)}
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
							postTitle={previewData(postData.content)}
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
							postTitle={previewData(postData.title)}
							postContents={previewData(postData.content)}
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
							postTitle={previewData(postData.title)}
							postContents={
								postData.content ? previewData(postData.content) : ''
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
