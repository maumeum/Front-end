import { CommunityType } from '@src/types/cardType';

import {
	CommunityContainer,
	PostType,
	CommunityTitle,
} from '@components/Card/card';

interface CommunityCardProps {
	communityData: CommunityType;
}

const CommunityCard = ({ communityData }: CommunityCardProps) => {
	return (
		<CommunityContainer>
			<PostType>{communityData.postType}</PostType>
			<CommunityTitle>{communityData.title}</CommunityTitle>
		</CommunityContainer>
	);
};

export default CommunityCard;
