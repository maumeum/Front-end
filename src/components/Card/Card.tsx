import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal.tsx';

import {
	CardContainer,
	ImgBox,
	ContentBox,
	UserInfo,
	Badge,
	VolunInfo,
	ButtonContainer,
} from './card.ts';

import { SmallButton } from '../Buttons/SmallButton.ts';

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
	const [isOpen, setOpen] = useState(false);
	const openModal = () => {
		setOpen(true);
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
						{currTab === '완료한 봉사' && (
							<ButtonContainer>
								<SmallButton onClick={openModal}>리뷰작성</SmallButton>
							</ButtonContainer>
						)}
						<Modal isOpen={isOpen} setOpen={setOpen} />
					</UserInfo>
				</ContentBox>
			</CardContainer>
		</>
	);
}

export default Card;
