import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '@components/SearchBar/SearchBar';
import { get } from '@src/api/api';
import { CommunityListType, VolunteerListType } from '@src/types/cardType';
import DataType from '@src/types/dataType';
import {
	SearchSection,
	VolunteerContainer,
	VolunteerTitle,
	CommunityContainer,
	CommunityTitle,
	ButtonContainer,
	Arrow,
	MoreContent,
	NoSearchContainer,
	NoKeyword,
} from './style';
import KeywordComponent from '@components/Keyword/Keyword';
import VolunteerCard from '@components/Card/VolunteerCard';
import CommunityCard from '@components/Card/CommunityCard';
import throttle from '@utils/throttle.ts';

const Search = () => {
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(window.location.search);
	const queryValue = queryParams.get('keyword');

	const [query, setQuery] = useState<string | null>(queryValue);
	const [submit, setSubmit] = useState<boolean>(false);
	const [volunteerList, setVolunteerList] = useState<VolunteerListType>([]);
	const [communityList, setCommunityList] = useState<CommunityListType>([]);
	const [volunteerLoad, setVolunteerLoad] = useState<boolean>(true);
	const [isLoad, setLoad] = useState<boolean>(true);
	const [hidden, setHidden] = useState<boolean>(false);

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
				`/api/volunteers/search?keyword=${query}&skip=0&limit=8`,
			);
			setVolunteerList(responseData.data.searchVolunteers);
			setVolunteerLoad(responseData.data.hasMore);
		};
		fetchData();
	}, [query]);

	// 커뮤니티 조회
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(
				`/api/community/totalsearch?keyword=${query}&skip=0&limit=5`,
			);
			setCommunityList(responseData.data.posts);
			setLoad(responseData.data.hasMore);
		};
		fetchData();
	}, [query]);

	// 데이터 불러오기
	const loadMoreData = async (dataType: string) => {
		if (isLoad || volunteerLoad) {
			let url = '';
			if (dataType === 'community') {
				url = `/api/community/totalsearch?keyword=${query}&skip=${communityList.length}&limit=5`;
			} else if (dataType === 'volunteer') {
				url = `/api/volunteers/search?keyword=${query}&skip=${volunteerList.length}&limit=8`;
			}
			const response = await get<DataType>(url, {});

			if (dataType === 'community') {
				const newPostListData = response.data.posts;
				setCommunityList((prevData) => [...prevData, ...newPostListData]);
				setLoad(response.data.hasMore);
				setHidden(false);
			} else if (dataType === 'volunteer') {
				const newPostListData = response.data.searchVolunteers;
				setVolunteerList((prevData) => [...prevData, ...newPostListData]);
				setVolunteerLoad(response.data.hasMore);
				setHidden(false);
			}
		}
	};

	// 하단으로 내려가면 더보기 버튼
	useEffect(() => {
		if (communityList.length > 0 || volunteerList.length > 0) {
			const handleScroll = throttle(() => {
				const { scrollTop, offsetHeight } = document.documentElement;
				if (offsetHeight - window.innerHeight - scrollTop < 250) {
					setHidden(true);
				} else if (offsetHeight - window.innerHeight - scrollTop < 800) {
					setHidden(true);
				}
			});

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [communityList, volunteerList]);

	const validSearch =
		(query !== '' && volunteerList.length !== 0) ||
		(query !== '' && communityList.length !== 0);

	return (
		<SearchSection>
			<SearchBar onSearch={handleSearch} />
			{validSearch ? (
				<>
					<VolunteerTitle>봉사활동 검색결과</VolunteerTitle>
					<VolunteerContainer>
						{volunteerList.map((item) => (
							<VolunteerCard
								key={item._id}
								volunteerData={item}
								onClick={() =>
									navigate(`/volunteers/ongoing/detail/${item._id}`)
								}
							/>
						))}
					</VolunteerContainer>
					{hidden && volunteerLoad && (
						<ButtonContainer>
							<Arrow onClick={() => loadMoreData('volunteer')} />
							<MoreContent>more</MoreContent>
						</ButtonContainer>
					)}
					<CommunityTitle>커뮤니티 검색결과</CommunityTitle>
					<CommunityContainer>
						{communityList.map((item) => (
							<CommunityCard
								key={item._id}
								communityData={item}
								onClick={() => navigate(`/community/${item._id}`)}
								searchPage={true}
							/>
						))}
						{hidden && isLoad && (
							<ButtonContainer>
								<Arrow onClick={() => loadMoreData('community')} />
								<MoreContent>more</MoreContent>
							</ButtonContainer>
						)}
					</CommunityContainer>
				</>
			) : (
				<NoSearchContainer>
					{submit ? <NoKeyword>검색결과가 없습니다.</NoKeyword> : ''}
					<VolunteerTitle>아래와 같은 키워드는 어떠신가요?</VolunteerTitle>
					<KeywordComponent setQuery={setQuery} setSubmit={setSubmit} />
				</NoSearchContainer>
			)}
		</SearchSection>
	);
};

export default Search;
