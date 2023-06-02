import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	width: 112rem;
	margin-bottom: 20rem;
`;
export const TitleInput = styled.input`
	width: 112rem;
	margin: 0 auto;
	border: none;
	margin-bottom: 8rem;
	font-size: 3.5rem;
	font-weight: 600;
	color: #a7a7a7;
`;
export const TextContainer = styled.div`
	margin-bottom: 10rem;
`;
export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-left: auto;
`;
export const CancelButton = styled.button`
	width: 9rem;
	height: 5rem;
	background-color: white;
	border: 0.2rem solid #888888;
	border-radius: 1.2rem;
	cursor: pointer;
`;
export const SubmitButton = styled.button`
	width: 9rem;
	height: 5rem;
	background-color: #aacb73;
	border: none;
	border-radius: 1.2rem;
	cursor: pointer;
`;
