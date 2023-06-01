import styled, { css } from 'styled-components';

export const PostListContainer = styled.div`
	border-radius: 10px;
`;

export const PostBox = styled.div`
	width: 85%;
	padding: 3rem;
	border: 1px solid #e6e6e6;
	border-radius: 10px;
	margin-bottom: 3rem;
`;

export const Title = styled.p`
	font-family: kakaoBig;
	font-size: 2rem;
	font-weight: 700;
	line-height: 29px;
	letter-spacing: 0em;
	text-align: left;
`;

export const Description = styled.div`
	margin: 0;
	font-family: kakaoReg;
	word-break: keep-all;
	font-size: 1.6rem;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
`;

export const PostInfo = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	p {
		color: #666666;
		font-family: kakaoReg;
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 18px;
		letter-spacing: 0em;
		text-align: left;
	}
	p + p {
		margin-left: 2rem;
	}
`;

export const ButtonContainer = styled.div`
	position: absolute;
	right: 0;
	margin-right: 4rem;
	button + button {
		margin-left: 2rem;
	}
`;