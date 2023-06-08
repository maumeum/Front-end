import styled from 'styled-components';

export const TeamCardContainer = styled.div`
	margin: 8rem 46rem;
	display: grid;
	min-width: 102.4rem;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 4rem;
`;

export const TopBarContainer = styled.div`
	width: 112rem;
	margin: 0 auto;
	margin-top: 6.4rem;
`;

export const TopBar = styled.div`
	width: 10%;
	text-align: center;
	padding: 2rem 1rem;
	border-bottom: 1px solid #aacb73;
	font-size: 1.5rem;
	color: #aacb73;
`;

export const MenuBar = styled.div`
	position: absolute;
	width: 10%;
	border-radius: 5px;
	margin: 15.5rem 0 0 10rem;
	top: 5.5rem;
`;
