import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 112rem;
	margin: 0 auto;
	margin-top: 10rem;

	p {
		font-size: 6rem;
		line-height: 2rem;
		color: ${({ theme }) => theme.colors.green100};
	}
`;
export const Descript = styled.span`
	font-size: 3rem;
	color: black;
	margin-top: 10rem;
	background-color: ${({ theme }) => theme.colors.green100};
`;
export const MiddleContainer = styled.div`
	position: relative;
	margin-bottom: 70rem;
`;
export const FirstCircle = styled.div`
	width: 70rem;
	background-color: ${({ theme }) => theme.colors.yellow100};
	height: 40rem;
	border-radius: 30rem;
	position: absolute;
	top: 20rem;
	left: 20rem;
	transform: rotate(45deg);
	z-index: -99;
`;
export const ImgCircle = styled.div`
	width: 40rem;
	height: 40rem;
	background-color: black;
	overflow: hidden;
	border-radius: 50%;
	z-index: 9999;
	position: absolute;
	top: 25rem;
	left: 60rem;
`;
export const Image = styled.img`
	width: 100%;
	margin-top: -10rem;
`;
export const SecondCircle = styled.div`
	width: 50rem;
	background-color: ${({ theme }) => theme.colors.pink100};
	height: 40rem;
	border-radius: 30rem;
	position: absolute;
	top: 20rem;
	left: 90rem;
	transform: rotate(-45deg);
	z-index: -99;
`;
export const ImgCircle2 = styled.div`
	width: 40rem;
	height: 40rem;
	background-color: black;
	overflow: hidden;
	border-radius: 50%;
	z-index: 9999;
	position: absolute;
	top: 25rem;
	left: 125rem;
`;
export const Image2 = styled.img`
	width: 160%;
	margin-top: -3rem;
`;
