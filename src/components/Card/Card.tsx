import { useState } from 'react';
import Modal from '@components/Modal/Modal.tsx';
import Selector from '@components/Selector/Selector.tsx';
import { SmallButton } from '@components/Buttons/SmallButton.ts';
import dayjs from 'dayjs';
import {
	CardContainer,
	ImgBox,
	ContentBox,
	UserInfo,
	Badge,
	VolunInfo,
	ButtonContainer,
	SelectContainer,
} from './card.ts';
import { TabTypes } from '@src/types/myPageConstants.ts';
import { post, patch } from '@api/api';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject.ts';
import defaultImage from '@src/assets/images/volunteer1.jpg';
import { VolunteerTypes } from '@src/types/myPageConstants.ts';
import check from '@assets/icons/authentication.svg';

export interface CardProps {
	data: {
		// register_user_id: string[];
		createdAt: string;
		isParticipate?: boolean;

		register_user_id?: {
			nickname: string;
			image: string;
			authorization: boolean;
		};

		volunteer_id: {
			startDate: string;
			endDate: string;
			_id: string;
			title: string;
			centName: string;
			statusName: string;
			deadline: string;
			images: string[];
		};
	};
	currTab?: string;
}

function truncateDate(date: string) {
	if (!date) {
		return '';
	}
	return dayjs(date).format('YYYY-MM-DD');
}

function truncateCentName(name: string) {
	if (!name) {
		return '';
	}
	if (name.length > 10) {
		return `${name.slice(0, 10)}...`;
	} else {
		return name;
	}
}

function splitStatusName(statusName: string) {
	return statusName.length === 4
		? `${statusName.slice(0, 2)}<br />${statusName.slice(2)}`
		: statusName;
}
const url = import.meta.env.VITE_API_URL;

function Card({ currTab, data }: CardProps) {
	const { _id, title, statusName, images, startDate, endDate } =
		data.volunteer_id;
	const {
		nickname = '',
		image = '',
		authorization = false,
	} = data.register_user_id || {};

	console.log(data); // 취소기능추가하면 지워라
	const [isOpen, setIsOpen] = useState(false);
	const [selectedStatus, setSelectedStatus] = useState<string>(statusName);
	const [selectedParticipationStatus, setSelectedParticipationStatus] =
		useState<string>(statusName);

	const toggleModal = (onoff: boolean) => () => {
		setIsOpen(onoff);
	};

	const handleRecruitmentStatusChange = async (selectedValue: string) => {
		const result = await Swal.fire(
			alertData.doubleCheckMessage('봉사활동 상태를 변경하시겠습니까??'),
		);

		if (result.isConfirmed) {
			try {
				await patch(`/api/volunteers/registerations/${_id}`, {
					statusName: selectedValue,
				});
				setSelectedStatus(selectedValue);
			} catch (error) {
				await Swal.fire(
					alertData.errorMessage('모집상태 변경에 실패하였습니다 :('),
				);
			}
			await Swal.fire(
				alertData.successMessage(
					`${selectedValue} (으)로 상태가 변경되었습니다`,
				),
			);
			window.location.reload();
		}
	};

	const handleParticipationStatusChange = async (value: string) => {
		try {
			if (value === '참여완료') {
				await post(`/api/review/users/participation/${_id}`, {});
				const result = await Swal.fire({
					title: '참여하신 활동이 맞으십니까?',
					text: '커뮤니티 경험 향상을 위해 거짓 정보는 지양해주세요!',
					icon: 'info',
					showCancelButton: true,
					confirmButtonColor: '#ffd4d4',
					cancelButtonColor: '#afcd81',
					confirmButtonText: '네',
					cancelButtonText: '아니요',
				});

				if (result.isConfirmed) {
					await Swal.fire('완료된 봉사로 변경되었습니다!', 'success');
				}
			} else if (value === '참여취소') {
				// value가 'canceled'일 때 로직 추가
			}
		} catch (error) {
			await Swal.fire(
				alertData.errorMessage('활동이 시작되지 않은 봉사입니다.'),
			);
		}
	};

	return (
		<>
			<CardContainer currTab={currTab} statusName={statusName}>
				<ImgBox>
					{images.length > 0 ? (
						<img src={`${url}/${images[0]}`} alt='게시글 대표이미지' />
					) : (
						<img src={defaultImage} alt='게시글 기본이미지'></img>
					)}
					<Badge currTab={currTab} statusName={selectedStatus}>
						<p
							dangerouslySetInnerHTML={{
								__html: splitStatusName(selectedStatus),
							}}
						/>
					</Badge>
				</ImgBox>
				<ContentBox>
					<VolunInfo>
						<p>{title}</p>
						<p>{`활동기간: ${truncateDate(startDate)} ~ ${truncateDate(
							endDate,
						)}`}</p>
					</VolunInfo>
					{/* 컴포넌트 분리 시급... */}
					<UserInfo>
						<img src={`${url}/${image}`} alt='작성자 프로필사진' />
						<p>{truncateCentName(nickname)}</p>

						{authorization && (
							<img className='verifyMark' src={check} alt='인증마크' />
						)}

						{currTab === TabTypes.VOLUNTEER_COMPLETED &&
							statusName !== VolunteerTypes.DISCONTINUE && (
								<ButtonContainer>
									<SmallButton onClick={toggleModal(true)}>
										리뷰작성
									</SmallButton>
								</ButtonContainer>
							)}
						{currTab === TabTypes.VOLUNTEER_SUGGEST && (
							<SelectContainer>
								<Selector
									value={selectedStatus}
									onChange={handleRecruitmentStatusChange}
									options={[
										{ value: '모집중', label: '모집중' },
										{ value: '모집완료', label: '모집완료' },
										{ value: '모집중단', label: '모집중단' },
									]}
								/>
							</SelectContainer>
						)}
						{currTab === TabTypes.VOLUNTEER_APPLIED && (
							<SelectContainer>
								<Selector
									value={selectedParticipationStatus}
									onChange={handleParticipationStatusChange}
									options={[
										{ value: '참여완료', label: '참여완료' },
										{ value: '참여취소', label: '참여취소' },
									]}
								/>
							</SelectContainer>
						)}
						<Modal isOpen={isOpen} closeModal={toggleModal(false)} id={_id} />
					</UserInfo>
				</ContentBox>
			</CardContainer>
		</>
	);
}

export default Card;
