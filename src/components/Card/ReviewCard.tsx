import { ReviewType } from '@src/types/cardType.ts';
import {
	ReviewSection,
	ImageContainer,
	ReviewImage,
	ReviewContainer,
	Nickname,
	ReviewTitle,
	ReviewContent,
} from './card.ts';
import imgData from '@assets/images/volunteer2.jpg';

interface ReviewCardProps {
	reviewData: ReviewType;
}

const ReviewCard = ({ reviewData }: ReviewCardProps) => {
	const key = reviewData.index;

	//Content 미리보기 함수
	const previewContent = (reviewData: ReviewType) => {
		const content = reviewData.content;

		// content의 길이가 35자 이상이라면 ... 처리
		if (content.length >= 35) {
			return `${content.slice(0, 34)}...`;
		}
		return content;
	};

	//다른 색상 카드 구현
	const colorClass = (key: number) => {
		if (key === 0) {
			return 'one';
		}
		return 'two';
	};

	return (
		<ReviewSection className={colorClass(key)}>
			<ImageContainer>
				<ReviewImage src={imgData} />
			</ImageContainer>
			<ReviewContainer>
				<Nickname className={colorClass(key)}>
					{reviewData.user_id.nickname}
				</Nickname>
				<ReviewTitle className={colorClass(key)}>
					{reviewData.title}
				</ReviewTitle>
				<ReviewContent className={colorClass(key)}>
					{previewContent(reviewData)}
				</ReviewContent>
			</ReviewContainer>
		</ReviewSection>
	);
};

export default ReviewCard;
