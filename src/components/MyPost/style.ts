import styled, { css } from 'styled-components';

export const PostListContainer = styled.div`
  border-radius: 10px;
`;

export const PostBox = styled.div`
  padding: 1rem;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 3rem;
`;

export const Title = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Description = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Date = styled.p``;

export const PostInfo = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  p {
    color: #666666;
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
  p + p {
    margin-left: 2rem;
  }
`;
