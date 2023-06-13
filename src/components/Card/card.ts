import styled, { css } from 'styled-components';
import { TabTypes, VolunteerTypes } from '@src/types/myPageConstants';
import { hexToRgba } from '@utils/styleUtils.ts';

export interface CardProps {
	currTab?: string;
	statusName: string;
	applyCount?: string;
}

export const CardContainer = styled.div<CardProps>`
	display: flex;
	flex-direction: column;
	/* width: calc(100% - 0.3rem); */
	min-height: 42.9rem;
	border-radius: ${({ theme }) => theme.radius.s2};
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.background};
	flex-wrap: nowrap;
`;

export const ImgBox = styled.div`
	position: relative;
	img {
		width: 100%;
		height: 26.5rem;
		border-radius: ${({ theme }) => theme.radius.s1};
	}
`;

export const ContentBox = styled.div`
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

export const VolunInfo = styled.div`
	height: 100px;
	p {
		word-break: keep-all;

		font-size: 1.7rem;
		line-height: 2.4rem;
		letter-spacing: -0.1px;
		text-align: left;
		height: 40px;
	}
	p + p {
		position: absolute;
		font-weight: 500;
		font-size: 1.3rem;
		color: #999b9c;
	}
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	height: 0%;
	margin-top: 3rem;
	position: relative;

	img {
		width: 3.8rem;
		height: 3.8rem;
		border-radius: 50%;
	}

	img.verifyMark {
		width: 15px;
		height: 15px;
	}

	p {
		margin-left: 1rem;
		font-weight: 500;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
	}
`;

export const Badge = styled.div<CardProps>`
	background: linear-gradient(#f08b7a, var(--button--color));
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 1.7rem;
	position: absolute;
	width: 50px;
	height: 50px;
	left: 2rem;
	top: 2rem;
	border-radius: 50%;
	p {
		font-weight: bolder;
		word-break: normal;
		text-align: center;
	}
	${({ currTab }) =>
		currTab === TabTypes.VOLUNTEER_COMPLETED &&
		css`
			background: #53595b;
		`}
	${({ statusName }) =>
		(statusName === VolunteerTypes.COMPLETED ||
			statusName === VolunteerTypes.DISCONTINUE) &&
		css`
			background: #53595b;
		`}
`;

export const Button = styled.button`
	border: none;
	background-color: var(--button--color);
	color: #ffffff;
	height: 4.4rem;
	border-radius: 5%;
	cursor: pointer;
`;

export const ButtonContainer = styled.div`
	position: absolute;
	right: 0;
`;

export const SelectContainer = styled.div`
	position: absolute;
	right: 0;
`;

// Community Card
export const CommunityContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	height: 11rem;
	background-color: #ffffff;
	border: none;
	border-radius: 12px;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
	cursor: pointer;
`;

export const PostType = styled.div`
	width: 25%;
	text-align: center;
	color: #888888;
	font-size: 2.5rem;
`;

export const CommunityTitle = styled.p`
	margin: 0 6rem 0 3rem;
	font-size: 2rem;
`;

// Review Card
export const ReviewSection = styled.div`
	display: flex;
	margin: 4rem 0;
	width: 100%;
	height: 25rem;
	background-color: ${(props) =>
		props.className === 'one' ? '#daebb7' : '#FFFFFF'};
	border: none;
	border-radius: 12px;
	word-break: keep-all;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
	cursor: pointer;
`;

export const ImageContainer = styled.div`
	width: 32%;
	height: 100%;
	overflow: hidden;
`;

export const ReviewImage = styled.img`
	height: 100%;
	border: none;
	border-radius: 12px 0 0 12px;
`;

export const ReviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 3rem 2rem;
`;

export const ReviewTitle = styled.h2`
	font-size: 2rem;
`;

export const Nickname = styled.p`
	margin-top: 0;
	font-size: 1.4rem;
	color: #4a4a4a;
`;

export const ReviewContent = styled.p`
	font-size: 1.4rem;
	color: #4a4a4a;
`;

// volunteer card
export const VolunteerSection = styled.div`
	margin-bottom: 6rem;
	width: 100%;
	height: 37rem;
	background-color: #ffffff;
	border: none;
	border-radius: 12px;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
	word-break: keep-all;
	cursor: pointer;
`;

export const VolunteerImgContainer = styled.div`
	margin-bottom: 0;
`;

export const VolunteerImage = styled.img`
	width: 100%;
	aspect-ratio: 4/3;
	border: none;
	border-radius: 12px;
`;

export const RecruitStatus = styled.div`
	width: 25%;
	text-align: center;
	background-color: #202020;
	color: #ffffff;
	font-size: 1.2rem;
	border: none;
	border-radius: 0 4px 4px 4px;
`;

export const VolunteerIntroContainer = styled.div`
	margin: 1.5rem;
`;

export const VolunteerTitle = styled.h2`
	margin-bottom: 1.5rem;
	font-size: 1.7rem;
	font-weight: 800;
`;

export const VolunteerContent = styled.p`
	margin-top: 0;
	font-size: 1.3rem;
`;
// team card

export const TeamCardSection = styled.div`
	margin-bottom: 6rem;
	width: 30rem;
	height: 40rem;
	background-color: #ffffff;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
	border-radius: 12px;
	word-break: keep-all;
	cursor: pointer;
`;

export const TeamImageContainer = styled.div`
	margin: 2.5rem;
	overflow: hidden;
`;

export const TeamImage = styled.img`
	width: 100%;
	aspect-ratio: 1;
`;

export const TeamMainContainer = styled.div`
	margin: 0 2.5rem 2.5rem;
`;

export const TeamName = styled.div`
	font-size: 1.5rem;
	text-align: start;
`;

export const TeamDescContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const WriteDate = styled.p`
	font-size: 1.2rem;
	color: #d3d3d3;
`;

export const TeamUserNickname = styled.p`
	font-size: 1.2rem;
	color: #202020;
`;

export const TeamButtonContainer = styled.div`
	margin-bottom: 3rem;
	display: flex;
	justify-content: center;
`;

export const AcceptButton = styled.button`
	margin-right: 1.5rem;
	width: 5rem;
	height: 3rem;
	border-radius: 6px;
	border: none;
	background-color: #aacb73;
	font-size: 1.2rem;
	cursor: pointer;
`;

export const RefuseButton = styled.button`
	width: 5rem;
	height: 3rem;
	border-radius: 6px;
	border: none;
	background-color: #ffd4d4;
	font-size: 1.2rem;
	cursor: pointer;
`;

export const VolunteerBadge = styled(Badge)`
	background: ${hexToRgba('#FF5A72', 0.8)};

	${({ statusName }) =>
		(statusName === VolunteerTypes.COMPLETED ||
			statusName === VolunteerTypes.DISCONTINUE) &&
		css`
			background: ${hexToRgba('#202020', 0.8)};
		`}
`;

export const Label = styled.div`
	background: ${hexToRgba('#202020', 0.8)};
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 3rem;
	width: 16rem;
	left: 0.2;
	bottom: 0;
	border-radius: ${({ theme }) => theme.radius.s1};

	img {
		margin-left: 0.5rem;
		width: 2rem;
		height: 2rem;
	}

	p {
		text-align: left;
		margin-left: 1rem;
		color: ${({ theme }) => theme.colors.background};
		font-size: ${({ theme }) => theme.typography.size.subparagraph};
		word-break: normal;
	}
`;

export const TitleInfo = styled.h2`
	font-size: ${({ theme }) => theme.typography.size.subtitle};
	line-height: 120%;
	margin-top: 2rem;
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.colors.text};
`;

export const InfoBox = styled.div`
	font-size: 0.875rem;
	line-height: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	b {
		text-align: right;
		margin-left: 0.5rem;
		font-size: ${({ theme }) => theme.typography.size.default};
		font-weight: ${({ theme }) => theme.typography.weight.bold};
		color: ${({ theme }) => theme.colors.highlight};
	}
`;

export const VolunteerUserInfo = styled(UserInfo)`
	margin-top: 0;
	margin-right: 0.5rem;
`;
