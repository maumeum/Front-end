import React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import { get } from '@api/api';
import WritePageProps from './WritePageProps';
import DataType from '@src/types/dataType';
import {
	TextContainer,
	Container,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
	ContentInput,
	TextLength,
	LayoutContainer,
	LayoutChildContainer,
} from '@components/WritePage/WritePageStyle';
import VolunteerCalendar from '@components/Calendar/VolunteerCalendar';
import Selector from '@components/Selector/Selector.tsx';
import actTypes from '@src/types/actTypeConstants';
import { Title, TeamType, TeamTypeRadio } from '@pages/myPage/style';
import TeamInfo from '@src/types/writerUserTeamType.ts';

interface VolunteerWritePageProps extends Omit<WritePageProps, 'onSave'> {
	onSave: (
		inputTitle: string,
		textContent: string,
		selectedActType: string,
		inputRegisterCount: string,
		teenager: boolean,
		deadline: Date,
		startDate: Date,
		endDate: Date,
		centName: string,
	) => void;
}

const VolunteerWritePage = ({ onSave, onCancel }: VolunteerWritePageProps) => {
	const [content, setContent] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const [selectedActType, setSelectedActType] = useState('');
	const [inputRegisterCount, setInputRegisterCount] = useState('');
	const [teenager, setTeenager] = useState(true);
	const [deadline, setDeadline] = useState<Date>(new Date());
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [endDate, setEndDate] = useState<Date>(new Date());
	const [centName, setCentName] = useState<string>('');

	// 만약 StartDate가 deadline보다 작다면 유저에게 경고창을 띄고, 다시 작성하게 한다.
	// 인증된 유저만 봉사활동 글 등록할 수 있도록 로직 추가했읍니다!!!!!!!!!!!!!!
	// user 필드에서 authorization이 true인 경우만 글 작성됩니다 아니면 에러를 띄워줍니다요.

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getUserInfoData = await get<DataType>('/api/team/auth', {});
				const responseData = getUserInfoData.data as TeamInfo;
				const { teamName } = responseData;
				setCentName(teamName);
			} catch (error) {
				Swal.fire(
					alertData.errorMessage('데이터를 가져오는데 실패하였습니다.'),
				);
			}
		};

		fetchData();
	}, []);

	const onClickHandler = () => {
		onSave(
			inputTitle,
			content,
			selectedActType,
			inputRegisterCount,
			teenager,
			deadline,
			startDate,
			endDate,
			centName,
		);
		clearContentData();
	};

	const handelInputContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value;
		if (text.length <= 2000) {
			setContent(text);
		}
	};

	const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		if (text.length <= 40) {
			setInputTitle(text);
		}
	};

	const handleInputCategory = (selectedValue: string) => {
		setSelectedActType(selectedValue);
		console.log(`selectedValue가 ${selectedValue}로 변경됨!`);
	};

	const handleInputRegisterCount = (e: React.ChangeEvent<HTMLInputElement>) => {
		const count = e.target.value;
		setInputRegisterCount(count);
	};

	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setTeenager(value === 'teenager');
	};

	const deleteContent = () => {
		clearContentData();
		onCancel();
	};

	const clearContentData = () => {
		setInputTitle('');
		setContent('');
		setSelectedActType('');
		setInputRegisterCount('');
		setTeenager(true);
		setDeadline(new Date());
		setStartDate(new Date());
		setEndDate(new Date());
		setCentName('');
	};

	return (
		<>
			<Container>
				<div>
					<Title>제목</Title>
					<TitleInput
						placeholder={`[${centName}] 팀네임 포함 40자 이하 작성`}
						value={inputTitle}
						onChange={handleInputTitle}
					/>
				</div>
				<div>
					<Title>미성년자 참여 여부</Title>
					<TeamType>
						<TeamTypeRadio
							type='radio'
							value='teenager'
							checked={teenager}
							onChange={handleRadioChange}
						/>
						가능
					</TeamType>
					<TeamType>
						<TeamTypeRadio
							type='radio'
							value='adultOnly'
							checked={!teenager}
							onChange={handleRadioChange}
						/>
						불가능
					</TeamType>
				</div>
				<div>
					<Title>카테고리</Title>
					<Selector
						value={selectedActType}
						onChange={handleInputCategory}
						options={[
							{ value: actTypes.OLD, label: '노인' },
							{ value: actTypes.FOOD, label: '급식' },
							{ value: actTypes.ECO, label: '환경' },
							{ value: actTypes.ANIMAL, label: '동물' },
							{ value: actTypes.DISABLE, label: '장애인' },
							{ value: actTypes.SUPPORT, label: '생활편의지원' },
							{ value: actTypes.MEDICAL, label: '의료' },
							{ value: actTypes.EDU, label: '교육' },
						]}
					/>
				</div>
				<div>
					<Title>모집인원</Title>
					<TitleInput
						placeholder='모집인원을 입력해주세요. (숫자만 입력 가능)'
						value={inputRegisterCount}
						onChange={handleInputRegisterCount}
					/>
				</div>
				<LayoutContainer>
					<LayoutChildContainer>
						<Title>모집 마감일</Title>
						<VolunteerCalendar
							selectedDate={deadline}
							setSelectedDate={setDeadline}
						/>
					</LayoutChildContainer>
					<LayoutChildContainer>
						<Title>활동 시작일</Title>
						<VolunteerCalendar
							selectedDate={startDate}
							setSelectedDate={setStartDate}
						/>
					</LayoutChildContainer>
					<LayoutChildContainer>
						<Title>활동 종료일</Title>
						<VolunteerCalendar
							selectedDate={endDate}
							setSelectedDate={setEndDate}
						/>
					</LayoutChildContainer>
				</LayoutContainer>
				<TextContainer>
					<ContentInput
						placeholder='봉사활동 주제와 일정을 포함하여 내용을 작성해주세요. 썸네일을 올려서 활동을 소개해보세요.'
						value={content}
						onChange={handelInputContent}
						maxLength={2000}
					/>
				</TextContainer>
				<TextLength>{content.length}/2000</TextLength>
				<ButtonContainer>
					<CancelButton onClick={deleteContent}>취소</CancelButton>
					<SubmitButton onClick={onClickHandler}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default VolunteerWritePage;
