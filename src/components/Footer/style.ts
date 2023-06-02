import styled from "styled-components";

export const FooterSection = styled.div`
  position: relative;
  height: 25rem;
  background-color: var(--color--footer);
  border: none;
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 112rem;
  margin: 0 40rem;
`

export const LogoContainer = styled.div`
  margin-top: 4.6rem;
  width: 10rem;
  height: rem;
`

export const MainLogo = styled.img`
  width: 10rem;
  height: 10rem;
`

export const SloganContainer = styled.div`
  margin-top: 5.8rem;
`
export const Slogan = styled.p`
  text-align: end;
  font-size: 1.4rem;
`

export const MemberList = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 1.2rem;
`

export const Member = styled.li`
  margin: 0 0 0 2rem;
`

export const GitLink = styled.a`
  text-decoration: none;
  color: #444444;
`