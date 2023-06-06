import React from 'react';
import { volunteerListType } from '@src/types/cardType';

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
	data: volunteerListType;
}

import imgData from '../../assets/images/volunteer1.jpg';

const VolunteerCard = ({ data }: VolunteerCardProps) => {
	return (
		<VolunteerSection>
			<VolunteerImgContainer>
				<VolunteerImage src={imgData} />
				<RecruitStatus>{data.statusName}</RecruitStatus>
			</VolunteerImgContainer>
			<VolunteerIntroContainer>
				<VolunteerTitle>{data.title}</VolunteerTitle>
				<VolunteerContent>{data.centName}</VolunteerContent>
			</VolunteerIntroContainer>
		</VolunteerSection>
	);
};

export default VolunteerCard;
