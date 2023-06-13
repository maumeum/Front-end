import { VolunteerDetailType } from '@src/types/cardType.ts';
import {
	dateFormatter,
	getCurrent,
	remainingDaysCulcurator,
} from '@utils/dateUtils.ts';
import {
	CardProps,
	VolunteerUserInfo,
	CardContainer,
	ImgBox,
	VolunteerBadge,
	Label,
	TitleInfo,
	InfoBox,
} from '@components/Card/card.ts';

import CardAvailableIcon from '@assets/icons/card_applier_is_available_icon.svg';
// import CardFullIcon from '@assets/icons/card_applier_is_full_icon.svg';

interface VolunteerCardProps extends CardProps {
	volunteerCardData: VolunteerDetailType;
}

// 2023-06-05T17:06:58.150+00:00 -> 2023-06-05
const VolunteerTogetherCard = ({ volunteerCardData }: VolunteerCardProps) => {
	const { title, statusName, images, applyCount, register_user, deadline } =
		volunteerCardData;
	const currentDate = getCurrent();
	const deadlineDate = dateFormatter(deadline, 'YYYY-MM-DD');
	const remainingDays = remainingDaysCulcurator(currentDate, deadlineDate);
	const thumbnail = images[0];

	return (
		<CardContainer statusName={statusName}>
			<ImgBox>
				<img src={thumbnail} alt={`${title} 썸네일`} />
				<VolunteerBadge statusName={statusName}>
					<p>{statusName}</p>
				</VolunteerBadge>
				<Label>
					<img src={CardAvailableIcon} alt='CardAvailableIcon' />
					<p>{`현재 ${applyCount}명 신청중`}</p>
				</Label>
			</ImgBox>
			<TitleInfo>{title}</TitleInfo>
			<InfoBox>
				<VolunteerUserInfo>
					<img src={register_user.image} alt='작성자 프로필사진' />
					<p>{register_user.nickname}</p>
				</VolunteerUserInfo>
				<b>{`${remainingDays}일 남음`}</b>
			</InfoBox>
		</CardContainer>
	);
};

export default VolunteerTogetherCard;
