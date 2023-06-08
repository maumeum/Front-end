import { createGlobalStyle } from 'styled-components';
import Font from '../assets/fonts/KakaoBig-normal-400-100_1.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'Kakao';
    src: local('Kakao'), url(${Font}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
