import styled, { css } from 'styled-components';

export interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	isFull?: boolean;
}

export const Button = styled.button<ButtonProps>`
	font-family: 'KakaoBig Regular', 'Apple SD Gothic Neo', Arial, sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: 0.5em;
	cursor: pointer;
	display: inline-block;
	line-height: 1;

	${props =>
		props.isFull &&
		css`
			width: '100%';
		`}

	${props =>
		!props.isFull &&
		css`
			width: 'auto';
		`}

  ${props =>
		props.primary &&
		css`
			color: #ffffff;
			background-color: #aacb73;
		`}

  ${props =>
		!props.primary &&
		css`
			color: #202020;
			background-color: transparent;
			border: 1px solid #cccccc;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
		`}

  ${props =>
		props.size === 'small' &&
		css`
			font-size: 12px;
			padding: 10px 16px;
		`}

  ${props =>
		props.size === 'medium' &&
		css`
			font-size: 14px;
			padding: 11px 20px;
		`}

  ${props =>
		props.size === 'large' &&
		css`
			font-size: 16px;
			padding: 12px 24px;
		`}
`;
