import { Dispatch, SetStateAction } from 'react';
import ReactModal from 'react-modal';
import Swal from 'sweetalert2';

import { dateFormatter } from '@utils/dateUtils';
import { post } from '@api/api';
import {
	TeamButtonContainer,
	AcceptButton,
	RefuseButton,
} from '@components/Card/card.ts';
import alertData from '@utils/swalObject';
import {
	customStyles,
	MainContainer,
	TopContainer,
	MainTitle,
	Title,
	Desc,
	TeamLogo,
	DescContainer,
	RemainContainer,
	RemainDesc,
} from '@components/Modal/modal';
import { TeamType } from '@src/types/cardType';
import DataType from '@src/types/dataType';

interface TeamModalProps {
	isOpen: boolean;
	closeModal: () => void;
	teamData: TeamType;
	setIsModified: Dispatch<SetStateAction<boolean>>;
}

const apiURL = import.meta.env.VITE_API_URL;

const TeamModal = ({
	isOpen,
	closeModal,
	teamData,
	setIsModified,
}: TeamModalProps) => {
	const handleClose = () => {
		closeModal();
	};

	const image = `${apiURL}/${teamData.image}`;
	const date = dateFormatter(teamData.establishmentDate, 'YYYY년 MM월 DD일');
	const introduction = teamData.introduction.split('\r\n');
	const briefHistory = teamData.briefHistory.split('\r\n');

	// 수락
	const acceptHandler = () => {
		Swal.fire(alertData.acceptTeamCard).then((result) => {
			if (result.isConfirmed) {
				post<DataType>(
					'/api/team/auth/admin?status=true',
					{
						teamAuth_id: teamData._id,
					},
					{},
				);
				setIsModified(() => true);
				closeModal();
				Swal.fire('수락되었습니다.');
			}
		});
	};

	// 거부
	const refuseHandler = () => {
		Swal.fire(alertData.refuseTeamCard).then((result) => {
			if (result.isConfirmed) {
				post<DataType>(
					'/api/team/auth/admin?status=false',
					{
						teamAuth_id: teamData._id,
					},
					{},
				);
				setIsModified(() => true);
				closeModal();
				Swal.fire('거부되었습니다.');
			}
		});
	};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={handleClose}
			style={customStyles}>
			<MainContainer>
				<MainTitle>
					[{teamData.category}] {teamData.teamName}
				</MainTitle>
				<TopContainer>
					<TeamLogo src={image} alt='teamLogo' />
					<DescContainer>
						<Desc>신청자</Desc> {teamData.user_id.nickname}
						<Desc>설립일</Desc> {date}
						<Desc>소재지 주소</Desc> {teamData.location}
						<Desc>전화번호</Desc> {teamData.phone}
					</DescContainer>
				</TopContainer>
				<RemainContainer>
					<Title>팀 소개</Title>
					<RemainDesc>
						{introduction.map((item, index) => (
							<p key={index}>{item}</p>
						))}
					</RemainDesc>
				</RemainContainer>
				<RemainContainer>
					<Title>주요 활동과 목적</Title>
					<RemainDesc>
						{briefHistory.map((item, index) => (
							<p key={index}>{item}</p>
						))}
					</RemainDesc>
				</RemainContainer>
			</MainContainer>
			<TeamButtonContainer>
				<AcceptButton onClick={acceptHandler}>수락</AcceptButton>
				<RefuseButton onClick={refuseHandler}>거부</RefuseButton>
			</TeamButtonContainer>
		</ReactModal>
	);
};
export default TeamModal;
