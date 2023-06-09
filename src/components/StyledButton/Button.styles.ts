import styled, { css } from 'styled-components';

export interface ButtonProps {
	primary: boolean;
	size: 'small' | 'medium' | 'large';
	backgroundColor?: string;
	round?: boolean;
}
// green hover, green click, pink hover, pink click, gray hover, gray click
export const Button = styled.button<ButtonProps>`
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: ${({ theme }) => theme.typography.size.default};
	border: 0;
	border-radius: 0.5em;
	display: inline-block;
	cursor: pointer;

	${(props) =>
		props.primary &&
		css`
			background-color: ${({ theme }) => theme.colors.green200};
			color: ${({ theme }) => theme.colors.background};
		`}

	${(props) =>
		!props.primary &&
		css`
			background-color: ${({ theme }) => theme.colors.background};
			color: ${({ theme }) => theme.colors.text};
			border: 1px solid theme.color.gray300;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
		`}

	${(props) =>
		props.round &&
		css`
			border-radius: 0.9em;
		`}

  ${(props) =>
		props.size === 'small' &&
		css`
			height: 4.4rem;
		`}

	${(props) =>
		props.size === 'medium' &&
		css`
			width: 11.5rem;
			height: 4.5rem;
		`}

  ${(props) =>
		props.size === 'large' &&
		css`
			width: 45rem;
			height: 5.5rem;
			margin-top: 6rem;
		`}
`;
