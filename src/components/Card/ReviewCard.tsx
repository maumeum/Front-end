import React from 'react';

import { ReviewSection, ImageContainer, ReviewImage, ReviewContainer, Nickname, ReviewTitle, ReviewContent } from './card.ts';
import imgData from '@src/assets/images/volunteer2.jpg';

interface listType {
  title: string,
  content: string,
  images: string[],
  volunteer_id: string,
  user_id: {
    nickname: string
  }
  index: number;
}

interface ReviewCardProps {
  data: listType
}

const ReviewCard = ({ data }: ReviewCardProps) => {
	const key = data.index;

	//Content 미리보기 함수
	const previewContent = (data:listType) => {
		const content = data.content;

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
				<Nickname className={colorClass(key)}>{data.user_id.nickname}</Nickname>
				<ReviewTitle className={colorClass(key)}>{data.title}</ReviewTitle>
				<ReviewContent className={colorClass(key)}>{previewContent(data)}</ReviewContent>
			</ReviewContainer>
		</ReviewSection>
	);
};

export default ReviewCard;