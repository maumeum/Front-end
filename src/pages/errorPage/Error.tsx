import errorImg from '@assets/images/error.png';

import styled from 'styled-components';

const Error = () => {
	return (
		<ErrorSection>
			<ErrorImg src={errorImg} alt='error' />
			<ErrorMessage>존재하지 않는 페이지입니다. 주소를 확인하세요</ErrorMessage>
		</ErrorSection>
	);
};

export default Error;

const ErrorSection = styled.div`
	text-align: center;
`;

const ErrorImg = styled.img`
	margin-top: 6rem;
`;

const ErrorMessage = styled.h1`
	margin: 0 auto 10rem;
	font-size: 2.5rem;
	color: #888888;
`;
