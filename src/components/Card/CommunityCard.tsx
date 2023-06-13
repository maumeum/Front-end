import { useEffect, useState } from 'react';
import { CommunityType } from '@src/types/cardType';

import {
	CommunityContainer,
	PostType,
	CommunityTitle,
} from '@components/Card/card';

interface CommunityCardProps {
	communityData: CommunityType;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CommunityCard = ({ communityData, onClick }: CommunityCardProps) => {
	const [postType, setPostType] = useState<string>('');
	useEffect(() => {
		if (communityData.postType === 'qna') {
			setPostType('궁금해요');
		} else {
			setPostType('동행 구해요');
		}
	}, []);

	return (
		<CommunityContainer onClick={onClick}>
			<PostType>{postType}</PostType>
			<CommunityTitle>{communityData.title}</CommunityTitle>
		</CommunityContainer>
	);
};

export default CommunityCard;
