import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	width: 112rem;
	margin-bottom: 20rem;
`;
export const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const LayoutContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const LayoutChildContainer = styled.div`
	display: flex;
	flex-direction: column;
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

export const ContentInput = styled.textarea`
	width: 112rem;
	margin: 0 auto;
	height: 100rem;
	border: 1px solid gray;
	font-size: 2.5rem;
	padding: 2rem;
`;
export const TextContainer = styled.div`
	margin-bottom: 10rem;
`;
export const TextLength = styled.p`
	margin-left: auto;
	font-size: 2rem;
	margin-top: -9rem;
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
export const ImageArea = styled.label`
	display: inline-block;
	padding: 8px 16px;
	text-align: center;
	background-color: var(--color--footer);
	color: black;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	width: 20rem;
	font-size: 2rem;
	margin-top: -10rem;

	input {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
	}
`;
