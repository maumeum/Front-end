import React from 'react';
import { useState } from 'react';
import {
	TextContainer,
	Container,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
	ContentInput,
	TextLength,
} from '../WritePage/WritePageStyle';
import Calendar from '@components/Calendar/Calendar';

type WritePageProps = {
	onSave: (inputTitle: string, textContent: string) => void;
	onCancel: () => void;
};

const WritePage = ({ onSave, onCancel }: WritePageProps) => {
	const [content, setContent] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [endDate, setEndDate] = useState<Date>(new Date());

	const onClickHandler = () => {
		onSave(inputTitle, content);
		clearContent();
	};

	const handelInputContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value;
		if (text.length <= 2000) {
			setContent(text);
		}
	};

	const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setInputTitle(text);
	};

	const deleteContent = () => {
		clearContent();
		onCancel();
	};

	const clearContent = () => {
		setInputTitle('');
		setContent('');
	};

	return (
		<>
			<Container>
				<TitleInput
					placeholder='모집하려는 봉사활동을 잘 나타낼 수 있는 제목을 지어주세요.'
					value={inputTitle}
					onChange={handleInputTitle}
				/>
				<TitleInput
					placeholder='어떤 종류의 봉사활동인지 입력해주세요.'
					value={inputTitle}
					onChange={handleInputTitle}
				/>
				<TitleInput
					placeholder='모집인원을 입력해주세요. (단위: 명)'
					value={inputTitle}
					onChange={handleInputTitle}
				/>
				<TitleInput
					placeholder='모집 마감일을 선택해주세요.'
					value={inputTitle}
					onChange={handleInputTitle}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}>
						<p>활동 시작일</p>
						<Calendar selectedDate={startDate} setSelectedDate={setStartDate} />
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}>
						<p>활동 종료일</p>
						<Calendar selectedDate={endDate} setSelectedDate={setEndDate} />
					</div>
				</div>
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

export default WritePage;
