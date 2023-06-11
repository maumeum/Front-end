import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getToken, deleteToken } from '@src/api/Token';
import MyPageButton from '../MyPage/MyPageButton';
import {
	HeaderSection,
	HeaderContainer,
	LogoContainer,
	MainLogo,
	NavContainer,
	NavCategory,
	UtilContainer,
	LoginButton,
	SearchButton,
	SearchIcon,
} from './style';
import mainLogo from '@assets/icons/mainlogo.svg';
import searchLogo from '@assets/icons/search.svg';

const Header = () => {
	const [checkToken, setCheckToken] = useState<boolean>(false);
	const [click, setClick] = useState<string>('home');
	const navigate = useNavigate();

	// 토큰 유무
	useEffect(() => {
		if (getToken()) {
			setCheckToken(true);
		}
	}, []);

	// 로그인 버튼을 클릭하여 로그인 화면으로 이동
	const loginHandler = () => {
		navigate('/login');
		setClick(() => 'home');
	};

	// 로그아웃 버튼 클릭하여 토큰 삭제
	const logoutHandler = () => {
		deleteToken();
		setClick(() => 'home');
		navigate('/');
		window.location.reload();
	};

	// 로고를 클릭하여 메인 페이지로 이동
	const mainHandler = () => {
		setClick(() => 'home');
		navigate('/');
	};

	// search 로고를 클릭하여 검색 화면으로 이동
	const searchHandler = () => {
		navigate('/search');
		setClick(() => 'home');
	};

	return (
		<HeaderSection>
			<HeaderContainer>
				<LogoContainer onClick={mainHandler}>
					<MainLogo src={mainLogo} alt='mainLogo' />
				</LogoContainer>
				<NavContainer>
					<NavCategory to='/'>봉사모집하기</NavCategory>
					<NavCategory
						to='/community/findfriend'
						className={click === 'community' ? 'community' : ''}
						onClick={() => {
							setClick(() => 'community');
						}}>
						커뮤니티
					</NavCategory>
					<NavCategory
						to='/review'
						className={click === 'review' ? 'review' : ''}
						onClick={() => {
							setClick(() => 'review');
						}}>
						봉사후기
					</NavCategory>
				</NavContainer>
				<UtilContainer>
					<MyPageButton />
					{!checkToken ? (
						<LoginButton onClick={loginHandler}>로그인</LoginButton>
					) : (
						<LoginButton onClick={logoutHandler}>로그아웃</LoginButton>
					)}
					<SearchButton onClick={searchHandler}>
						<SearchIcon src={searchLogo} alt='searchLogo' />
					</SearchButton>
				</UtilContainer>
			</HeaderContainer>
		</HeaderSection>
	);
};

export default Header;
