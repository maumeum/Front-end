import styled from "styled-components";

export const HeaderSection = styled.div`
  top: 0;
  z-index: 200;
  position: sticky;
  box-sizing: border-box;
  height: 8rem;
  background-color: #FFFFFF;
  border-bottom: 1px solid rgb(238, 238, 238);
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40rem;
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
  min-width: 40rem;
`

export const NavCategory = styled.p`
  margin: 0rem 2.5rem;
  align-self: center;
  color: #444444;
  font-weight: normal;
  font-size: 1.5rem;
`

export const UtilContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const LoginButton = styled.button`
  margin: 0 1rem;
  width: 7rem;
  min-width: 7rem;
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
  width: auto;
  height: auto;
  cursor: pointer;
`

export const SearchIcon = styled.img`
  width: auto;
  height: auto;
`