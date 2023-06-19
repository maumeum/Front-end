import styled from 'styled-components';

export const SearchSection = styled.div`
	position: relative;
	margin: 0;
	padding: 0;
`;

export const VolunteerTitle = styled.h2`
	margin: 12rem 40rem 0;
	width: 50rem;
	font-size: 3rem;
	font-weight: 900;
`;

export const VolunteerContainer = styled.div`
	min-width: 112rem;
	margin: 4rem 40rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 2rem;
`;

export const CommunityTitle = styled.h2`
	margin: 6rem 40rem 4rem;
	width: 30rem;
	font-size: 3rem;
	font-weight: 900;
`;

export const CommunityContainer = styled.div`
	margin: 0 40rem;
	padding-bottom: 12rem;
	min-width: 112rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
	color: ${({ theme }) => theme.colors.green100};
`;

export const Arrow = styled.div`
	border: solid ${({ theme }) => theme.colors.green100};
	border-width: 0 10px 10px 0;
	display: inline-block;
	border-radius: 15%;
	padding: 1.8rem;
	transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	cursor: pointer;

	&:hover {
		border: solid ${({ theme }) => theme.colors.green300};
		border-width: 0 10px 10px 0;
	}
`;

export const MoreContent = styled.p`
	font-size: 1.3rem;
`;

export const NoSearchContainer = styled.div`
	min-height: 100rem;
`;

export const NoKeyword = styled.h2`
	margin: 20rem 0;
	text-align: center;
	font-size: 3rem;
	font-weight: 900;
	color: #888888;
`;
