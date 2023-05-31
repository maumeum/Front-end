import styled, { css } from 'styled-components';

interface CardProps {
  currTab: string;
}

export const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 34.5rem;
  min-height: 42.9rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  flex-wrap: nowrap;
`;

export const ImgBox = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 26.5rem;
    border-radius: 5px;
  }
`;

export const ContentBox = styled.div`
  font-weight: bold;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  p {
    word-break: keep-all;
    font-family: 'KakaoBig Regular', 'Apple SD Gothic Neo';
    font-size: 2.2rem;
    line-height: 2.4rem;
    letter-spacing: -0.1px;
    text-align: left;
    height: 70%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 30%;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: 0 1rem 0 1rem;
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Badge = styled.div<CardProps>`
  background: linear-gradient(#f08b7a, var(--button--color));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.7rem;
  position: absolute;
  width: 44px;
  height: 44px;
  left: 1.8rem;
  top: 2rem;
  border-radius: 50%;
  p {
    font-weight: bolder;
    word-break: normal;
  }
  ${({ currTab }) =>
    currTab === '완료한 봉사' &&
    css`
      background: linear-gradient(#000000, #ffffff);
    `}
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  border: none;
  background-color: var(--color--footer);
  height: 4.4rem;
  border-radius: 5%;
`;