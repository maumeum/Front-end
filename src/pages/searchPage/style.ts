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
	height: 89rem;
	display: grid;
	grid-template-rows: repeat(6, 1fr);
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

export const KeywordContainer = styled.div`
	margin: 12rem 40rem;
	min-width: 112rem;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	column-gap: 3rem;
	row-gap: 5rem;
`;

export const KeywordBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	aspect-ratio: 1;
	border-radius: 50%;
	border: 2px solid black;
`;
