import styled from 'styled-components';

// volunteer Page
export const VolunteerCardBox = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	min-width: 112rem;
	width: 112rem;
`;

export const PageContainer = styled.div`
	margin-bottom: 40rem;
	margin-top: -30rem;
	margin-left: 15rem;
`;

export const VolunteerPageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 0;
	display: flex;
	flex-direction: column;
`;

export const MiddleContainer = styled.div`
	width: 112rem;
	margin: 0 auto;
	margin-top: 10rem;
	margin-bottom: 47rem;
`;
export const BigText = styled.p`
	font-size: 6rem;
	color: ${({ theme }) => theme.colors.green100};
	margin-bottom: 2rem;
`;
export const SubMain = styled.p`
	font-size: 3rem;
`;
export const FfHighLight = styled.span`
	font-size: 3rem;
	color: black;
	background-color: ${({ theme }) => theme.colors.green100};
`;
export const Sub = styled.div`
	position: relative;
`;
export const MainImage = styled.img`
	width: 50%;
	position: absolute;
	top: 0;
	left: 70rem;
`;
export const Background = styled.img`
	width: 90%;
	position: absolute;
	z-index: -999;
	top: -30rem;
	left: 50rem;
`;
export const DogImage = styled.img`
	width: 50%;
	position: absolute;
	z-index: -999;
	top: 20rem;
	left: 30rem;
`;
export const MainContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.green100};
`;
export const SearchContainer = styled.div`
	align-self: center;
`;

export const CardListContainer = styled.div`
	width: 112rem;
	margin: 0 auto;
	margin-top: 10rem;
	margin-bottom: 20rem;
`;

export const NumberWriteContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 112rem;
	margin: 5.8rem auto;
	margin-left: 1rem;
`;
export const ReviewPageContainer = styled.div`
	margin-bottom: 40rem;
`;
export const SecondContainer = styled.div`
	margin: 0 auto;
`;
export const DetailContainer = styled.div`
	margin: 0 auto;
	margin-top: 15rem;
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
export const UserName = styled.p`
	font-size: 2.4rem;
`;
export const Date = styled.p`
	color: #989898;
	font-size: 2rem;
`;
export const BtnContainer = styled.div`
	display: flex;
	margin-left: 2rem;
`;
export const TabBtn1 = styled.button`
	background-color: ${({ theme }) => theme.colors.pink100};
	border: none;
	margin-right: 2rem;
	margin-bottom: -4rem;
	margin-top: 3rem;
	cursor: pointer;
	height: 7rem;
	width: 14rem;
	border-radius: 3rem;
	font-size: 2rem;
	:hover {
		background-color: ${({ theme }) => theme.colors.pink300};
	}
`;
export const TabBtn2 = styled.button`
	background-color: ${({ theme }) => theme.colors.green100};
	border: none;
	margin-right: 2rem;
	margin-bottom: -4rem;
	margin-top: 3rem;
	cursor: pointer;
	height: 7rem;
	width: 14rem;
	border-radius: 3rem;
	font-size: 2rem;
	:hover {
		background-color: ${({ theme }) => theme.colors.green300};
	}
`;
export const Btn = styled.button`
	background-color: #aacb73;
	border-radius: 3.3rem;
	border: none;
	height: 6.6rem;
	width: 13rem;
	margin-top: 2rem;
	cursor: pointer;
	margin-left: 50rem;
`;
export const BtnDelete = styled.button`
	background-color: #ffd4d4;
	border-radius: 3.3rem;
	border: none;
	height: 6.6rem;
	width: 13rem;
	margin-top: 2rem;
	cursor: pointer;
`;
export const Line = styled.hr`
	width: 112rem;
	border: 1px solid #989898;
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
export const Contentdiv = styled.div`
	margin-top: 10rem;
	margin-bottom: 20rem;
`;
export const Content = styled.div`
	font-size: 2.4rem;
	line-height: 5rem;
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
	background-color: ${({ theme }) => theme.colors.pink200};
	color: ${({ theme }) => theme.colors.text};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	width: 20rem;
	font-size: 2rem;
	position: absolute;
	top: 90%;
	left: 8rem;

	input {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
	}
`;
export const BtnReport = styled.button`
	background-color: #f87474;
	border-radius: 3.3rem;
	border: none;
	height: 6.6rem;
	width: 13rem;
	margin-top: 2rem;
	cursor: pointer;
	font-size: 2.5rem;
`;
