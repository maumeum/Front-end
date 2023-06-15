import { useEffect, useState } from 'react';
import car from '@assets/images/car.png';
import { remainingDaysCalculator, getCurrent } from '@utils/dateUtils.ts';
import { truncateDate } from '@utils/truncateDataFns';
import {
	Title,
	IntroContainer,
	ImgContainer,
	TeamInfo,
	Line,
	InfoBox,
	ApplyBox,
	ButtonContainer,
	Divider,
} from '@src/components/VolunIntro/volunInfo.ts';
import star from '@assets/icons/star.svg';
import LargeButton from '../Buttons/LargeButton';
import { useParams } from 'react-router-dom';
import { get, post } from '@api/api';
import DataType from '@src/types/dataType';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject';

// const remainingDays = remainingDaysCalculator(currentDate, deadlineDate);

const truncateTitle = (title: string) => {
	if (title.length > 40) {
		const truncatedName = title.slice(0, 40);
		return truncatedName;
	}
	return title;
};

function VolunInfo() {
	const { postId } = useParams() as { postId: string };
	const [title, setTitle] = useState<string>('');
	const [registerCount, setRegisterCount] = useState<string>('');
	const [deadline, setDeadline] = useState<string>('');
	const [image, setImage] = useState<string>('');
	const [startDate, setStartDate] = useState<string>('');
	const [endDate, setEndDate] = useState<string>('');
	const [applyCount, setApplyCount] = useState<string>('');
	const [actType, setActType] = useState<string>('');
	const [statusName, setStatusName] = useState<string>('');
	const currentDate = getCurrent();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const response = await get<DataType>(`/api/volunteers/${postId}`);
			setTitle(response.data.title);
			setRegisterCount(response.data.registerCount);
			setDeadline(response.data.deadline);
			setImage(response.data.images[0]);
			setStartDate(response.data.startDate);
			setEndDate(response.data.endDate);
			setDeadline(response.data.deadline);
			setApplyCount(response.data.applyCount);
			setActType(response.data.actType);
			setStatusName(response.data.statusName);
		};

		fetchData();
	}, []);

	const clickApply = async () => {
		try {
			await post('/api/applications', {
				volunteer_id: postId,
			});

			navigate('/mypage/history');
			Swal.fire(alertData.successMessage('참여신청 되었습니다!:)'));
		} catch (e) {
			Swal.fire(alertData.successMessage('참여신청에 실패했습니다 :('));
		}
	};

	return (
		<>
			<div>
				<IntroContainer>
					<ImgContainer>
						<img src={car} alt='팀소개사진' />
					</ImgContainer>
					<TeamInfo>
						<Title>{truncateTitle(title)}</Title>
						<Line></Line>
						<InfoBox>
							<ApplyBox>
								<img src={star} alt='스타배지' />
								<h1>현재 {applyCount}명 신청중!</h1>
							</ApplyBox>
							<Divider />
							<p>목표인원 : {registerCount}명</p>
							<p>활동유형 : {actType}</p>
							<p>
								모집기간 : {truncateDate(currentDate)} ~{' '}
								{truncateDate(deadline)} (현재&nbsp;
								{remainingDaysCalculator(currentDate, deadline)}일) 남음
							</p>
							<p>
								활동기간 :{truncateDate(startDate)} ~ {truncateDate(endDate)}
							</p>
						</InfoBox>
						<ButtonContainer>
							<LargeButton onClick={clickApply} apply={true}>
								같이 참여하기
							</LargeButton>
						</ButtonContainer>
					</TeamInfo>
				</IntroContainer>
			</div>
		</>
	);
}

export default VolunInfo;
