import React from "react";

import {
  MainSection, 
  TopSlogan, 
  TopContainer,
  ReviewContainer, 
  ReviewCard, 
  IntroducePage, 
  IntroduceTitle, 
  MainTitle, 
  IntroImg, 
  IntroduceDesc, 
  Title, 
  Desc, 
  MidSlogan, 
  VolunteerContainer, 
  Volunteer,
  CommunityTitle,
  CommunityContainer,
  CommunityCard
} from "./style";
import cardLogo from "../../assets/icons/cardlogo.svg";

const Main = () => {
  return (
    <MainSection>
      <TopSlogan>당신의 아름다운 걸음을 마음이음이 함께합니다.</TopSlogan>
      <TopContainer>
        <ReviewContainer>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </ReviewContainer>
        <IntroducePage>
          <IntroduceTitle>
            <MainTitle>세상에 행복을 나누러<br />한 번 같이 걸어가보실래요?</MainTitle>
            <IntroImg src={cardLogo} alt="cardLogo" />
          </IntroduceTitle>
          <IntroduceDesc>
            <Title>동행을 추구합니다.</Title>
            <Desc>
            마음이음, 봉사로 하나되는 따뜻한 공간입니다. 
            우리는 봉사활동을 모집하고 찾아보며, 함께 봉사하는 이들을 위한 커뮤니티를 만들었습니다. 
            봉사의 소중한 경험을 공유하고 나누며, 마음을 이어가는 마음이음에서 여러분을 기다립니다.
            </Desc>
          </IntroduceDesc>
        </IntroducePage>
      </TopContainer>
      <MidSlogan>시간을 나눠 마음 채우기</MidSlogan>
      <VolunteerContainer>
        {Array.from({ length: 8 }).map((_, index) => (
          <Volunteer key={index} />
        ))}
      </VolunteerContainer>
      <CommunityTitle>커뮤니티</CommunityTitle>
      <CommunityContainer>
        {Array.from({ length: 6}).map((_, index) => (
          <CommunityCard key={index} />
        ))}
      </CommunityContainer>
    </MainSection>
  )
}

export default Main;
