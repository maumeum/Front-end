import styled from "styled-components";

export const MainSection = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #F7F7F7;
`

export const TopSlogan = styled.h2`
  margin: 0 40rem;
  padding-top: 6rem;
  width: 30rem;
  font-size: 2.6rem;
  font-weight: 700;
`
export const TopContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 40rem;
`

export const ReviewContainer = styled.div`

`

export const IntroducePage = styled.div`
  margin: 4rem 0 4rem 4.5rem;
  width: 36rem;
  height: 54rem;
  background-color: #FFFFFF;
  border: none;
  border-radius: 12px;
  box-sizing: border-box;
  filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
`

export const IntroduceTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 36rem;
  height: 25rem;
  background-color: var(--color--footer);
  border: none;
  border-radius: 12px 12px 0 0;
  box-sizing: border-box;
`

export const MainTitle = styled.h2`
  margin: 3rem 3rem auto 2.5rem;
  font-size: 1.8rem;
  font-weight: bold;
`

export const IntroImg = styled.img`
  margin: 1.5rem 2.5rem auto 0;
  width: 5.5rem;
  height: 7.5rem;
`

export const IntroduceDesc = styled.div`
  height: 29rem;
  color: #4A4A4A;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 6.5rem 0 2rem 2.5rem;
`

export const Desc = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 170%;
  margin: 0 2.5rem auto 2.5rem;
`

export const MidSlogan = styled.h2`
  margin: 12rem 40rem 0;
  width: 50rem;
  font-size: 3rem;
  font-weight: 900;
`

export const VolunteerContainer = styled.div`
  min-width: 112rem;
  margin: 4rem 40rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const CommunityTitle = styled.h2`
  margin: 6rem 40rem 4rem;
  width: 30rem;
  font-size: 3rem;
  font-weight: 900;
`

export const CommunityContainer = styled.div`
  margin: 0 40rem;
  padding-bottom: 12rem;
  min-width: 112rem;
  height: 89rem;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`
