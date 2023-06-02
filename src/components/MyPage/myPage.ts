import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	margin: 0;
	padding: 0;
`;

export const MenuBar = styled.div`
	width: 10%;
	border-radius: 5px;
	margin: 17.5rem 0 0 10rem;
	/* top: 7.8rem; */
`;

export const Main = styled.div`
	width: 70%;
	margin-top: 7.5rem;
	padding: 3.5rem;
	margin-left: 5rem;
	margin-right: 27rem;
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
