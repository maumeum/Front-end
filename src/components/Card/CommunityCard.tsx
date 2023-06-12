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
	return (
		<CommunityContainer onClick={onClick}>
			<PostType>{communityData.postType}</PostType>
			<CommunityTitle>{communityData.title}</CommunityTitle>
		</CommunityContainer>
	);
};

export default CommunityCard;
