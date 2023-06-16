import React, { useState } from 'react';
import {
	SearchBarForm,
	SearchBarInput,
	SearchBarBtn,
	SearchBarContainer,
	SearchLogo,
} from './SearchBarstyle';
import searchLogo from '@assets/icons/search.svg';

type SearchBarProps = {
	onSearch: (query: string) => void;
};

const VolunteerSearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(query);
	};

	return (
		<SearchBarContainer style={{ left: '40rem' }}>
			<SearchBarForm onSubmit={handleSubmit}>
				<SearchLogo src={searchLogo} alt='searchlogo' />
				<SearchBarInput
					type='text'
					value={query}
					onChange={handleInputChange}
					placeholder='검색하기'
				/>
				<SearchBarBtn type='submit'>검색</SearchBarBtn>
			</SearchBarForm>
		</SearchBarContainer>
	);
};

export default VolunteerSearchBar;
