import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import {
	NumberWriteContainer,
	PageContainer,
	QuestionMainContainer,
	FFImageArea,
	MainTitle,
	Subtitle,
	TextArea,
	MenuBar,
	MiddleContainer,
	BigText,
	Sub,
	Highlight,
} from './style.ts';
import PostList from '@components/PostList/PostList.tsx';
import Menu from '@components/Menu/Menu.tsx';
import questionImage from '@assets/images/questionImage.png';
import { get } from '@api/api';
import DataType from '@src/types/dataType.ts';

type PostData = {
	_id: string;
	title: string;
	content: string;
};
const Question = () => {
	const navigate = useNavigate();
	const [postListData, setPostListData] = useState<PostData[]>([]);

	useEffect(() => {
		const fetchPostList = async () => {
			const response = await get<DataType>(
				'/api/community/category/qna?skip=0&limit=10',
				{
					params: {
						postType: 'qna',
					},
				},
			);
			setPostListData(response.data.categoryPost);
		};
		fetchPostList();
	});

	const handleSearch = async (query: string) => {
		const response = await get<DataType>(
			`/api/community/search?keyword=${query}&posttype=qna`,
		);
		setPostListData(response.data);
		console.log('검색어:', query);
	};

	const navigateWrite = () => {
		navigate('/community/question/write');
	};
	const navigateDetail = (postId: string) => {
		navigate(`/community/${postId}`);
	};

	return (
		<>
			<PageContainer>
				<QuestionMainContainer>
					<TextArea>
						<MainTitle>마음이음</MainTitle>
						<Subtitle>
							마음이음은 동행을 추구합니다.
							<br />
							함께 봉사하는 이들을 위한 커뮤니티에서 소중한 경험을 공유하고
							마음을 이어보세요!
						</Subtitle>
					</TextArea>

					<FFImageArea src={questionImage} alt='question-image' />
				</QuestionMainContainer>

				<MiddleContainer>
					<BigText>궁금해요</BigText>
					<Sub>
						<p>궁금한 사항을 공유하고 새로운 정보를 얻어요</p>
						<p>
							<Highlight>제목에 궁금한 사항의 키워드를</Highlight> 포함하면 더욱
							많은 댓글을 받을 수 있어요
						</p>
					</Sub>
				</MiddleContainer>
				<MenuBar>
					<Menu title={'커뮤니티'} />
				</MenuBar>
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={postListData.length} />
					<WriteButton toNavigate={navigateWrite} />
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
			</PageContainer>
		</>
	);
};

export default Question;
