import React from 'react';
import { VolunteerListType } from '@src/types/CardType';

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
	data: VolunteerListType;
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
