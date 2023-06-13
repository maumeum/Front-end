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
		maxHeight: '80vh',
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

// TeamModal
export const MainContainer = styled.div``;

export const TopContainer = styled.div`
	display: flex;
`;

export const MainTitle = styled.h1`
	font-size: 2.5rem;
`;

export const Title = styled.h1`
	font-size: 2rem;
`;

export const TeamLogo = styled.img`
	width: 50%;
	aspect-ratio: 1;
`;

export const DescContainer = styled.div`
	width: 35%;
	margin-left: 5rem;
	border-top: 3px solid var(--button--color);
	font-size: 1.3rem;
	font-weight: 400;
	color: #888888;
`;

export const Desc = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	color: #000000;
`;

export const RemainContainer = styled.div`
	margin: 2rem auto 3rem;
`;

export const RemainDesc = styled.div`
	font-size: 1.3rem;
`;
