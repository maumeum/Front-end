import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { get } from '@api/Api';
import { CommunityListType } from '@src/types/CardType';
import DataType from '@src/types/DataType';
import Menu from '@components/Menu/Menu.tsx';
import PostList from '@components/PostList/PostList';
import {
	MenuBar,
	TopBarContainer,
	ClickTopBar,
	TopBar,
	PostContainer,
} from './style';

const Report = () => {
	const [communityList, setCommunityList] = useState<CommunityListType[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/community');
			setCommunityList(responseData.data);
		};
		fetchData();
	}, []);

	const navigateDetail = (postId: string) => {
		navigate(`/community/${postId}`);
	};

	return (
		<>
			<MenuBar>
				<Menu title='관리자' />
			</MenuBar>
			<TopBarContainer>
				<TopBar>리뷰 글 목록</TopBar>
				<ClickTopBar>커뮤니티 글 목록</ClickTopBar>
			</TopBarContainer>
			<PostContainer>
				{communityList &&
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
							onClick={() => navigateDetail(postData._id)}
						/>
					))}
			</PostContainer>
		</>
	);
};

export default Report;
