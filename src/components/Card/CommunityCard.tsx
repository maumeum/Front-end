import React from 'react';
import { communityListType } from '@src/types/cardType';

import {
	CommunityContainer,
	PostType,
	CommunityTitle,
} from '@components/Card/card';

interface CommunityCardProps {
	data: communityListType;
}

const CommunityCard = ({ data }: CommunityCardProps) => {
	return (
		<CommunityContainer>
			<PostType>{data.postType}</PostType>
			<CommunityTitle>{data.title}</CommunityTitle>
		</CommunityContainer>
	);
};

export default CommunityCard;
