import React from 'react';
import TopBar from '../../components/TopBar/TopBar.tsx';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';

const findFriend = () => {
	const handleSearch = (query: string) => {
		//검색기능 구현 로직 작성예정
		console.log('검색어:', query);
	};
	return (
		<>
			<TopBar title='동행 구해요' text='같이 봉사할 친구를 모집해요' />
			<SearchBar onSearch={handleSearch} />
		</>
	);
};

export default findFriend;
