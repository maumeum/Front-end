import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Menu from '@components/Menu/Menu.tsx';
import InputForm from '@components/UserForm/InputForm';
import TextAreaForm from '@components/UserForm/TextAreaForm';
import Calendar from '@components/Calendar/Component';
import LargeButton from '@components/Buttons/LargeButton';
import UploadTeamImg from '@components/Profile/TeamImg';
import Tab from '@components/Tab/Tab.tsx';
import alertData from '@utils/swalObject';
import { validPhoneNum } from '@utils/signUpCheck.ts';
import DataType from '@src/types/dataType';
import { TabTypes } from '@src/types/myPageConstants';
import { post, get } from '@api/api';
import useSummitStore from '@src/store/useSummitStore';
import {
	teamNameError,
	introduceError,
	briefHistoryError,
	phoneNumError,
	locationError,
} from '@src/utils/errorMessage';
import {
	TeamForm,
	TopTitle,
	Title,
	TeamType,
	TeamTypeRadio,
	MainContainer,
	ButtonContainer,
	WaitMessage,
} from './style';

interface TeamInfo {
	_id: string;
	user_id: string;
	category: string;
	teamName: string;
	introduction: string;
	briefHistory: string;
	establishmentDate: string;
	phone: string;
	location: string;
	image: string;
	isSubmit: boolean;
	createdAt: string;
}

const AuthTeam = () => {
	const [category, setCategory] = useState<string>('');
	const [teamName, setTeamName] = useState<string>('');
	const [date, setDate] = useState<Date>(new Date());
	const [file, setFile] = useState<File | null>(null);
	const [introduction, setIntroduction] = useState<string>('');
	const [briefHistory, setBriefHistory] = useState<string>('');
	const [location, setLocation] = useState<string>('');
	const [phoneNum, setPhoneNum] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const [beforeImg, setBeforeImg] = useState<string>('');
	const [isEditMode, setIsEditMode] = useState<boolean>(false); //수정모드

	const tabs = [TabTypes.GROUP_CERTIFICATION];
	const { isSubmit, setIsSubmit } = useSummitStore();
	const navigate = useNavigate();

	//제출 여부 확인
	useEffect(() => {
		setIsSubmit();
		isSubmit && setIsEditMode(true);
	}, []);

	useEffect(() => {
		const fetchTeamInfo = async () => {
			try {
				const getTeamInfo = await get<DataType>('/api/team/auth');
				const getTeamInfoData = getTeamInfo.data as TeamInfo;
				const {
					category,
					teamName,
					introduction,
					briefHistory,
					establishmentDate,
					phone,
					location,
					image,
				} = getTeamInfoData;
				setCategory(category);
				setTeamName(teamName);
				setBriefHistory(briefHistory);
				setIntroduction(introduction);
				setDate(new Date(establishmentDate));
				setPhoneNum(phone);
				setLocation(location);
				setBeforeImg(image);
			} catch (error) {
				console.error('Error fetching team info:', error);
			}
		};

		if (isSubmit) {
			//제출버튼이 눌린경우에만 데이터를 받아옴
			fetchTeamInfo();
		}
	}, [isSubmit]);

	// inputValue 함수
	const getFormChanger =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSubmit(false);
			setter(e.target.value);
		};

	const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		// 상태 초기화
		setSubmit(false);
		e.preventDefault();
		setSubmit(true);

		// 팀 정보 저장
		const formData = new FormData();
		const establishment = date.toISOString();
		formData.append('category', category);
		formData.append('teamName', teamName);
		formData.append('introduction', introduction);
		formData.append('briefHistory', briefHistory);
		formData.append('establishmentDate', establishment);
		formData.append('phone', phoneNum);
		formData.append('location', location);
		if (file) {
			formData.append('image', file);
		}
		await post<DataType>('/api/team/auth', formData, {});
		navigate('/mypage');
		Swal.fire(alertData.waitTeamCert);
	};

	return (
		<Container>
			<MenuBar>
				<Menu title={'마이페이지'} />
			</MenuBar>
			<Main>
				<TabMenu>
					<Tab tabs={tabs} />
				</TabMenu>
				<TeamForm>
					<MainContainer>
						<WaitMessage>
							{isSubmit && (
								<h1>현재 관리자가 검토중입니다. 조금만 기다려주세요:)</h1>
							)}
						</WaitMessage>
						<TopTitle>팀 유형</TopTitle>
						<TeamType>
							<TeamTypeRadio
								type='radio'
								name='category'
								value='기관'
								onChange={getFormChanger(setCategory)}
							/>
							기관
						</TeamType>
						<TeamType>
							<TeamTypeRadio
								type='radio'
								name='category'
								value='개인/동아리'
								onChange={getFormChanger(setCategory)}
							/>
							개인/동아리
						</TeamType>
						<Title>프로젝트 팀명</Title>
						<InputForm
							submit={submit}
							inputType='text'
							name='teamName'
							placeholder='프로젝트 팀명을 입력해주세요.'
							value={teamName}
							onChangeFn={getFormChanger(setTeamName)}
							errorMessage={teamNameError}
						/>
						<Title>대표 이미지 등록</Title>
						<UploadTeamImg setFile={setFile} />
						<Title>설립일</Title>
						<Calendar selectedDate={date} setSelectedDate={setDate} />
						<Title>프로젝트 팀 소개</Title>
						<TextAreaForm
							submit={submit}
							name='introduction'
							placeholder='프로젝트 팀 소개 문구를 1~3줄로 적어주세요.'
							value={introduction}
							onChangeFn={getFormChanger(setIntroduction)}
							errorMessage={introduceError}
						/>
						<Title>주요 활동과 목적</Title>
						<TextAreaForm
							submit={submit}
							name='briefHistory'
							placeholder='프로젝트 팀이 기존에 진행하고 있는 활동의 분야, 목적, 내용을 상세히 작성해주세요.'
							value={briefHistory}
							onChangeFn={getFormChanger(setBriefHistory)}
							errorMessage={briefHistoryError}
						/>
						<Title>전화번호</Title>
						<InputForm
							submit={submit}
							inputType='text'
							name='phoneNum'
							placeholder='전화번호를 입력해주세요.'
							value={phoneNum}
							onChangeFn={getFormChanger(setPhoneNum)}
							errorMessage={phoneNumError}
							validFn={validPhoneNum}
						/>
						<Title>소재지 주소</Title>
						<InputForm
							submit={submit}
							inputType='text'
							name='location'
							placeholder='소재지 주소를 입력해주세요.'
							value={location}
							onChangeFn={getFormChanger(setLocation)}
							errorMessage={locationError}
						/>
					</MainContainer>
					<ButtonContainer>
						{isSubmit ? ( //음 수정하기로 하는게 맞는지 한번 물어보기
							<LargeButton onClick={clickHandler}>수정하기</LargeButton>
						) : (
							<LargeButton
								onClick={clickHandler}
								disabled={isSubmit ? true : false}>
								제출하기
							</LargeButton>
						)}
					</ButtonContainer>
				</TeamForm>
			</Main>
		</Container>
	);
};

export default AuthTeam;
