import styled from 'styled-components';

export const PageContainer = styled.div`
	margin-bottom: 40rem;
	margin-top: 0;
`;

export const MenuBar = styled.div`
	width: 10%;
	min-width: 15.7rem;
	border-radius: 5px;
	margin: -7rem 0 0 10rem;
`;

export const MainContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.pink200};
`;

export const QuestionMainContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.yellow100};
`;

export const FFImageArea = styled.img`
	width: 33%;
	margin-left: auto;
`;

export const TextArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 25rem;
	margin-top: 3rem;
`;
export const MiddleContainer = styled.div`
	display: block;
	margin-left: 25rem;
	margin-bottom: 10rem;
`;
export const BigText = styled.p`
	font-size: 5rem;
	letter-spacing: 0.3rem;
	color: #313739;
	margin-left: 25rem;
`;
export const Sub = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 25rem;
	p {
		font-size: 2rem;
		margin-top: -2rem;
		letter-spacing: 0.2rem;
	}
`;
export const FfHighLight = styled.span`
	background-color: #d2f3ff;
`;
export const MainTitle = styled.p`
	font-size: 7rem;
	text-align: left;
	color: #313739;
	margin: 0;
	margin-bottom: 5rem;
`;

export const Subtitle = styled.p`
	font-size: 2.5rem;
	text-align: left;
	margin: 0;
	line-height: 5rem;
`;
export const Highlight = styled.span`
	background-color: ${({ theme }) => theme.colors.pink200};
`;
export const NumberWriteContainer = styled.div`
	display: flex;
	justify-content: end;
	width: 101rem;
	margin: 5.8rem auto;
`;
export const ReviewPageContainer = styled.div`
	margin-bottom: 40rem;
`;

export const DetailContainer = styled.div`
	margin: 0 auto;
	margin-top: 15rem;
	min-height: 60rem;
	width: 80%;
`;
export const Header = styled.header`
	margin: 0 auto;
	width: 112rem;
`;
export const Title = styled.p`
	font-size: 3.2rem;
	line-height: 3.9rem;
`;
export const SubContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const InfoBox = styled.div``;
export const NameBox = styled.div`
	display: flex;
`;
export const UserName = styled.p`
	font-size: 2rem;
	margin-right: 1rem;
`;
export const NanoId = styled.p`
	font-size: 1.8rem;
	margin-top: 3rem;
	color: #aaaaaa;
`;

export const Date = styled.p`
	color: #989898;
	font-size: 1%.6;
`;
export const Btn = styled.button`
	background-color: #aacb73;
	border-radius: 10%;
	border: none;
	height: 5rem;
	width: 10rem;
	margin-top: 2rem;
	cursor: pointer;
	margin-left: 60rem;
	font-size: 2rem;
	color: #ffffff;
`;
export const BtnDelete = styled.button`
	background-color: #ffd4d4;
	border-radius: 10%;
	border: none;
	height: 5rem;
	width: 10rem;
	margin-top: 2rem;
	cursor: pointer;
	font-size: 2rem;
	color: #ffffff;
`;
export const Line = styled.hr`
	width: 112rem;
	border: 1px solid #afcd81;
`;
export const ContentContainer = styled.div`
	width: 112rem;
	margin: 0 auto;
	margin-top: 10rem;
`;
export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

export const Content = styled.div`
	font-size: 2rem;
	line-height: 5rem;
	border-radius: 0.7rem;
`;
export const Container = styled.div`
	display: block;
	position: relative;
	width: 112rem;
	margin: 0 auto;
`;
export const ImageArea = styled.label`
	display: inline-block;
	padding: 8px 16px;
	text-align: center;
	background-color: var(--color--footer);
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	width: 20rem;
	font-size: 2rem;
	position: absolute;
	top: 70rem;
	left: 9rem;

	input {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
	}
`;
export const BtnReport = styled.button`
	background-color: inherit;
	border-radius: 3.3rem;
	border: none;
	height: 6.6rem;
	width: 13rem;
	margin-top: 2rem;
	cursor: pointer;
	font-size: 2rem;
	color: #ff9c9c;
`;
export const SearchContainer = styled.div`
	display: flex;
`;

export const BottomArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 15rem;
`;
