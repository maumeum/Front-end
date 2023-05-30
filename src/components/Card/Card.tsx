import React from 'react';
import styled from 'styled-components';
import {
  CardContainer,
  ImgBox,
  ContentBox,
  UserInfo,
  Badge,
  Button,
} from './card.ts';
type Props = {
  title: string;
  thumbnail: string;
  nickname: string;
  profile: string;
  recruitStatus: string;
  currTab: string;
};

function Card({
  currTab,
  title,
  thumbnail,
  nickname,
  profile,
  recruitStatus,
}: Props) {
  return (
    <>
      <CardContainer currTab={currTab}>
        <ImgBox>
          <img src={thumbnail} alt="" />
          <Badge currTab={currTab}>
            <p>{recruitStatus}</p>
          </Badge>
        </ImgBox>
        <ContentBox>
          <p>{title}</p>
          <UserInfo>
            <img src={profile} alt="작성자 프로필사진" />
            <p>{nickname}</p>
            {currTab === '완료한 봉사' && <Button>리뷰작성</Button>}
          </UserInfo>
        </ContentBox>
      </CardContainer>
    </>
  );
}

export default Card;
