import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 28.5rem;
  min-height: 39.9rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border: 1px solid #d3d0d0;
  border-radius: 8px;
`;

export const ImgBox = styled.div`
  img {
    width: 100%;
    height: 26.5rem;
    border-radius: 5px;
  }
`;

export const ContentBox = styled.div`
  width: 19.7rem;
  p {
    margin-left: 1rem;
    word-break: keep-all;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.4rem;
    letter-spacing: -0.1px;
    text-align: left;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    margin: 0 1rem 0 1rem;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.4rem;
  }
`;
