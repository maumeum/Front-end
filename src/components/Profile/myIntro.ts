import styled from 'styled-components';

export const FormContainer = styled.div`
	min-height: 50rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const IntroContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	border: none;

	textarea {
		/* width: 95%; */
		margin: 1rem auto;
		padding: 16px 18px;
	}
`;

export const IntroBox = styled.textarea`
	width: 66.5rem;
	min-height: 35rem;
	display: block;
	border: 1px solid #ccc;
	border-radius: 3%;
	padding: 3rem;
	margin-right: 1rem;

	&::placeholder {
		position: relative;
		top: 15px;
		left: 4px;
		font-size: 14px;
	}
`;

export const FormBtn = styled.button`
	height: 5rem;
	width: 17rem;
	border-radius: 13px;
	border: none;
	background-color: var(--button--color);
	color: #ffffff;
	margin: 4rem 0 3rem 0;
	cursor: pointer;
	display: block;
`;

export const CheckLength = styled.div`
	display: block;
`;

export const ImageLabel = styled.label`
	display: flex;
	align-items: center;
	margin-bottom: 3rem;
	font-size: 2rem;
	color: #888888;
`;

export const ImageInput = styled.input`
	cursor: pointer;
`;
