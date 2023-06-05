import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@components/TopBar/TopBar.tsx';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import { NumberWriteContainer, PageContainer } from './style.ts';
import PostList from '@components/PostList/PostList.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { MenuBar } from '@components/MyPage/myPage.ts';

const findFriend = () => {
	const navigate = useNavigate();
	const handleSearch = (query: string) => {
		//검색기능 구현 로직 작성예정
		console.log('검색어:', query);
	};

	const navigateWrite = () => {
		navigate('/community/findfriend/write');
	};

	const postListData = [
		{
			id: '01',
			postTitle: '내일 청계천에서 오후3시에 같이 러닝하면서 플로깅 할사람?',
			postContents:
				'봉사하기에 있는 적십자사 주최 캠페인을 가고싶은데 인원이 부족하네요 같이 갈사람 계신가요?',
		},
		{
			id: '02',
			postTitle: '다음 주말에 함께 산악 자전거 타러 갈 사람 찾습니다.',
			postContents:
				'산악 자전거를 좋아하고 경험이 있는 분들과 함께 타러 갈 예정입니다. 같이 가실 분 연락주세요.',
		},
		{
			id: '03',
			postTitle: '내일 청계천에서 오후3시에 같이 러닝하면서 플로깅 할사람?',
			postContents:
				'봉사하기에 있는 적십자사 주최 캠페인을 가고싶은데 인원이 부족하네요 같이 갈사람 계신가요?',
		},
		{
			id: '04',
			postTitle: '5/3일에 계획중인 유기견 봉사 같이 갈 사람을 구합니다',
			postContents:
				'저번에 한번 갔던 유기견 봉사활동이 너무 좋아서 다시 가려하는데 혹시 같이 가실 분 계신가요? ',
		},
	];

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
				{postListData.map((postListData) => (
					<PostList
						key={postListData.id}
						postTitle={
							postListData.postTitle.slice(0, 50) +
							(postListData.postTitle.length > 50 ? '...' : '')
						}
						postContents={
							postListData.postContents.slice(0, 50) +
							(postListData.postContents.length > 50 ? '...' : '')
						}
					/>
				))}
			</PageContainer>
		</>
	);
};

export default findFriend;
