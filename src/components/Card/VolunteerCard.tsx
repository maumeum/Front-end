import React from "react";
import styled from "styled-components";

interface listType {
  title : string,
  content : string,
  centName : string,
   createdAt : string,
  statusName : string,
  deadline : string,
  applyCount : number,
  registerCount : number,
  actTypeName : string,
  teenager : boolean,
  images : string[],
  user_id : string,
  updateAt : string
}


import imgData from "../../assets/images/volunteer1.jpg";

const VolunteerCard = ({data}: {data: listType}) => {

  return (
    <Volunteer>
      <ImgContainer>
        <Image src={imgData} />
        <RecruitStatus>{data.statusName}</RecruitStatus>
      </ImgContainer>
      <IntroContainer>
        <Title>{data.title}</Title>
        <Content>{data.centName}</Content>
      </IntroContainer>
    </Volunteer>
  )
}

export default VolunteerCard;

const Volunteer = styled.div`
  margin-bottom: 6rem;
  width: calc(100% - 0.5rem);
  height: 37rem;
  background-color: #FFFFFF;
  border: none;
  border-radius: 12px;
  filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
  cursor: pointer;
`

const ImgContainer = styled.div`
  margin-bottom: 3rem;
`

const Image = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  border: none;
  border-radius: 12px;
`

const RecruitStatus = styled.div`
  width: 25%;
  text-align: center;
  background-color: #202020;
  color: #FFFFFF;
  font-size: 1.2rem;
  border: none;
  border-radius: 0 4px 4px 4px;
`

const IntroContainer = styled.div`
  margin: 1.5rem;
`

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.7rem;
  font-weight: 800;
`

const Content = styled.p`
  margin-top: 0;
  font-size: 1.3rem;
`