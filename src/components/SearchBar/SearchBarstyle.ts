import styled from 'styled-components';

export const SearchBarContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 5.8rem;
	/* margin: 0 auto; */
	margin-top: 6.4rem;
	display: flex;
`;
export const SearchBarForm = styled.form``;
export const SearchBarInput = styled.input`
	box-sizing: border-box;
	border: 1px solid #cecdcd;
	width: 85rem;
	height: 5.8rem;
	border-radius: 1rem;
	padding-left: 9.8rem;
	font-size: 2rem;
`;
export const SearchLogo = styled.img`
	width: 3rem;
	height: 4.4rem;
	position: absolute;
	top: 50%;
	left: 1rem;
	transform: translateY(-50%);
`;

export const SearchBarBtn = styled.button`
	margin-left: 4.5rem;
	width: 11.5rem;
	height: 5.8rem;
	background-color: #aacb73;
	border-radius: 1.2rem;
	padding: 0.5rem 1rem;
	color: white;
	font-weight: bold;
	border: none;
	cursor: pointer;
	font-size: 2rem;
`;
