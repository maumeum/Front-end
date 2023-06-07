import { Link } from 'react-router-dom';
import { MenuTitle, Menus } from './Menu.ts';

type MenuProps = {
	title: string;
};

function Menu({ title }: MenuProps) {
	return (
		<>
			{title === '마이페이지' && (
				<>
					<MenuTitle>{title}</MenuTitle>
					<Menus>
						<Link to='/mypage'>
							<p>마이페이지</p>
						</Link>
						<Link to='/mypage/profile'>
							<p>프로필 정보 수정</p>
						</Link>
						<Link to='/mypage/review'>
							<p>내가 쓴 리뷰</p>
						</Link>
						<Link to='/mypage/history'>
							<p>나의 봉사활동 내역</p>
						</Link>
						<Link to='/mypage/comment'>
							<p>나의 커뮤니티 활동</p>
						</Link>
						<Link to='/mypage/suggest'>
							<p>내가 등록한 봉사</p>
						</Link>
						<Link to='/mypage/withdrawal'>
							<p>회원탈퇴</p>
						</Link>
					</Menus>
				</>
			)}

			{title === '커뮤니티' && (
				<>
					<MenuTitle>{title}</MenuTitle>
					<Menus>
						<Link to='/community/findfriend'>
							<p>동행 구해요</p>
						</Link>
						<Link to='/community/question'>
							<p>궁금해요</p>
						</Link>
					</Menus>
				</>
			)}
		</>
	);
}

export default Menu;
