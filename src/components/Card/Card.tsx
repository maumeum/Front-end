import React from 'react';
import styled from 'styled-components';
import { CardContainer, ImgBox, ContentBox, UserInfo, Badge } from './card.ts';
type Props = {
  title: string;
  thumbnail: string;
  nickname: string;
  profile: string;
  recruitStatus: string;
};

function Card({ title, thumbnail, nickname, profile, recruitStatus }: Props) {
  return (
    <>
      <CardContainer>
        <ImgBox>
          <img src={thumbnail} alt="" />
          <Badge>
            <p>{recruitStatus}</p>
          </Badge>
        </ImgBox>
        <ContentBox>
          <p>{title}</p>
          <UserInfo>
            <img src={profile} alt="작성자 프로필사진" />
            <p>{nickname}</p>
          </UserInfo>
        </ContentBox>
      </CardContainer>
    </>
  );
}

export default Card;
