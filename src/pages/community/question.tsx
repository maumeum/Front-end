import React from 'react';
import TopBar from '../../components/TopBar/TopBar.tsx';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '../../components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '../../components/Buttons/WriteButton/WriteButton.tsx';
import { NumberWriteContainer } from './style.ts';

const question = () => {
  const handleSearch = (query: string) => {
    console.log('검색어:', query);
  };
  return (
    <>
      <TopBar title="궁금해요" text="봉사와 관련된 궁금한 사항을 질문해요" />
      <SearchBar onSearch={handleSearch} />
      <NumberWriteContainer>
        <TotalPostNumber totalPosts={12} />
        <WriteButton />
      </NumberWriteContainer>
    </>
  );
};

export default question;
