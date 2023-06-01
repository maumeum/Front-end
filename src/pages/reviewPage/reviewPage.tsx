import React, { useRef, useEffect } from 'react';
import TopBar from '../../components/TopBar/TopBar.tsx';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '../../components/TotalPostNumber/TotalPostNumber.tsx';
import PostList from '../../components/PostList/PostList.tsx';
import { NumberWriteContainer, PageContainer } from '../community/style.ts';

const reviewPage = () => {
	const handleSearch = (query: string) => {
		//검색기능 구현 로직 작성예정
		console.log('검색어:', query);
	};

	const postListData = [
		{
			postTitle: '5/20일 다녀온 희망보육원 봉사 후기',
			postContents:
				'봉사하기에 있는 적십자사 주최 캠페인을 가고싶은데 인원이 부족하네요 같이 갈사람 계신가요?',
		},
		{
			postTitle: '사랑의 밥차 봉사 후기 공유드립니다^^',
			postContents:
				'산악 자전거를 좋아하고 경험이 있는 분들과 함께 타러 갈 예정입니다. 같이 가실 분 연락주세요.',
		},
		{
			postTitle:
				'너무너무 좋았던 봉사 공유드려요 아기 천사들 많이 만나고 왔어요!',
			postContents:
				'봉사하기에 있는 적십자사 주최 캠페인을 가고싶은데 인원이 부족하네요 같이 갈사람 계신가요?',
		},
	];

	return (
		<>
			<PageContainer>
				<TopBar title='봉사후기 게시판' text='생생한 봉사후기를 공유해요' />
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={postListData.length} />
				</NumberWriteContainer>
				{postListData.map((postData, index) => (
					<PostList
						key={index}
						postTitle={
							postData.postTitle.slice(0, 50) +
							(postData.postTitle.length > 50 ? '...' : '')
						}
						postContents={
							postData.postContents.slice(0, 50) +
							(postData.postContents.length > 50 ? '...' : '')
						}
					/>
				))}
			</PageContainer>
		</>
	);
};

export default reviewPage;
