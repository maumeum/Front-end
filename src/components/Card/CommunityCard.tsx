import { useEffect, useState } from 'react';
import { CommunityType } from '@src/types/cardType';

import {
	CommunityContainer,
	QnaType,
	TogetherType,
	CommunityTitle,
	WriterNickname,
} from '@components/Card/card';

interface CommunityCardProps {
	communityData: CommunityType;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CommunityCard = ({ communityData, onClick }: CommunityCardProps) => {
	const title =
		communityData.title.length > 15
			? `${communityData.title.slice(0, 15)}...`
			: communityData.title;

	return (
		<CommunityContainer onClick={onClick}>
			{communityData.postType === 'qna' ? (
				<QnaType>QnA</QnaType>
			) : (
				<TogetherType>동행</TogetherType>
			)}
			<div>
				<CommunityTitle>{title}</CommunityTitle>
				<WriterNickname>{communityData.user_id.nickname}</WriterNickname>
			</div>
		</CommunityContainer>
	);
};

export default CommunityCard;
