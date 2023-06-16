import styled from 'styled-components';

export const OptionColor = styled.option`
	color: ${({ theme }) => theme.colors.green200};
	border: none;
	&:hover {
		background-color: ${({ theme }) => theme.colors.green200};
	}
`;

export const SelectColor = styled.select`
	border: none;
	color: ${({ theme }) => theme.colors.green200};
	z-index: 1;
`;

export const OptionColorLarge = styled.option`
	height: 4rem;
	width: 16rem;
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: 2.6rem;
	color: ${({ theme }) => theme.colors.green200};
	border: none;
	&:hover {
		background-color: ${({ theme }) => theme.colors.green200};
	}
`;

export const SelectColorLarge = styled.select`
	height: 4rem;
	width: 16rem;
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: 2.6rem;
	border: none;
	color: ${({ theme }) => theme.colors.green200};
	z-index: 1;
`;
