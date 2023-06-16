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
	position: relative;
	display: flex;
	margin: 0;
	padding: 0;
`;

export const CardListContainer = styled.div`
	min-width: 112rem;
	margin-left: 18rem;
	margin-bottom: 12rem;
`;

export const NumberWriteContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 112rem;
	margin: 5.8rem auto;
`;
export const ReviewPageContainer = styled.div`
	margin-bottom: 40rem;
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
