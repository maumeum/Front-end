import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '@components/SearchBar/SearchBar';
import { get } from '@api/api';
import { CommunityListType, VolunteerListType } from '@src/types/cardType';
import DataType from '@src/types/dataType';
import {
	SearchSection,
	VolunteerContainer,
	VolunteerTitle,
	CommunityContainer,
	CommunityTitle,
	NoSearchContainer,
	NoKeyword,
} from './style';
import KeywordComponent from '@components/Keyword/Keyword';
import VolunteerCard from '@components/Card/VolunteerCard';
import CommunityCard from '@components/Card/CommunityCard';

const Search = () => {
	const [query, setQuery] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const [volunteerList, setVolunteerList] = useState<VolunteerListType>([]);
	const [findFriendList, setFindFriendList] = useState<CommunityListType>([]);
	const [qnaList, setQnaList] = useState<CommunityListType>([]);
	const navigate = useNavigate();

	const handleSearch = (query: string) => {
		setQuery(query);
		setSubmit(true);
		if (query === '') {
			return navigate('/search');
		}
		navigate(`/search?keyword=${query}`);
	};

	// 봉사활동 조회
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(
				`/api/volunteers/search?keyword=${query}`,
			);
			setVolunteerList(responseData.data);
		};
		fetchData();
	}, [query]);

	// 동행 커뮤니티 조회
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(
				`/api/community/search?keyword=${query}&posttype=findfriend`,
			);
			setFindFriendList(responseData.data);
		};
		fetchData();
	}, [query]);

	// 질문 커뮤니티 조회
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(
				`/api/community/search?keyword=${query}&posttype=qna`,
			);
			setQnaList(responseData.data);
		};
		fetchData();
	}, [query]);

	const validSearch =
		(query !== '' && volunteerList.length !== 0) ||
		(query !== '' && findFriendList.length !== 0) ||
		(query !== '' && qnaList.length !== 0);

	return (
		<SearchSection>
			<SearchBar onSearch={handleSearch} />
			{validSearch ? (
				<>
					<VolunteerTitle>봉사활동 검색결과</VolunteerTitle>
					<VolunteerContainer>
						{volunteerList.slice(0, 8).map((item) => (
							<VolunteerCard key={item._id} volunteerData={item} />
						))}
					</VolunteerContainer>
					<CommunityTitle>커뮤니티 검색결과</CommunityTitle>
					<CommunityContainer>
						{findFriendList.slice(0, 3).map((item) => (
							<CommunityCard
								key={item._id}
								communityData={item}
								onClick={() => navigate(`/community/${item._id}`)}
							/>
						))}
						{qnaList.slice(0, 3).map((item) => (
							<CommunityCard
								key={item._id}
								communityData={item}
								onClick={() => navigate(`/community/${item._id}`)}
							/>
						))}
					</CommunityContainer>
				</>
			) : (
				<NoSearchContainer>
					{submit ? <NoKeyword>검색결과가 없습니다.</NoKeyword> : ''}
					<VolunteerTitle>아래와 같은 키워드는 어떠신가요?</VolunteerTitle>
					<KeywordComponent />
				</NoSearchContainer>
			)}
		</SearchSection>
	);
};

export default Search;
