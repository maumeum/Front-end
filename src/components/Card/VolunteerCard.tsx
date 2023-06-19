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

const apiURL = import.meta.env.VITE_API_URL;

const VolunteerCard = ({ volunteerData, onClick }: VolunteerCardProps) => {
	const volunteerImg = `${apiURL}/${volunteerData.images[0]}`;

	return (
		<VolunteerSection onClick={onClick}>
			<VolunteerImgContainer>
				<VolunteerImage src={volunteerImg ? volunteerImg : imgData} />
			</VolunteerImgContainer>
			<RecruitStatus className={volunteerData.statusName}>
				{volunteerData.statusName}
			</RecruitStatus>
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
