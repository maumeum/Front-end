import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { TeamType } from '@src/types/cardType';

import {
	TeamCardSection,
	TeamImageContainer,
	TeamImage,
	TeamMainContainer,
	TeamName,
	TeamDescContainer,
	WriteDate,
	TeamUserNickname,
} from './card';
import teamData from '@src/assets/datas/teamData';

interface TeamCardProps {
	teamData: TeamType;
	onClick: () => void;
}

const TeamCard = ({ teamData, onClick }: TeamCardProps) => {
	const image = `http://localhost:5002/${teamData.image}`;

	const date = dayjs(teamData.createdAt)
		.locale('ko')
		.format('YYYY년 MM월 DD일');
	return (
		<TeamCardSection onClick={onClick}>
			<TeamImageContainer>
				<TeamImage src={image} alt='volunteerLogo' />
			</TeamImageContainer>
			<TeamMainContainer>
				<TeamName>{`[${teamData.category}] ${teamData.teamName}`}</TeamName>
				<TeamDescContainer>
					<WriteDate>{date}</WriteDate>
					<TeamUserNickname>{teamData.user_id.nickname}</TeamUserNickname>
				</TeamDescContainer>
			</TeamMainContainer>
		</TeamCardSection>
	);
};

export default TeamCard;
