import React from "react";
import styled from "styled-components";

interface listType {
  user_id: {
    nickname: string
  },
  title: string,
  postType: string,
}

const CommunityCard = ({data}: {data: listType}) => {

  return (
    <Community>
      <PostType>{data.postType}</PostType>
      <Title>{data.title}</Title>
    </Community>
  );
}

export default CommunityCard;

const Community = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 11rem;
  background-color: #FFFFFF;
  border: none;
  border-radius: 12px;
  filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
  cursor: pointer;
`

const PostType = styled.div`
  width: 25%;
  text-align: center;
  color: #888888;
  font-size: 2.5rem;
`

const Title = styled.p`
  margin: 0 6rem 0 3rem;
  font-size: 2rem;
`