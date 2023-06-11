import styled, { css } from 'styled-components';

export interface ButtonProps {
	colorType: 'green' | 'white' | 'pink' | 'gray';
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
		props.colorType === 'green' &&
		css`
			background-color: ${({ theme }) => theme.colors.green200};
			color: ${({ theme }) => theme.colors.background};

			&:hover {
				background-color: ${({ theme }) => theme.colors.green100};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.green300};
			}
		`}

	${(props) =>
		props.colorType === 'white' &&
		css`
			background-color: ${({ theme }) => theme.colors.background};
			color: ${({ theme }) => theme.colors.text};
			border: 1px solid theme.color.gray300;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;

			&:active {
				background-color: ${({ theme }) => theme.colors.gray100};
			}
		`}

	${(props) =>
		props.colorType === 'pink' &&
		css`
			background-color: ${({ theme }) => theme.colors.pink200};
			color: ${({ theme }) => theme.colors.text};

			&:hover {
				background-color: ${({ theme }) => theme.colors.pink100};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.pink300};
			}
		`}

${(props) =>
		props.colorType === 'gray' &&
		css`
			background-color: ${({ theme }) => theme.colors.gray300};
			color: ${({ theme }) => theme.colors.text};

			&:hover {
				background-color: ${({ theme }) => theme.colors.gray200};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.gray400};
			}
		`}

	${(props) =>
		props.round &&
		css`
			border-radius: 0.9em;
		`}

  ${(props) =>
		props.size === 'small' &&
		css`
			width: 11.5rem;
			height: 4.5rem;
		`}

	${(props) =>
		props.size === 'medium' &&
		css`
			width: 20rem;
			height: 5rem;
		`}

  ${(props) =>
		props.size === 'large' &&
		css`
			width: 45rem;
			height: 5.5rem;
			margin-top: 6rem;
		`}
`;
