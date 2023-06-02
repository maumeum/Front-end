import React from "react";
import styled from "styled-components";

import imgData from "../../assets/images/volunteer2.jpg";

interface listType {
  title: string,
  content: string,
  images: string[],
  volunteer_id: string,
  user_id: {
    nickname: string
  }
  index: number;
}

const ReviewCard = ({data}: {data: listType}) => {
  const key = data.index;

  //Content 미리보기 함수
  const previewContent = (data:listType) => {
    const content = data.content;

    // content의 길이가 35자 이상이라면 ... 처리
    if (content.length >= 35) {
      return `${content.slice(0, 34)}...`
    }
    return content;
  };

  //다른 색상 카드 구현
  const colorClass = (key: number) => {
    if (key === 0) {
      return "one";
    }
    return "two";
  }

  return (
    <Review className={colorClass(key)}>
      <ImageContainer>
        <ReviewImage src={imgData} />
      </ImageContainer>
      <ReviewContainer>
        <Nickname className={colorClass(key)}>{data.user_id.nickname}</Nickname>
        <Title className={colorClass(key)}>{data.title}</Title>
        <Content className={colorClass(key)}>{previewContent(data)}</Content>
      </ReviewContainer>
    </Review>
  )
}

export default ReviewCard;

const Review = styled.div`
  display: flex;
  margin: 4rem 0;
  width: 70rem;
  height: 25rem;
  background-color: ${props => props.className === "one" ? "#daebb7" : "#FFFFFF"};
  border: none;
  border-radius: 12px;
  filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
  cursor: pointer;
`

const ImageContainer = styled.div`
  height: 100%;
`

const ReviewImage = styled.img`
  height: 100%;
  border: none;
  border-radius: 12px 0 0 12px;
`

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 2rem;
`

const Title = styled.h2`
  font-size: 2rem;
`

const Nickname = styled.p`
  margin-top: 0;
  font-size: 1.4rem;
  color: #4A4A4A;
`

const Content = styled.p`
  font-size: 1.4rem;
  color: #4A4A4A;
`