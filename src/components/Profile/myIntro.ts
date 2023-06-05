import styled from 'styled-components';

export const IntroContainer = styled.div`
	border: none;
	position: relative;
	width: 50%;
`;

export const IntroBox = styled.textarea`
	width: 55rem;
	min-height: 35rem;
	display: flex;
	flex-direction: column;
	border: 1px solid #ccc;
	border-radius: 10%;
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
	position: absolute;
	right: 8rem;
	border-radius: 13px;
	border: none;
	background-color: var(--button--color);
	color: #ffffff;
	margin: 4rem 0 3rem 0;
	cursor: pointer;
`;

export const CheckLength = styled.div`
	margin: 1rem 0 2rem 0;
	position: absolute;
	right: 10rem;
`;
