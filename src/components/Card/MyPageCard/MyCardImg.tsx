import {
	CardContainer,
	ImgBox,
	ContentBox,
	UserInfo,
	Badge,
	VolunInfo,
} from '@components/Card/Card.ts';
import { useNavigate } from 'react-router-dom';
//카드에서 필요한 데이터
//title, statusName, images, 봉사_id,startDate,endDate => 카드정보
//authorization, nickname,image => 유저정보
//셀렉터 -> statusName
//리뷰 -> isReviewed

interface MyVolunCardProps {
	volunCardData: {
		title: string;
		images: string[];
		startDate: string;
		endDate: string;
		statusName: string;
		isReviewed: boolean;
		_id: string;
		userImage:string;
	};
	currTab?: string;
}

function MyCardImg({ currTab, volunCardData }: MyVolunCardProps) {
	const navigate = useNavigate();

	const clickNavigate = () => {
		navigate(`/volunteers/ongoing/detail/${_id}`);
	};
	return (
		<>
			<CardContainer currTab={currTab} statusName={statusName}>
				<ImgBox onClick={clickNavigate}>
					{images.length > 0 ? (
						<img src={`${url}/${images[0]}`} alt='게시글 대표이미지' />
					) : (
						<img src={defaultImage} alt='게시글 기본이미지'></img>
					)}
					{currTab === TabTypes.VOLUNTEER_SUGGEST && (
						<Badge currTab={currTab} statusName={selectedStatus}>
							<p
								dangerouslySetInnerHTML={{
									__html: splitStatusName(selectedStatus),
								}}
							/>
						</Badge>
					)}
				</ImgBox>
				<ContentBox>
					<VolunInfo onClick={clickNavigate}>
						<p onClick={clickNavigate}>{title}</p>
						<p>{`활동기간: ${truncateDate(startDate)} ~ ${truncateDate(
							endDate,
						)}`}</p>
					</VolunInfo>

					<UserInfo>
						<img src={`${url}/${image}`} alt='작성자 프로필사진' />
						<p>{truncateCentName(nickname)}</p>

						{authorization && (
							<img className='verifyMark' src={check} alt='인증마크' />
						)}
					</UserInfo>
				</ContentBox>
			</CardContainer>
		</>
	);
}

export default MyCardImg;
