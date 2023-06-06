import React, { useState, useEffect } from 'react';

import SearchBar from '@components/SearchBar/SearchBar';
import { get } from '@api/Api';
import { communityListType, volunteerListType } from '@src/types/cardType';
import {
	SearchSection,
	VolunteerContainer,
	VolunteerTitle,
	CommunityContainer,
	CommunityTitle,
	NoSearchContainer,
	NoKeyword,
	KeywordContainer,
	KeywordBox,
} from './style';
import VolunteerCard from '@components/Card/VolunteerCard';
import CommunityCard from '@components/Card/CommunityCard';

const Search = () => {
	const [query, setQuery] = useState<string>('');
	const [volunteerList, setVolunteerList] = useState<volunteerListType[]>([]);
	const [communityList, setCommunityList] = useState<communityListType[]>([]);

	const handleSearch = (query: string) => {
		setQuery(query);
	};

	// 봉사활동 조회
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<volunteerListType[]>(
				`/api/volunteers/search/?keyword=${query}`,
			);
			setVolunteerList(responseData);
		};
		fetchData();
	}, [query]);

	// 커뮤니티 조회
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<communityListType[]>(
				`/commuities/search/?keyword=${query}`,
			);
			setCommunityList(responseData);
		};
		fetchData();
	}, [query]);

	const validSearch =
		query !== '' && volunteerList.length !== 0 && communityList.length !== 0;

	return (
		<SearchSection>
			<SearchBar onSearch={handleSearch} />
			{validSearch ? (
				<>
					<VolunteerTitle>봉사활동 검색결과</VolunteerTitle>
					<VolunteerContainer>
						{volunteerList.slice(0, 8).map((item) => (
							<VolunteerCard key={item._id} data={item} />
						))}
					</VolunteerContainer>
					<CommunityTitle>커뮤니티 검색결과</CommunityTitle>
					<CommunityContainer>
						{communityList.slice(0, 6).map((item) => (
							<CommunityCard key={item._id} data={item} />
						))}
					</CommunityContainer>
				</>
			) : (
				<NoSearchContainer>
					<NoKeyword>검색결과가 없습니다.</NoKeyword>
					<VolunteerTitle>아래와 같은 키워드는 어떠신가요?</VolunteerTitle>
					<KeywordContainer>
						{keywordData.map((item, index) => (
							<KeywordBox key={index}>{item}</KeywordBox>
						))}
					</KeywordContainer>
				</NoSearchContainer>
			)}
		</SearchSection>
	);
};

export default Search;

const keywordData = [
	'어린이',
	'어른',
	'유기견',
	'보육원',
	'장애인',
	'교육',
	'다문화',
];
