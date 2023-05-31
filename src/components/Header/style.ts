import styled from "styled-components";

export const HeaderSection = styled.div`
  position: sticky;
  box-sizing: border-box;
  display: block;
  height: 8rem;
  background-color: #FFFFFF;
  border-bottom: 1px solid rgb(238, 238, 238);
`

export const HeaderContainer = styled.div`
  display: flex;
  min-width: 140rem;
  margin: auto 40rem;
`

export const LogoContainer = styled.div`
  width: 8rem;
  height: 8rem;
  cursor: pointer;
`

export const MainLogo = styled.img`
  width: 8rem;
  height: 8rem;
`
export const NavContainer = styled.div`
  display: flex;
  margin: 0.5rem 28rem 0.5rem 30rem;
`

export const NavCategory = styled.p`
  margin: 0.5rem 2.5rem;
  align-self: center;
  color: #444444;
  font-weight: normal;
  font-size: 1.5rem;
`

export const LoginButton = styled.button`
  margin: 2.5rem 1rem 1rem;
  width: 7rem;
  height: 3.5rem;
  background-color: transparent;
  border-radius: 1.7rem;
  border: 1px solid #CCCCCC;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
`

export const SearchButton = styled.div`
  margin: 2.8rem 1rem 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`

export const SearchIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`