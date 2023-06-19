import styled, { css } from 'styled-components';

interface BarProps {
	modal: string | undefined;
}

export const TopBarBox = styled.div<BarProps>`
	width: 112rem;
	height: 13.2rem;
	background-color: #ffffe8;
	margin: 0 auto;
	margin-top: 13.5rem;
	display: flex;
	${(props) =>
		props.modal === 'modal' &&
		css`
			margin-top: 1rem;
			width: 100%;
		`}
`;
export const TextContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	margin-left: 4.7rem;
`;
export const Title = styled.p`
	font-size: 3.2rem;
	color: #666666;
	font-weight: bold;
`;
export const SubText = styled.p`
	font-size: 1.6rem;
	color: #666666;
	margin-top: -2rem;
	margin-bottom: 2rem;
`;
