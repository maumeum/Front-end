import styled from 'styled-components';

export const MainSection = styled.div`
	position: relative;
	margin: 0;
	padding-bottom: 2rem;
	background-color: #f7f7f7;
`;

export const TopSlogan = styled.h2`
	margin: 0 40rem;
	padding-top: 6rem;
	width: 30rem;
	min-height: 8rem;
	font-size: 2.6rem;
	font-weight: 700;
`;

export const TopContainer = styled.div`
	display: flex;
	flex: 1;
	min-width: 112rem;
	justify-content: space-between;
	margin: 0 40rem;
`;

export const ReviewContainer = styled.div`
	width: 60%;
`;

export const IntroduceContainer = styled.div`
	width: 35%;
`;

export const IntroducePage = styled.div`
	margin: 4rem 0;
	width: 100%;
	height: 54rem;
	background-color: ${({ theme }) => theme.colors.background};
	border: none;
	border-radius: 12px;
	box-sizing: border-box;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
`;

export const IntroduceTitle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 50%;
	background-color: var(--color--footer);
	border: none;
	border-radius: 12px 12px 0 0;
	overflow: hidden;
	box-sizing: border-box;
`;

export const MainTitle = styled.h2`
	margin: 3rem 3rem auto 2.5rem;
	font-size: 1.8rem;
	font-weight: bold;
`;

export const IntroImg = styled.img`
	align-self: end;
	margin: auto 1rem 5rem auto;
	width: 55%;
`;

export const IntroduceDesc = styled.div`
	height: 29rem;
	color: #4a4a4a;
`;

export const Title = styled.h2`
	font-size: 2rem;
	font-weight: 400;
	margin: 6.5rem 0 2rem 2.5rem;
`;

export const Desc = styled.p`
	font-size: 1.3rem;
	font-weight: 400;
	line-height: 170%;
	margin: 0 2.5rem auto 2.5rem;
`;

export const MidSlogan = styled.h2`
	margin: 5rem 40rem 0;
	width: 50rem;
	min-height: 8rem;
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
	margin: 4rem 0;
	width: 100%;
	height: 54rem;
	background-color: ${({ theme }) => theme.colors.background};
	border: none;
	border-radius: 12px;
	box-sizing: border-box;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
`;

export const SecIntroduceTitle = styled.div`
	display: flex;
	width: 100%;
	height: 50%;
	background-color: ${({ theme }) => theme.colors.yellow100};
	border: none;
	border-radius: 12px 12px 0 0;
	overflow: hidden;
	box-sizing: border-box;
	z-index: 5;
`;

export const MainImageContainer = styled.img``;

export const WebName = styled.div`
	position: absolute;
	top: 3%;
	left: 65%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 30%;
	aspect-ratio: 1;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.pink200};
	color: ${({ theme }) => theme.colors.gray600};
	font-size: 2rem;
	font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
