import React from 'react';

import {
	CommunityContainer,
	PostType,
	CommunityTitle,
} from '@components/Card/card';

interface listType {
	user_id: {
		nickname: string;
	};
	title: string;
	postType: string;
}

interface CommunityCardProps {
	data: listType;
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
