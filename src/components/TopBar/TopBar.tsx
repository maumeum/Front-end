import React from 'react';
import { TopBarBox, Title, SubText, TextContainer } from './style';

type TopBarProps = {
  text: string;
  title: string;
};
const TopBar = ({ title, text }: TopBarProps) => {
  return (
    <>
      <TopBarBox>
        <TextContainer>
          <Title>{title}</Title>
          <SubText>{text}</SubText>
        </TextContainer>
      </TopBarBox>
    </>
  );
};

export default TopBar;
