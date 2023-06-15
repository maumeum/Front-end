import { useEffect } from 'react';
import car from '@assets/images/car.png';
import { remainingDaysCalculator } from '@utils/dateUtils.ts';
import {
	Title,
	IntroContainer,
	ImgContainer,
	TeamInfo,
	ButtonContainer,
} from '@src/components/VolunIntro/volunInfo.ts';
import LargeButton from '../Buttons/LargeButton';
import { useParams } from 'react-router-dom';
import { get } from '@api/api';

// const remainingDays = remainingDaysCalculator(currentDate, deadlineDate);

const truncateTitle = (title: string) => {
	//제목 자르기
	if (title.length > 40) {
		const truncatedName = title.slice(0, 40);
		return truncatedName;
	}
};

function VolunInfo() {
	const { postId } = useParams() as { postId: string };

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get(`/api/volunteers/${postId}`);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);
	return (
		<>
			<div>
				<Title>[포인핸드]남양주 어딘가 유기견 보호활동어쩌구</Title>
				<IntroContainer>
					<ImgContainer>
						<img src={car} alt='팀소개사진' />
					</ImgContainer>
					<TeamInfo>
						<h1>현재 10명 신청중</h1>
						<p>목표인원 15명</p>
						<p>모집종료까지 3일 남음</p>
						<p>활동유형 동물보호</p>
						<p>모집기간</p>
						<p>활동기간</p>
						<ButtonContainer>
							<LargeButton>같이 참여하기</LargeButton>
						</ButtonContainer>
					</TeamInfo>
				</IntroContainer>
			</div>
		</>
	);
}

export default VolunInfo;
