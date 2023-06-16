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
import LargeSelector from '@components/Selector/LargeSelector.tsx';
import actTypes from '@src/types/actTypeConstants';
import { Title, TeamType, TeamTypeRadio } from '@pages/myPage/style';
import TeamInfo from '@src/types/writerUserTeamType.ts';
import { useNavigate } from 'react-router-dom';

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
	const navigate = useNavigate();
	const [content, setContent] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const [selectedActType, setSelectedActType] = useState('');
	const [inputRegisterCount, setInputRegisterCount] = useState('');
	const [teenager, setTeenager] = useState(true);
	const [deadline, setDeadline] = useState<Date>(new Date());
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [endDate, setEndDate] = useState<Date>(new Date());
	const [centName, setCentName] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getUserInfoData = await get<DataType>('/api/team/auth', {});
				const responseData = getUserInfoData.data as TeamInfo;
				const { teamName } = responseData;
				setCentName(teamName);
				console.log(responseData);
			} catch (error) {
				Swal.fire(
					alertData.errorMessage(
						'단체 인증이 완료된 유저만 글을 작성할 수 있습니다.',
					),
				);
				navigate('/volunteers/ongoing');
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
						placeholder={`[${centName}] 40자 이하 작성`}
						value={inputTitle}
						onChange={handleInputTitle}
						style={{ marginBottom: '0' }}
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
					<LargeSelector
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
						style={{ marginBottom: '0' }}
					/>
				</div>
				<LayoutContainer>
					<LayoutChildContainer>
						<Title
							style={{
								textAlign: 'left',
								paddingRight: '20rem',
							}}>
							모집 마감일
						</Title>
						<VolunteerCalendar
							selectedDate={deadline}
							setSelectedDate={setDeadline}
						/>
					</LayoutChildContainer>
					<LayoutChildContainer>
						<Title style={{ textAlign: 'left', paddingRight: '20rem' }}>
							활동 시작일
						</Title>
						<VolunteerCalendar
							selectedDate={startDate}
							setSelectedDate={setStartDate}
						/>
					</LayoutChildContainer>
					<LayoutChildContainer>
						<Title style={{ textAlign: 'left', paddingRight: '20rem' }}>
							활동 종료일
						</Title>
						<VolunteerCalendar
							selectedDate={endDate}
							setSelectedDate={setEndDate}
						/>
					</LayoutChildContainer>
				</LayoutContainer>
				<TextContainer style={{ marginTop: '2rem' }}>
					<ContentInput
						placeholder='봉사활동 주제와 일정을 포함하여 내용을 작성해주세요.&#13;&#10;썸네일을 올려서 활동을 나타내는 대표 이미지를 등록해보세요.'
						value={content}
						onChange={handelInputContent}
						maxLength={2000}
						style={{ height: '65rem' }}
					/>
				</TextContainer>
				<TextLength>{content.length}/2000</TextLength>
				<ButtonContainer style={{ position: 'relative', bottom: '6.3rem' }}>
					<CancelButton onClick={deleteContent}>취소</CancelButton>
					<SubmitButton onClick={onClickHandler}>등록</SubmitButton>
				</ButtonContainer>
			</Container>
		</>
	);
};

export default VolunteerWritePage;
