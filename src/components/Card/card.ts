import styled, { css } from 'styled-components';

interface CardProps {
	currTab: string;
}

export const CardContainer = styled.div<CardProps>`
	display: flex;
	flex-direction: column;
	width: calc(100% - 0.5rem);
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
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

export const VolunInfo = styled.div`
	height: 100px;

	p {
		word-break: keep-all;
		font-family: 'KakaoBig Regular', 'Apple SD Gothic Neo';
		font-size: 1.7rem;
		line-height: 2.4rem;
		letter-spacing: -0.1px;
		text-align: left;
		height: 40px;
	}
	p + p {
		position: absolute;
		font-weight: 500;
		font-size: 1.3rem;
		color: #999b9c;
	}
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	height: 0%;
	margin-top: 1.5rem;
	position: relative;

	img {
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
	}

	p {
		margin-left: 1rem;
		font-weight: 500;
		font-size: 1.5rem;
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
	width: 50px;
	height: 50px;
	left: 2rem;
	top: 2rem;
	border-radius: 50%;
	p {
		font-weight: bolder;
		word-break: normal;
		text-align: center;
	}
	${({ currTab }) =>
		currTab === '완료한 봉사' &&
		css`
			background: #53595b;
		`}
`;

export const Button = styled.button`
	border: none;
	background-color: var(--button--color);
	color: #ffffff;
	height: 4.4rem;
	border-radius: 5%;
	cursor: pointer;
`;

export const ButtonContainer = styled.div`
	position: absolute;
	right: 0;
`;

export const SelectContainer = styled.div`
	position: absolute;
	right: 0;
`;
