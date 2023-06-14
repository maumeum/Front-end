import React from 'react';
import { useState } from 'react';
import WritePageProps from './WritePageProps';
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
import UploadThumbnail from './UploadThumbnail';
import actTypes from '@src/types/actTypeConstants';

interface VolunteerWritePageProps extends Omit<WritePageProps, 'onSave'> {
	onSave: (
		inputTitle: string,
		textContent: string,
		selectedActType: string,
		thumbnail: File | null,
		image: File | null,
		inputRegisterCount: number,
		deadline: Date,
		startDate: Date,
		endDate: Date,
	) => void;
}

const VolunteerWritePage = ({ onSave, onCancel }: VolunteerWritePageProps) => {
	const [content, setContent] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const [selectedActType, setSelectedActType] = useState('');
	const [thumbnail, setThumbnail] = useState<File | null>(null);
	const [image, setImage] = useState<File | null>(null);
	const [inputRegisterCount, setInputRegisterCount] = useState<number>(0);
	const [deadline, setDeadline] = useState<Date>(new Date());
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [endDate, setEndDate] = useState<Date>(new Date());

	// 만약 StartDate가 deadline보다 작다면 유저에게 경고창을 띄고, 다시 작성하게 한다.
	// 인증된 유저만 봉사활동 글 등록할 수 있도록 로직 추가했읍니다!!!!!!!!!!!!!!
	// user 필드에서 authorization이 true인 경우만 글 작성됩니다 아니면 에러를 띄워줍니다요.

	const onClickHandler = () => {
		onSave(
			inputTitle,
			content,
			selectedActType,
			thumbnail,
			image,
			inputRegisterCount,
			deadline,
			startDate,
			endDate,
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
		const count = Number(e.target.value);
		setInputRegisterCount(count);
	};

	const deleteContent = () => {
		clearContentData();
		onCancel();
	};

	const clearContentData = () => {
		setInputTitle('');
		setContent('');
		setSelectedActType('');
		setInputRegisterCount(0);
		setDeadline(new Date());
		setStartDate(new Date());
		setEndDate(new Date());
		setThumbnail(null);
		setImage(null);
	};

	return (
		<>
			<Container>
				<TitleInput
					placeholder='모집하려는 봉사활동을 잘 나타낼 수 있는 제목을 지어주세요. (40자 이하)'
					value={inputTitle}
					onChange={handleInputTitle}
				/>
				<div>
					<h2>카테고리</h2>
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
					<h2>썸네일 등록</h2>
					<UploadThumbnail setFile={setThumbnail} imageType='thumbnail' />
				</div>
				<div>
					<h2>이미지 등록</h2>
					<UploadThumbnail setFile={setImage} imageType='image' />
				</div>
				<TitleInput
					placeholder='모집인원을 입력해주세요. (숫자만 입력해주세요.)'
					value={inputRegisterCount === 0 ? '' : inputRegisterCount}
					onChange={handleInputRegisterCount}
				/>
				<LayoutContainer>
					<LayoutChildContainer>
						<h2>모집 마감일</h2>
						<VolunteerCalendar
							selectedDate={deadline}
							setSelectedDate={setDeadline}
						/>
					</LayoutChildContainer>
					<LayoutChildContainer>
						<h2>활동 시작일</h2>
						<VolunteerCalendar
							selectedDate={startDate}
							setSelectedDate={setStartDate}
						/>
					</LayoutChildContainer>
					<LayoutChildContainer>
						<h2>활동 종료일</h2>
						<VolunteerCalendar
							selectedDate={endDate}
							setSelectedDate={setEndDate}
						/>
					</LayoutChildContainer>
				</LayoutContainer>
				<TextContainer>
					<ContentInput
						placeholder='봉사활동 주제와 일정을 포함하여 내용을 작성해주세요. 썸네일용 이미지는 필수입니다.'
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
