import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	left: 45px;
	margin-bottom: 5rem;

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

		&.clicked {
			border-bottom: 2px solid #afcd81;
		}
	}
`;
