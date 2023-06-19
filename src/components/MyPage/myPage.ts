import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	position: relative;
	margin: 0;
	padding: 0;
	margin-left: 15rem;
	min-height: 100rem;
`;

export const MenuBar = styled.div`
	width: 10%;
	min-width: 15.7rem;
	border-radius: 5px;
	margin: 15.5rem 0 0 10rem;
	top: 9.8rem;
`;

export const Main = styled.div`
	width: 70%;
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

// my-page 버튼

export const ButtonContainer = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 7.5rem;
	aspect-ratio: 2;
	border-radius: 1.7rem;
	border: 1px solid rgb(204, 204, 204);
	background-color: #ffffff;
	box-sizing: border-box;
	font-size: 1.2rem;
	text-decoration: none;
	cursor: pointer;
`;

export const ButtonWord = styled.p`
	margin: 0;
	color: black;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000000;
`;
