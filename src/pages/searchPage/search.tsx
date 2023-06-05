import React from 'react';

import { SearchSection, SearchContainer, SearchLogo, SearchInput, VolunteerContainer, CommunityContainer } from './style';
import searchLogo from '@src/assets/icons/search.svg';

const Search = () => {
	return (
		<SearchSection>
			<SearchContainer>
				<SearchLogo src={searchLogo} alt='search' />
				<SearchInput placeholder='검색어를 입력하세요' />
			</SearchContainer>
			<VolunteerContainer>
			</VolunteerContainer>
			<CommunityContainer>
			</CommunityContainer>
		</SearchSection>
	); 
};

export default Search;
