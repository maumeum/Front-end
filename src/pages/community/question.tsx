import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar.tsx';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '../../components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '../../components/Buttons/WriteButton/WriteButton.tsx';
import { NumberWriteContainer, PageContainer } from './style.ts';
import PostList from '../../components/PostList/PostList.tsx';

const question = () => {
	const navigate = useNavigate();
	const handleSearch = (query: string) => {
		console.log('검색어:', query);
	};
	const navigateWrite = () => {
		navigate('/community/question/write');
	};
	const postListData = [
		{
			postTitle: '봉사활동 한번 신청하면 달마다 주기적으로 가야하는 건가요?',
			postContents:
				'저는 한번만 참여하고 싶은데 혹시 봉사활동 신청하면 주기적으로 가야하는건지 궁금해요',
		},
		{
			postTitle: '한강 쓰레기줍기 행사 어떤 준비물 제공되는지 아시는분?',
			postContents:
				'쓰레기줍기 행사 참여하려고 하는데 어떤 준비물 제공되는지 궁금합니다. 아니면 집에서 미리 준비해가야하는 건가요?',
		},
	];

	return (
		<>
			<PageContainer>
				<TopBar title='궁금해요' text='봉사와 관련된 궁금한 사항을 질문해요' />
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={postListData.length} />
					<WriteButton toNavigate={navigateWrite} />
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

export default question;
