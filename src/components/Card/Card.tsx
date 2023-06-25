import { useEffect, useState } from 'react';
import Modal from '@components/Modal/Modal.tsx';
import Selector from '@components/Selector/Selector.tsx';
import { SmallButton } from '@components/Buttons/SmallButton.ts';
import {
	CardContainer,
	ImgBox,
	ContentBox,
	UserInfo,
	Badge,
	VolunInfo,
	ButtonContainer,
	SelectContainer,
} from '@components/Card/Card.ts';
import {
	truncateDate,
	truncateCentName,
	splitStatusName,
} from '@utils/truncateDataFns';
import { TabTypes } from '@src/types/myPageConstants.ts';
import { post, patch, del } from '@api/api';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject.ts';
import defaultImage from '@src/assets/images/volunteer1.jpg';
import { VolunteerTypes } from '@src/types/myPageConstants.ts';
import check from '@assets/icons/authentication.svg';
import { useNavigate } from 'react-router-dom';

interface RegisterUserId {
	nickname: string;
	image: string;
	authorization: boolean;
}

export interface CardProps {
	data: {
		createdAt: string;
		isParticipate?: boolean;
		_id: string;
		register_user_id?: RegisterUserId;
		isReviewed?: boolean;
		volunteer_id: {
			startDate: string;
			endDate: string;
			_id: string;
			title: string;
			centName: string;
			statusName: string;
			deadline: string;
			images: string[];
			register_user_id?: RegisterUserId; // 여기에 새로 정의한 타입 추가
		};
	};
	currTab?: string;
}

const url = import.meta.env.VITE_API_URL;

function Card({ currTab, data }: CardProps) {
	//userInfo, cardProps(이름 시멘틱하게) 데이터 따로 받아오기
	const { _id, title, statusName, images, startDate, endDate } =
		data.volunteer_id;
	const { _id: volunId, isReviewed } = data;
	const isActiveUser = data.volunteer_id.register_user_id;
	const {
		nickname = '',
		image = '',
		authorization,
	} = (isActiveUser
		? data.volunteer_id.register_user_id
		: data.register_user_id) || {};

	const [isOpen, setIsOpen] = useState(false);
	const [selectedStatus, setSelectedStatus] = useState<string>(statusName);
	const [selectedParticipationStatus, setSelectedParticipationStatus] =
		useState<string>('');
	const [isPastEndDate, setIsPastEndDate] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const checkEndDate = () => {
			const checkDate = new Date(endDate);
			const now = new Date();
			if (checkDate < now) {
				setSelectedStatus('모집완료');
				setIsPastEndDate(true);
			}
		};
		checkEndDate();
	}, [endDate]);

	const toggleModal = (onoff: boolean) => () => {
		setIsOpen(onoff);
	};

	//렌더링 잘되는지 테스트하기 ************************************************************
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
		}
	};

	const handleParticipationStatusChange = async (selectedValue: string) => {
		try {
			if (selectedValue === 'complete') {
				const result = await Swal.fire(
					alertData.doubleCheckTitkeMsg(
						'참여하신 활동이 맞으십니까?',
						'커뮤니티 경험 향상을 위해 거짓 정보는 지양해주세요!',
					),
				);
				if (result.isConfirmed) {
					await post(`/api/review/users/participation/${_id}`, {});
					setSelectedParticipationStatus(selectedValue);
					window.location.reload();
					await Swal.fire('완료된 봉사로 변경되었습니다!', 'success');
				}
			} else if (selectedValue === 'cancel') {
				await del(`/api/applications/${volunId}`, {
					data: { volunteer_id: _id },
				});
				const result = await Swal.fire(
					alertData.doubleCheckMessage('봉사활동을 취소하시겠습니까?'),
				);
				if (result.isConfirmed) {
					setSelectedParticipationStatus(selectedValue);
					window.location.reload();
					await Swal.fire(
						alertData.successMessage('봉사활동이 취소되었습니다'),
					);
				}
			}
		} catch (error) {
			await Swal.fire(
				alertData.errorMessage('활동이 시작되지 않은 봉사입니다.'),
			);
		}
	};

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

						{currTab === TabTypes.VOLUNTEER_COMPLETED &&
							statusName !== VolunteerTypes.DISCONTINUE &&
							!isReviewed && (
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
									disabled={isPastEndDate}
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
										{ value: '상태변경', label: '상태변경' },
										{ value: 'complete', label: '참여완료' },
										{ value: 'cancel', label: '신청취소' },
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
