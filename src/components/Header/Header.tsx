import React from "react";
import {useNavigate} from "react-router-dom";
import {HeaderSection, HeaderContainer, LogoContainer, MainLogo, NavContainer, NavCategory, UtilContainer, LoginButton, SearchButton, SearchIcon} from "./style";

import mainLogo from "../../assets/icons/mainlogo.svg";
import searchLogo from "../../assets/icons/search.svg";

const Header = () => {
  const navigate = useNavigate();

  // 로그인 버튼을 클릭하여 로그인 화면으로 이동
  const loginHandler = () => {
    navigate("/login");
  }

  // 로고를 클릭하여 메인 페이지로 이동
  const mainHandler = () => {
    navigate("/");
  }

  // search 로고를 클릭하여 검색 화면으로 이동
  const searchHandler = () => {
    navigate("/search");
  }

  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer onClick={mainHandler}>
          <MainLogo src={mainLogo} alt="mainLogo" />
        </LogoContainer>
        <NavContainer>
          <NavCategory to="/">봉사모집하기</NavCategory>
          <NavCategory to="/community/findfriend">커뮤니티</NavCategory>
          <NavCategory to="/review">봉사후기</NavCategory>
        </NavContainer>
        <UtilContainer>
          <LoginButton onClick={loginHandler}>로그인</LoginButton>
          <SearchButton onClick={searchHandler}>
            <SearchIcon src={searchLogo} alt="searchLogo" />
          </SearchButton>
        </UtilContainer>
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;