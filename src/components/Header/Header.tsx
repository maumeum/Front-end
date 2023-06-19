import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getToken, deleteToken } from '@api/token';
import MyPageButton from '@components/MyPage/MyPageButton';
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
		window.scrollTo(0, 0);
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
		window.scrollTo(0, 0);
		setClick(() => 'home');
	};

	return (
		<HeaderSection>
			<HeaderContainer>
				<LogoContainer onClick={mainHandler}>
					<MainLogo src={mainLogo} alt='mainLogo' />
				</LogoContainer>
				<NavContainer>
					<NavCategory
						to='/volunteers/ongoing'
						className={click === 'volunteers' ? 'volunteers' : ''}
						onClick={() => {
							setClick(() => 'volunteers');
							window.scrollTo(0, 0);
						}}>
						같이봉사해요
					</NavCategory>
					<NavCategory
						to='/community/findfriend'
						className={click === 'community' ? 'community' : ''}
						onClick={() => {
							setClick(() => 'community');
							window.scrollTo(0, 0);
						}}>
						커뮤니티
					</NavCategory>
					<NavCategory
						to='/review'
						className={click === 'review' ? 'review' : ''}
						onClick={() => {
							setClick(() => 'review');
							window.scrollTo(0, 0);
						}}>
						봉사후기
					</NavCategory>
				</NavContainer>
				<UtilContainer>
					<MyPageButton setClick={setClick} />
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
