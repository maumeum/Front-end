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
import { TabTypes } from '../../utils/EnumTypes.ts';
import { post } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import Swal from 'sweetalert2';
import car from '@src/assets/images/car.png';

type Props = {
	data: {
		createdAt: string;
		_id: string;
		isParticipate: boolean;
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

function Card({ currTab, data }: Props) {
	const { _id, title, centName, statusName, images, startDate, endDate } =
		data.volunteer_id;

	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const handleRecruitmentStatusChange = (selectedValue: string) => {
		console.log('Selected Value:', selectedValue);
	};

	const handleParticipated = async () => {
		console.log(_id);
		console.log(getToken());
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
			console.log(error);
			Swal.fire({
				title: '활동이 시작되지 않은 봉사입니다.',
				icon: 'success',
				confirmButtonColor: 'var(--button--color)',
			});
		}
	};

	return (
		<>
			<CardContainer currTab={currTab}>
				<ImgBox>
					<img src={car} alt='' />
					<Badge currTab={currTab}>
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
					<UserInfo>
						<img src={car} alt='작성자 프로필사진' />
						<p>{centName}</p>
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
						<Modal isOpen={isOpen} closeModal={closeModal} id={_id} />
					</UserInfo>
				</ContentBox>
			</CardContainer>
		</>
	);
}

export default Card;
