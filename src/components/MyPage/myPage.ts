import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	top: 10rem;
	left: 15rem;
	font-size: 1.9rem;
	min-height: 1000px;
`;

export const MenuBar = styled.div`
	width: 10%;
	border-radius: 5px;
	border: 1px solid black;
`;

export const Main = styled.div`
	width: 70%;
	top: 12.5rem;
	padding: 3.5rem;
	margin-left: 2rem;
`;

export const TabMenu = styled.div`
	display: flex;
`;

export const CardBox = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 3rem;
	grid-row-gap: 2rem;
`;