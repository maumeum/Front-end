import React, { useEffect, useState } from 'react';
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
import { TabTypes } from '../../utils/EnumTypes.ts';
import { post } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import Swal from 'sweetalert2';

type Props = {
	data: {
		title: string;
		thumbnail: string;
		nickname: string;
		profile: string;
		recruitStatus: string;
		startDate: string;
		endDate: string;
	};
	currTab: string;
};

function Card({ currTab, data }: Props) {
	const {
		title,
		thumbnail,
		nickname,
		recruitStatus,
		profile,
		startDate,
		endDate,
	} = data;

	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	function closeModal() {
		setIsOpen(false);
	}

	const handleRecruitmentStatusChange = (selectedValue: string) => {
		console.log('Selected Value:', selectedValue);
	};

	const handleParticipated = async () => {
		try {
			await post('/api/review/users/participation', {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});
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
			console.log(error);
		}
	};

	return (
		<>
			<CardContainer currTab={currTab}>
				<ImgBox>
					<img src={thumbnail} alt='' />
					<Badge currTab={currTab}>
						<p>{recruitStatus}</p>
					</Badge>
				</ImgBox>
				<ContentBox>
					<VolunInfo>
						<p>{title}</p>
						<p>{`활동기간: ${startDate} ~ ${endDate}`}</p>
					</VolunInfo>
					<UserInfo>
						<img src={profile} alt='작성자 프로필사진' />
						<p>{nickname}</p>
						{currTab === TabTypes.VOLUNTEER_COMPLETED && (
							<ButtonContainer>
								<SmallButton onClick={openModal}>리뷰작성</SmallButton>
							</ButtonContainer>
						)}
						{currTab === TabTypes.VOLUNTEER_SUGGEST && (
							<SelectContainer>
								<Selector onChange={handleRecruitmentStatusChange} />
							</SelectContainer>
						)}
						{currTab === TabTypes.VOLUNTEER_APPLIED && (
							<ButtonContainer>
								<SmallButton onClick={handleParticipated}>참여완료</SmallButton>
							</ButtonContainer>
						)}
						<Modal isOpen={isOpen} closeModal={closeModal} />
					</UserInfo>
				</ContentBox>
			</CardContainer>
		</>
	);
}

export default Card;
