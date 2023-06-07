import { CommunityListType } from '@src/types/CardType';

import {
	CommunityContainer,
	PostType,
	CommunityTitle,
} from '@components/Card/card';

interface CommunityCardProps {
	data: CommunityListType;
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
