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
}

import imgData from '@assets/images/volunteer1.jpg';

const VolunteerCard = ({ volunteerData }: VolunteerCardProps) => {
	return (
		<VolunteerSection>
			<VolunteerImgContainer>
				<VolunteerImage src={imgData} />
				<RecruitStatus>{volunteerData.statusName}</RecruitStatus>
			</VolunteerImgContainer>
			<VolunteerIntroContainer>
				<VolunteerTitle>{volunteerData.title}</VolunteerTitle>
				<VolunteerContent>{volunteerData.centName}</VolunteerContent>
			</VolunteerIntroContainer>
		</VolunteerSection>
	);
};

export default VolunteerCard;
