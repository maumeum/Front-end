import styled from 'styled-components';

// MainPage 스켈레톤

export const SkeletonReviewSection = styled.div`
	display: flex;
	margin: 4rem 0;
	width: 100%;
	height: 25rem;
	background-color: ${(props) =>
		props.className === 'one'
			? '#ffffe8'
			: props.className === 'three'
			? '#daebb7'
			: '#FFFFFF'};
	color: ${({ theme }) => theme.colors.text};
	border: none;
	border-radius: 12px;
	word-break: keep-all;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
	cursor: pointer;
`;

export const SkeletonImage = styled.div`
	width: 35%;
	background-color: ${({ theme }) => theme.colors.gray300};
	border: none;
	border-radius: 12px 0 0 12px;
`;

export const SkeletonReviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 2.5% 2rem;
	width: 60%;
`;

export const Nickname = styled.p`
	margin-top: 0;
	padding: 0.5rem 1rem;
	max-width: 15%;
	min-height: 10%;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.gray200};
`;

export const SkeletonTitle = styled.div`
	width: 90%;
	min-height: 20%;
	background-color: ${({ theme }) => theme.colors.gray200};
	border-radius: 8px;
`;

export const ReviewContent = styled.p`
	max-width: 50%;
	padding: 0.5rem 1rem;
	min-height: 10%;
	background-color: ${({ theme }) => theme.colors.gray200};
	border-radius: 8px;
`;

export const SkeletonVolunteerSection = styled.div`
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

export const VolunteerImage = styled.div`
	width: 100%;
	aspect-ratio: 4/3;
	border: none;
	border-radius: 12px 12px 0 0;
	background-color: ${({ theme }) => theme.colors.gray300};
`;
