import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	left: -20px;

	button {
		margin-top: 2rem;
		border: none;
		background-color: white;
		cursor: pointer;
		color: #afcd81;
		font-size: 16px;
		&:hover {
			color: #ffd4d4;
		}
	}
`;
