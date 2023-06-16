import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import {
	Container,
	TopArea,
	ImgContainer,
	Img,
	Cover,
	TextContainer,
	Team,
	TeamName,
	TextArea,
	TextCover,
	Square,
	SubTitle,
	Content,
	DivideContent,
	BottomContainer,
} from './IntroTeamStyle';
import car from '@assets/images/car.png';
import DataType from '@src/types/dataType.ts';
import { post } from '@api/api';
import { TeamType } from '@src/types/userType';
import phoneNumSplit from '@utils/phoneNumSplit';

type IntroTeamProps = {
	uuid: string;
};

const apiURL = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react/prop-types
const IntroTeam: React.FC<IntroTeamProps> = ({ uuid }) => {
	const [teamData, setTeamData] = useState<TeamType>({
		category: '',
		teamName: '',
		introduction: '',
		briefHistory: '',
		establishmentDate: '',
		phone: '',
		location: '',
		image: '',
	});
	const establishDate = dayjs(teamData.establishmentDate)
		.locale('ko')
		.format('YYYY년 MM월 DD일');
	const image = `${apiURL}/${teamData.image}`;

	useEffect(() => {
		const fetchData = async () => {
			console.log('uuid', uuid);
			const responseData = await post<DataType>('/api/team/detail', {
				uuid,
			});
			setTeamData(responseData.data);
		};
		fetchData();
	}, []);

	return (
		<>
			<Container>
				<TopArea>
					<Cover>
						<ImgContainer>
							<Img src={image} alt='Team-image' />
						</ImgContainer>
						<TextContainer>
							<Team>{teamData.category}</Team>
							<TeamName>{teamData.teamName}</TeamName>
						</TextContainer>
					</Cover>
				</TopArea>
				<TextArea>
					<DivideContent>
						<TextCover>
							<Square></Square>
							<SubTitle>{teamData.teamName}</SubTitle>
						</TextCover>
						<Content>{teamData.introduction}</Content>
					</DivideContent>

					<DivideContent>
						<TextCover>
							<Square></Square>
							<SubTitle>주요활동과 목적</SubTitle>
						</TextCover>
						<Content>{teamData.briefHistory}</Content>
					</DivideContent>
					<BottomContainer>
						<SubTitle>설립일자</SubTitle>
						<Team>{establishDate}</Team>
					</BottomContainer>
					<BottomContainer>
						<SubTitle>소재지 주소</SubTitle>
						<Team>{teamData.location}</Team>
					</BottomContainer>
					<BottomContainer>
						<SubTitle>전화번호</SubTitle>
						<Team>{phoneNumSplit(teamData.phone)}</Team>
					</BottomContainer>
				</TextArea>
			</Container>
		</>
	);
};

export default IntroTeam;
