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

export type Props = {
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
						<Modal isOpen={isOpen} closeModal={closeModal} />
					</UserInfo>
				</ContentBox>
			</CardContainer>
		</>
	);
}

export default Card;
