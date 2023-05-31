import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal.tsx';

import {
  CardContainer,
  ImgBox,
  ContentBox,
  UserInfo,
  Badge,
  Button,
  VolunInfo,
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
  const [isOpen, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
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
          <VolunInfo>
            <p>{title}</p>
          </VolunInfo>
          <UserInfo>
            <img src={profile} alt="작성자 프로필사진" />
            <p>{nickname}</p>
            {currTab === '완료한 봉사' && (
              <Button onClick={openModal}>리뷰작성</Button>
            )}
            <Modal isOpen={isOpen} setOpen={setOpen} />
          </UserInfo>
        </ContentBox>
      </CardContainer>
    </>
  );
}

export default Card;
