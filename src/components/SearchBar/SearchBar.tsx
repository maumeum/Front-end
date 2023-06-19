import React, { useState } from 'react';
import {
	SearchBarForm,
	InputContainer,
	SearchBarInput,
	SearchBarBtn,
	SearchLogo,
} from './SearchBarstyle';
import searchLogo from '@assets/icons/search.svg';

type SearchBarProps = {
	onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(query);
	};

	return (
		<SearchBarForm onSubmit={handleSubmit}>
			<InputContainer>
				<SearchLogo src={searchLogo} alt='searchlogo' />
				<SearchBarInput
					type='text'
					value={query}
					onChange={handleInputChange}
					placeholder='검색하기'
				/>
			</InputContainer>
			<SearchBarBtn type='submit'>검색</SearchBarBtn>
		</SearchBarForm>
	);
};

export default SearchBar;
