import { useState } from 'react';
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
} from './card.ts';
import { TabTypes } from '../../types/EnumTypes.ts';
import { post, patch } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import Swal from 'sweetalert2';
import car from '@src/assets/images/car.png';
import { VolunteerTypes } from '@src/types/EnumTypes.ts';

export type Props = {
	data: {
		createdAt: string;
		isParticipate?: boolean;
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
	currTab: string;
};

function truncateDate(date: string) {
	if (!date) {
		return '';
	}
	return date.split('T')[0];
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

function Card({ currTab, data }: Props) {
	const { _id, title, centName, statusName, images, startDate, endDate } =
		data.volunteer_id;
	const [isOpen, setIsOpen] = useState(false);
	const [selectedStatus, setSelectedStatus] = useState<string>(statusName);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const handleRecruitmentStatusChange = (selectedValue: string) => {
		Swal.fire({
			title: '봉사활동 상태를 변경하시겠습니까??',
			icon: 'info',
			showCancelButton: true,
			confirmButtonColor: '#ffd4d4',
			cancelButtonColor: '#afcd81',
			confirmButtonText: '네',
			cancelButtonText: '아니요',
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					await patch(
						`/api/volunteers/registerations/${_id}`,
						{ statusName: selectedValue },
						{
							headers: {
								Authorization: `Bearer ${getToken()}`,
							},
						},
					);
					setSelectedStatus(selectedValue);
				} catch (error) {
					Swal.fire({
						title: '모집상태 변경에 실패하였습니다 :(',
						icon: 'error',
						confirmButtonColor: 'var(--button--color)',
					});
				}
				Swal.fire({
					title: `${selectedValue} (으)로 상태가 변경되었습니다`,
					icon: 'success',
					confirmButtonColor: 'var(--button--color)',
				}).then(() => {
					window.location.reload();
				});
			}
		});
	};

	const handleParticipated = async () => {
		try {
			await post(
				`/api/review/users/participation/${_id}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				},
			);
			Swal.fire({
				title: '참여하신 활동이 맞으십니까?',
				text: '커뮤니티 경험 향상을 위해 거짓 정보는 지양해주세요!',
				icon: 'info',
				showCancelButton: true,
				confirmButtonColor: '#ffd4d4',
				cancelButtonColor: '#afcd81',
				confirmButtonText: '네',
				cancelButtonText: '아니요',
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire('완료된 봉사로 변경되었습니다!', 'success');
				}
			});
		} catch (error) {
			Swal.fire({
				title: '활동이 시작되지 않은 봉사입니다.',
				icon: 'success',
				confirmButtonColor: 'var(--button--color)',
			});
		}
	};

	return (
		<>
			<CardContainer currTab={currTab} statusName={statusName}>
				<ImgBox>
					<img src={car} alt='유저프로필' />
					<Badge currTab={currTab} statusName={selectedStatus}>
						<p>{statusName}</p>
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
						<img src={car} alt='작성자 프로필사진' />
						<p>{truncateCentName(centName)}</p>
						{currTab === TabTypes.VOLUNTEER_COMPLETED &&
							statusName !== VolunteerTypes.DISCONTINUE && (
								<ButtonContainer>
									<SmallButton onClick={openModal}>리뷰작성</SmallButton>
								</ButtonContainer>
							)}
						{currTab === TabTypes.VOLUNTEER_SUGGEST && (
							<SelectContainer>
								<Selector
									value={selectedStatus}
									onChange={handleRecruitmentStatusChange}
								/>
							</SelectContainer>
						)}
						{currTab === TabTypes.VOLUNTEER_APPLIED && (
							<ButtonContainer>
								<SmallButton onClick={handleParticipated}>참여완료</SmallButton>
							</ButtonContainer>
						)}
						<Modal isOpen={isOpen} closeModal={closeModal} id={_id} />
					</UserInfo>
				</ContentBox>
			</CardContainer>
		</>
	);
}

export default Card;
