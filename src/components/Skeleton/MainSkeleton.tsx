import {
	TopSlogan,
	TopContainer,
	ReviewContainer,
	IntroduceContainer,
	IntroducePage,
	IntroduceTitle,
	IntroduceDesc,
	CommunityContainer,
	SecIntroduceTitle,
	MidSlogan,
	VolunteerContainer,
} from '@pages/mainPage/style';
import {
	SkeletonReviewSection,
	SkeletonImage,
	SkeletonReviewContainer,
	Nickname,
	SkeletonTitle,
	ReviewContent,
	SkeletonVolunteerSection,
	VolunteerImage,
} from './style';

const MainSkeleton = () => {
	const reviewArr = new Array(4).fill(0);
	const volunteerArr = new Array(16).fill(0);

	const colorClass = (key: number) => {
		if (key === 0) {
			return 'one';
		} else if (key === 2) {
			return 'three';
		}
	};

	return (
		<>
			<TopSlogan></TopSlogan>
			<TopContainer>
				<ReviewContainer>
					{reviewArr.map((_, index) => (
						<SkeletonReviewSection key={index} className={colorClass(index)}>
							<SkeletonImage />
							<SkeletonReviewContainer>
								<Nickname />
								<SkeletonTitle />
								<ReviewContent />
							</SkeletonReviewContainer>
						</SkeletonReviewSection>
					))}
				</ReviewContainer>
				<IntroduceContainer>
					<IntroducePage>
						<IntroduceTitle />
						<IntroduceDesc />
					</IntroducePage>
					<CommunityContainer>
						<SecIntroduceTitle />
						<IntroduceDesc />
					</CommunityContainer>
				</IntroduceContainer>
			</TopContainer>
			<MidSlogan></MidSlogan>
			<VolunteerContainer>
				{volunteerArr.map((_, index) => (
					<SkeletonVolunteerSection key={index}>
						<VolunteerImage />
					</SkeletonVolunteerSection>
				))}
			</VolunteerContainer>
		</>
	);
};

export default MainSkeleton;
