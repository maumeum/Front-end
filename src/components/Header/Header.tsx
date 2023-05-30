import React from "react";
import {NavLink} from "react-router-dom";
import {HeaderSection, HeaderContainer, LogoContainer, MainLogo, NavContainer, NavCategory, LoginButton, SearchButton, SearchIcon} from "./style";

import mainLogo from "../../assets/icons/mainlogo.svg";
import searchLogo from "../../assets/icons/search.svg";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          <MainLogo src={mainLogo} alt="mainLogo" />
        </LogoContainer>
        <NavContainer>
          <NavCategory>봉사모집하기</NavCategory>
          <NavCategory>커뮤니티</NavCategory>
          <NavCategory>봉사후기</NavCategory>
        </NavContainer>
        <LoginButton>로그인</LoginButton>
        <SearchButton>
          <SearchIcon src={searchLogo} alt="searchLogo" />
        </SearchButton>
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;