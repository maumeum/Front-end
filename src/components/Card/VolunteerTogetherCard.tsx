import { VolunteerTogetherType } from '@src/types/cardType.ts';
import { VolunteerTypes } from '@src/types/myPageConstants';
import { useNavigate } from 'react-router-dom';
import {
	dateFormatter,
	getCurrent,
	remainingDaysCalculator,
} from '@utils/dateUtils.ts';
import {
	VolunteerUserInfo,
	CardContainer,
	ImgBox,
	VolunteerBadge,
	Label,
	TitleInfo,
	InfoBox,
} from '@components/Card/card.ts';

import CardAvailableIcon from '@assets/icons/card_applier_is_available_icon.svg';
import CardFullIcon from '@assets/icons/card_applier_is_full_icon.svg';
import defaultImage from '@src/assets/images/volunteer1.jpg';

interface VolunteerCardProps {
	volunteerData: VolunteerTogetherType;
}

const url = import.meta.env.VITE_API_URL;

const VolunteerTogetherCard = ({ volunteerData }: VolunteerCardProps) => {
	const navigate = useNavigate();

	const {
		_id,
		title,
		teamName,
		statusName,
		images,
		applyCount,
		register_user_id,
		deadline,
	} = volunteerData;
	const currentDate = getCurrent();
	const deadlineDate = dateFormatter(deadline, 'YYYY-MM-DD');
	const remainingDays = remainingDaysCalculator(currentDate, deadlineDate);
	const thumbnail = images[0];
	const shortTitle = title.length > 13 ? `${title.slice(0, 13)}...` : title;
	const onClick = () => {
		if (statusName === '모집중') {
			navigate(`/volunteers/ongoing/detail/${_id}`);
		} else {
			navigate(`/volunteers/close/detail/${_id}`);
		}
	};

	return (
		<CardContainer statusName={statusName} onClick={onClick}>
			<ImgBox>
				{images.length > 0 ? (
					<img src={`${url}/${thumbnail}`} alt='Logo' />
				) : (
					<img src={defaultImage} alt={'게시글 기본이미지'} />
				)}
				<VolunteerBadge statusName={statusName}>
					<p>
						{statusName.length === 4
							? `${statusName.slice(0, 2)}\n${statusName.slice(2)}`
							: statusName}
					</p>
				</VolunteerBadge>
				<Label>
					{statusName === VolunteerTypes.CONTINUE && (
						<>
							<img src={CardAvailableIcon} alt='Volunteer Available Icon' />
							<p>{`현재 ${applyCount}명 신청중`}</p>
						</>
					)}
					{(statusName === VolunteerTypes.COMPLETED ||
						statusName === VolunteerTypes.DISCONTINUE) && (
						<>
							<img src={CardFullIcon} alt='Volunteer Close Icon' />
							<p>{`${applyCount}명 신청 완료`}</p>
						</>
					)}
				</Label>
			</ImgBox>
			<TitleInfo>{`[${teamName}] ${shortTitle}`}</TitleInfo>
			<InfoBox statusName={statusName}>
				<VolunteerUserInfo>
					<img
						src={`${url}/${register_user_id.image}`}
						alt='작성자 프로필사진'
					/>
					<p>{register_user_id.nickname}</p>
				</VolunteerUserInfo>
				{statusName === VolunteerTypes.CONTINUE && (
					<>
						<b>{`${remainingDays}일 남음`}</b>
					</>
				)}
				{(statusName === VolunteerTypes.COMPLETED ||
					statusName === VolunteerTypes.DISCONTINUE) && (
					<>
						<b>{'모집 종료'}</b>
					</>
				)}
			</InfoBox>
		</CardContainer>
	);
};

export default VolunteerTogetherCard;
