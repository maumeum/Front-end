import styled from 'styled-components';

export const KeywordContainer = styled.div`
	margin: 12rem 40rem;
	min-width: 112rem;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	column-gap: 3rem;
	row-gap: 5rem;
`;

export const KeywordBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	aspect-ratio: 1;
	border-radius: 50%;
	border: none;
	font-size: 2rem;
	background-color: #cde990;
	color: #444444;
`;
