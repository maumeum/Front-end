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
	font-family: kakaoBig;
	font-size: 24px;
	font-weight: 700;
	line-height: 29px;
	letter-spacing: 0em;
	text-align: left;
`;

export const Description = styled.div`
	margin: 0;
	font-family: kakaoReg;
	font-size: 18px;
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

export const ButtonContainer = styled.div`
	position: absolute;
	right: 0;
	margin-right: 4rem;
	button + button {
		margin-left: 2rem;
	}
`;
