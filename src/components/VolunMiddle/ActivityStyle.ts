import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 10rem;
	margin-bottom: 20rem;
`;
export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
`;
export const Square = styled.div`
	width: 1rem;
	height: 4rem;
	background-color: ${({ theme }) => theme.colors.green100};
	margin-right: 2rem;
`;
export const Title = styled.p`
	font-size: 3rem;
`;
export const ImgContainer = styled.div`
	width: 100%;
	height: auto;
	margin-top: 10rem;
`;
export const Image = styled.img`
	width: 100%;
`;
export const ContentsContainer = styled.div`
	width: 112rem;
	height: auto;
	margin-top: 10rem;
`;
export const Content = styled.p`
	font-size: 2rem;
`;
