import styled from 'styled-components';

export const CustomHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	height: 100%;
	margin-top: 1rem;
	padding: 1rem;
`;

export const Month = styled.span`
	width: 9rem;
	font-size: 1.6rem;
	font-weight: 500;
`;

export const Year = styled.select`
	background-color: #ffffff;
	color: #000000;
	border: none;
	font-size: 1.6rem;
	font-weight: 500;
	padding-right: 5px;
	cursor: pointer;
`;

export const MonthButton = styled.button`
	margin: auto 1rem;
	width: 3rem;
	height: 3rem;
	font-size: 1.6rem;
	color: #ffffff;
	background-color: var(--button--color);
	border: none;
	border-radius: 8px;

	cursor: pointer;
`;

export const CalenderWrapper = styled.div`
	background-color: #ffffff;
	color: #000000;
`;
