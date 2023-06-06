import styled from 'styled-components';

export const ImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1.4rem;
	text-align: center;
	width: 100%;

	label {
		display: inline-block;
		padding: 8px 16px;
		background-color: var(--color--footer);
		color: #ffffff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-bottom: 1rem;
	}

	input {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
	}
`;

export const ImgPreview = styled.div`
	width: 24rem;
	height: 24rem;
	margin-bottom: 2rem;

	img {
		width: 24rem;
		height: 24rem;
		border-radius: 50%;
	}
`;

export const InputConatiner = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-evenly;

	button {
		width: 11rem;
		height: 3.5rem;
		border: none;
		border-radius: 5%;
		background-color: var(--button--color);
		color: #ffffff;

		cursor: pointer;
	}
	button + button {
		margin-left: 2rem;
	}
`;
