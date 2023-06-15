import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 3.6rem;
`;

export const IntroContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 111.2rem;
	height: 44.5rem;
`;

export const ImgContainer = styled.div`
	width: 40rem;
	height: 48rem;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 100%;
		height: 40rem;
	}
`;

export const TeamInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 8rem;
`;

export const ButtonContainer = styled.div`
	margin-top: 3rem;
`;

export const Line = styled.div`
	width: 100%;
	height: 7px;
	border-radius: 5%;
	background: linear-gradient(to right, #f08b7a, var(--button--color));
`;

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: #afcd81;
`;

export const InfoBox = styled.div`
	background-color: #f5f5f4;
	border-radius: 5%;
	margin-top: 5%;
	padding: 2rem;
	p {
		font-size: 1.5rem;
	}
`;

export const ApplyBox = styled.div`
	display: flex;
	align-items: center;
	img {
		margin-right: 5px;
	}
`;
