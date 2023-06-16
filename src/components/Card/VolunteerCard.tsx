import { VolunteerType } from '@src/types/cardType';

import {
	VolunteerSection,
	VolunteerImgContainer,
	VolunteerImage,
	RecruitStatus,
	VolunteerIntroContainer,
	VolunteerTitle,
	VolunteerContent,
} from '@components/Card/card';

interface VolunteerCardProps {
	volunteerData: VolunteerType;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

import imgData from '@assets/images/volunteer1.jpg';

const VolunteerCard = ({ volunteerData, onClick }: VolunteerCardProps) => {
	return (
		<VolunteerSection onClick={onClick}>
			<VolunteerImgContainer>
				<VolunteerImage src={imgData} />
				<RecruitStatus className={volunteerData.statusName}>
					{volunteerData.statusName}
				</RecruitStatus>
			</VolunteerImgContainer>
			<VolunteerIntroContainer>
				<VolunteerTitle>{volunteerData.title}</VolunteerTitle>
				<VolunteerContent>
					{volunteerData.register_user_id.nickname}
				</VolunteerContent>
			</VolunteerIntroContainer>
		</VolunteerSection>
	);
};

export default VolunteerCard;
