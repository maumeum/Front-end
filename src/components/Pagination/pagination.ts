import styled from 'styled-components';

export const StyledPagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		display: block;
		margin-right: 5rem;
		padding: 5px;
		cursor: pointer;
		font-size: 15px;
		&:hover {
			color: #afcd81;
		}
	}
`;
