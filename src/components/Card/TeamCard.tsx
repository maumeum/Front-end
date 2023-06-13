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

interface TeamCardProps {
	teamData: TeamType;
	onClick: () => void;
}

const apiURL = import.meta.env.VITE_API_URL;

const TeamCard = ({ teamData, onClick }: TeamCardProps) => {
	const image = `${apiURL}/${teamData.image}`;

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
