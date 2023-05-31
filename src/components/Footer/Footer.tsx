import React from "react";
import {FooterSection, FooterContainer, IntroContainer, LogoContainer, MainLogo, SloganContainer, Slogan, MemberList, Member, GitLink} from "./style"

import mainLogo from "../../assets/icons/mainlogo.svg";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <IntroContainer>
          <LogoContainer>
            <MainLogo src={mainLogo} alt="mainLogo" />
          </LogoContainer>
          <SloganContainer>
            <Slogan>마음을 잇는 봉사</Slogan>
            <Slogan>마음이음에서 흔적을 남겨보세요</Slogan>
          </SloganContainer>
        </IntroContainer>
        <MemberList>
          {members.map((member: {name: string, link: string}, index: number) => {
            return <Member key={index}><GitLink href={member.link}>{member.name}</GitLink></Member>
          })}
        </MemberList>
      </FooterContainer>
    </FooterSection>
  );
}

export default Footer;

const members = [
  {
    name: "김마리나",
    link: ""
  },
  {
    name: "류이서",
    link: "https://github.com/ryuiseo"
  },
  {
    name: "류한나",
    link: "https://github.com/hanna-ryu"
  },
  {
    name: "이해인",
    link: ""
  },
  {
    name: "정혜린",
    link: "https://github.com/02rynn"
  },
  {
    name: "최윤재",
    link: "https://github.com/uniqueeest"
  },
  {
    name: "탁경진",
    link: ""
  },
];