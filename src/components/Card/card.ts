import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 34.5rem;
  min-height: 44.9rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border: 1px solid #d3d0d0;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
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
  width: 100%;
  font-weight: bold;
  padding: 1rem;
  box-sizing: border-box;
  p {
    margin-left: 1rem;
    margin-top: 1rem;
    word-break: keep-all;
    font-family: 'KakaoBig Regular', 'Apple SD Gothic Neo';
    font-size: 2.2rem;
    line-height: 2.4rem;
    letter-spacing: -0.1px;
    text-align: left;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 2.3rem;
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: 0 0.3rem 0 1rem;
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.4rem;
  }
`;

export const Badge = styled.div`
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
  }
`;
