import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	margin-top: 10rem;
`;
export const TopArea = styled.div`
	width: 112rem;
	height: 18rem;
	background: #ffffe8;
	display: flex;
`;
export const Cover = styled.div`
	margin: 3.5rem 0 3.5rem 7.5rem;
	display: flex;
`;
export const ImgContainer = styled.div`
	width: 11rem;
	height: 11rem;
	border-radius: 50%;
	overflow: hidden;
`;
export const Img = styled.img`
	width: auto;
	height: 100%;
`;
export const TextContainer = styled.div`
	margin-left: 4.3rem;
`;
export const Team = styled.p`
	font-size: 2rem;
`;
export const DivideContent = styled.div`
	margin-bottom: 10rem;
`;
export const TeamName = styled.p`
	font-size: 3rem;
	margin-top: -2rem;
`;
export const TextArea = styled.div`
	margin-top: 5rem;
`;
export const TextCover = styled.div`
	display: flex;
	align-items: center;
`;
export const Square = styled.div`
	width: 1rem;
	height: 4rem;
	background-color: ${({ theme }) => theme.colors.green100};
	margin-right: 2rem;
`;
export const SubTitle = styled.p`
	font-size: 3rem;
	margin-right: 3rem;
`;
export const Content = styled.p`
	font-size: 2rem;
`;
export const BottomContainer = styled.div`
	display: flex;
	align-items: center;
`;
