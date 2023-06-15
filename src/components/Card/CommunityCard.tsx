import { CommunityType } from '@src/types/cardType';

import {
	CommunityContainer,
	QnaType,
	TogetherType,
	CommunityTitle,
	WriterNickname,
	SearchCommunityContainer,
	SearchQna,
	SearchTogether,
	SearchTitle,
	SearchNickname,
} from '@components/Card/card';

interface CommunityCardProps {
	communityData: CommunityType;
	onClick: React.MouseEventHandler<HTMLDivElement>;
	searchPage?: boolean;
}

const CommunityCard = ({
	communityData,
	onClick,
	searchPage,
}: CommunityCardProps) => {
	const title =
		communityData.title.length > 15
			? `${communityData.title.slice(0, 15)}...`
			: communityData.title;

	const searchTitle =
		communityData.title.length > 30
			? `${communityData.title.slice(0, 30)}...`
			: communityData.title;

	return (
		<>
			{!searchPage ? (
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
			) : (
				<SearchCommunityContainer onClick={onClick}>
					{communityData.postType === 'qna' ? (
						<SearchQna>QnA</SearchQna>
					) : (
						<SearchTogether>동행</SearchTogether>
					)}
					<SearchTitle>{searchTitle}</SearchTitle>
					<SearchNickname>{communityData.user_id.nickname}</SearchNickname>
				</SearchCommunityContainer>
			)}
		</>
	);
};

export default CommunityCard;
