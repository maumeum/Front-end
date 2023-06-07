import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	position: relative;
	margin: 0;
	padding: 0;
`;

export const MenuBar = styled.div`
	width: 10%;
	border-radius: 5px;
	margin: 15.5rem 0 0 10rem;
	top: 9.8rem;
`;

export const Main = styled.div`
	width: 65%;
	margin-top: 5rem;
	padding: 3.5rem;
	margin-left: 5rem;
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

export const ButtonContainer = styled(NavLink)`
	width: 3rem;
	aspect-ratio: 1;
`;

export const Image = styled.img`
	width: 100%;
	aspect-ratio: 1;
	border-radius: 50%;
`;
