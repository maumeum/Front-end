import styled from 'styled-components';

export const BtnConatiner = styled.div`
	display: flex;
	justify-content: center;
`;

export const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		margin: 'auto',
		transform: 'translate(-50%, -50%)',
		width: '73rem',
		maxHeight: '70vh',
	},
};

export const TitleInput = styled.input`
	height: 1.8rem;
	margin-top: 2rem;
	width: 95%;
	border-radius: 8px;
	padding: 16px 18px 16px 18px;
	border: 1px solid #e3e5e8;
`;
