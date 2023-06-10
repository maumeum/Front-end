import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Swal from 'sweetalert2';

import { TeamListType } from '@src/types/CardType';
import alertData from '@src/utils/swalObject';

import {
	TeamCardSection,
	TeamImageContainer,
	TeamImage,
	TeamMainContainer,
	TeamName,
	TeamDescContainer,
	DescContainer,
	WriteDate,
	TeamUserNickname,
	TeamButtonContainer,
	AcceptButton,
	RefuseButton,
} from './card';

import volunteerLogo from '@assets/images/volunteerLogo.png';

interface TeamCardProps {
	data: TeamListType;
}

const TeamCard = ({ data }: TeamCardProps) => {
	// 수락
	const acceptHandler = () => {
		Swal.fire(alertData.acceptTeamCard).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('수락되었습니다.');
			}
		});
	};

	// 거부
	const refuseHandler = () => {
		Swal.fire(alertData.refuseTeamCard).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('거부되었습니다.');
			}
		});
	};
	const date = dayjs(data.createdAt).locale('ko').format('YYYY년 MM월 DD일');
	return (
		<TeamCardSection>
			<TeamImageContainer>
				<TeamImage src={volunteerLogo} alt='volunteerLogo' />
			</TeamImageContainer>
			<TeamMainContainer>
				<TeamName>{`[${data.category}]${data.teamName}`}</TeamName>
				<TeamDescContainer>
					<DescContainer>
						<WriteDate>{date}</WriteDate>
						<TeamUserNickname>{data.userId.nickname}</TeamUserNickname>
					</DescContainer>
					<TeamButtonContainer>
						<AcceptButton onClick={acceptHandler}>수락</AcceptButton>
						<RefuseButton onClick={refuseHandler}>거부</RefuseButton>
					</TeamButtonContainer>
				</TeamDescContainer>
			</TeamMainContainer>
		</TeamCardSection>
	);
};

export default TeamCard;
