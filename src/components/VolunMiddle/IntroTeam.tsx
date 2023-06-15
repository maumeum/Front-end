import { useState, useEffect } from 'react';
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
import { get } from '@api/api';

const apiURL = import.meta.env.VITE_API_URL;

type IntroTeamProps = {
	postId: string;
	Uuid: string;
};
// eslint-disable-next-line react/prop-types
const IntroTeam: React.FC<IntroTeamProps> = ({ postId, Uuid }) => {
	const [post, setPost] = useState<any>([]);

	useEffect(() => {
		const fetchPost = async () => {
			const response = await get<DataType>('/api/team/detail', {
				data: {
					uuid: Uuid,
				},
			});
			setPost(response);
			console.log('여기', response);
		};
		fetchPost();
	}, []);

	return (
		<>
			<Container>
				<TopArea>
					<Cover>
						<ImgContainer>
							<Img src={car} alt='Team-image' />
						</ImgContainer>
						<TextContainer>
							<Team>기관</Team>
							<TeamName>d</TeamName>
						</TextContainer>
					</Cover>
				</TopArea>
				<TextArea>
					<DivideContent>
						<TextCover>
							<Square></Square>
							<SubTitle>팀 소개</SubTitle>
						</TextCover>
						<Content>
							포인핸드는 사지 않고 입양하는 문화를 만드는 소셜벤처입니다
						</Content>
					</DivideContent>

					<DivideContent>
						<TextCover>
							<Square></Square>
							<SubTitle>주요활동과 목적</SubTitle>
						</TextCover>
						<Content>
							포인핸드는 사지 않고 입양하는 문화를 만드는 소셜벤처입니다
						</Content>
					</DivideContent>
					<BottomContainer>
						<SubTitle>설립일자</SubTitle>
						<Team>2320.15.14</Team>
					</BottomContainer>
					<BottomContainer>
						<SubTitle>소재지 주소</SubTitle>
						<Team>2320.15.14</Team>
					</BottomContainer>
					<BottomContainer>
						<SubTitle>전화번호</SubTitle>
						<Team>2320.15.14</Team>
					</BottomContainer>
				</TextArea>
			</Container>
		</>
	);
};

export default IntroTeam;
