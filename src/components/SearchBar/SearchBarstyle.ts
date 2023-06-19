import styled from 'styled-components';

export const SearchBarForm = styled.form`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 5.8rem;
	/* margin: 0 auto; */
	margin-top: 6.4rem;
	display: flex;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 3.5rem 0;
	border-radius: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.gray300};
`;

export const SearchBarInput = styled.input`
	margin-left: 2rem;
	box-sizing: border-box;
	width: 85rem;
	height: 5.8rem;
	border: none;
	outline: none;
	font-size: 2rem;
`;
export const SearchLogo = styled.img`
	margin-left: 2rem;
	width: 3rem;
	height: 4.4rem;
`;

export const SearchBarBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 4.5rem;
	padding: 3.5rem 0;
	width: 11.5rem;
	height: 5.8rem;
	background-color: #aacb73;
	border-radius: 1.2rem;
	color: white;
	font-weight: bold;
	border: none;
	cursor: pointer;
	font-size: 2rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.green300};
	}
`;
