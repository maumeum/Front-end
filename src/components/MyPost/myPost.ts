import styled from 'styled-components';

interface PostProps {
	isCommunity?: boolean;
}

export const PostListContainer = styled.div`
	border-radius: 10px;
`;

export const PostBox = styled.div<PostProps>`
	width: 80%;
	width: ${({ isCommunity }) => (isCommunity ? '75%' : '80%')};
	padding: 3rem;
	border: 1px solid #e6e6e6;
	border-radius: 10px;
	margin-bottom: 3rem;
	&:hover {
		box-shadow: 0 4px 6px rgba(0.1, 0.1, 0.1, 0.1);
	}
`;

export const Title = styled.p`
	padding: 4px;
	font-family: kakaoBig;
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: 0em;
	text-align: left;
	border-bottom: 3px solid #afcd81;
`;

export const Description = styled.div`
	margin: 0;
	padding: 4px;
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
