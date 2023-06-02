import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
`;

export const MainContainer = styled.div`
  max-width: 549px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const MainTitle = styled.div`
  margin-top: 25rem;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const InputText = styled.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Input = styled.div`
  margin-top: 5rem;
`;

export const Button = styled.button`
  &:hover {
    background-color: #aacb73;
    color: white;
  }
  width: 549px;
  height: 58.21px;
  border: none;
  border-radius: 14px;
  background-color: #8bb743;

  color: white;
  font-size: 20px;
  margin-top: 5rem;
`;

export const InputText1 = styled.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const InputBox = styled.input`
  width: 549px;
  height: 58.21px;
  border-radius: 14px;
  padding: 2px 7px;
  font-size: 26px;
`;

export const Main = styled.div`
  background: white;
`;
