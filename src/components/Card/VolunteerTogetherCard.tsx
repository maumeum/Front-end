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
	data: VolunteerTogetherType;
	onClick: () => void;
}

const url = import.meta.env.VITE_API_URL;

const VolunteerTogetherCard = ({ data, onClick }: VolunteerCardProps) => {
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
	} = data;
	const currentDate = getCurrent();
	const deadlineDate = dateFormatter(deadline, 'YYYY-MM-DD');
	const remainingDays = remainingDaysCalculator(currentDate, deadlineDate);
	const thumbnail = images[0];

	const onClickDetail = () => {
		console.log(`상세페이지로 이동합니다: ${_id}`);
		navigate(`/volunteers/ongoing/detail/${_id}`);
	};

	return (
		<CardContainer statusName={statusName} onClick={onClickDetail}>
			<ImgBox>
				{images.length > 0 ? (
					<img src={`${url}/${thumbnail}`} alt={`${title} 썸네일`} />
				) : (
					<img src={defaultImage} alt={'게시글 기본이미지'} />
				)}
				<VolunteerBadge statusName={statusName}>
					<p>{statusName}</p>
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
			<TitleInfo>{`[${teamName}] ${title}`}</TitleInfo>
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
