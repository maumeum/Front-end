import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '@components/SearchBar/SearchBar';
import { get } from '@api/Api';
import { CommunityListType, VolunteerListType } from '@src/types/CardType';
import DataType from '@src/types/DataType';
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
	const [volunteerList, setVolunteerList] = useState<VolunteerListType[]>([]);
	const [communityList, setCommunityList] = useState<CommunityListType[]>([]);
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
			const responseData = await get<VolunteerListType[]>(
				`/api/volunteers/search/?keyword=${query}`,
			);
			setVolunteerList(responseData);
		};
		fetchData();
	}, [query]);

	// 커뮤니티 조회
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(
				`/api/community/search?keyword=${query}`,
			);
			setCommunityList(responseData.data);
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
					{submit ? <NoKeyword>검색결과가 없습니다.</NoKeyword> : ''}
					<VolunteerTitle>아래와 같은 키워드는 어떠신가요?</VolunteerTitle>
					<KeywordComponent />
				</NoSearchContainer>
			)}
		</SearchSection>
	);
};

export default Search;
