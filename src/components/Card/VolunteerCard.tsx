import React from 'react';


import { VolunteerSection, 
	VolunteerImgContainer,
	VolunteerImage, 
	RecruitStatus, 
	VolunteerIntroContainer, 
	VolunteerTitle, 
	VolunteerContent } from './card.ts';

interface listType {
  title : string,
  content : string,
  centName : string,
   createdAt : string,
  statusName : string,
  deadline : string,
  applyCount : number,
  registerCount : number,
  actTypeName : string,
  teenager : boolean,
  images : string[],
  user_id : string,
  updateAt : string
}

interface VolunteerCardProps {
  data: listType
}


import imgData from '@src/assets/images/volunteer1.jpg';

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

