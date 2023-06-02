import React from 'react';
import { Text, TotalNumber } from './style';
type TotalPostNumberProps = {
  totalPosts: number;
};

const TotalPostNumber = ({ totalPosts }: TotalPostNumberProps) => {
  return (
    <Text>
      전체 <TotalNumber>{totalPosts}</TotalNumber>건
    </Text>
  );
};

export default TotalPostNumber;
