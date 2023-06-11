import { Link } from 'react-router-dom';
import { MenuTitle, Menus } from '@components/Menu/Menu';

type MenuProps = {
	title: keyof MenuItems;
};

type MenuItem = {
	link: string;
	label: string;
};

type MenuItems = {
	[key in '마이페이지' | '커뮤니티' | '관리자']: MenuItem[];
};
const MENU_ITEMS: MenuItems = {
	마이페이지: [
		{ link: '/mypage', label: '마이페이지' },
		{ link: '/mypage/profile', label: '프로필 정보 수정' },
		{ link: '/mypage/review', label: '내가 쓴 리뷰' },
		{ link: '/mypage/history', label: '나의 봉사활동 내역' },
		{ link: '/mypage/comment', label: '나의 커뮤니티 활동' },
		{ link: '/mypage/suggest', label: '내가 등록한 봉사' },
		{ link: '/mypage/withdrawal', label: '회원탈퇴' },
	],
	커뮤니티: [
		{ link: '/community/findfriend', label: '동행 구해요' },
		{ link: '/community/question', label: '궁금해요' },
	],
	관리자: [
		{ link: '/admin/report', label: '신고 내역' },
		{ link: '/admin/team_auth', label: '단체 인증 요청' },
		{ link: '/admin/user_manage', label: '유저 관리' },
	],
};

function Menu({ title }: MenuProps) {
	const menuItems = MENU_ITEMS[title] || [];

	return (
		<>
			{menuItems.length > 0 && (
				<>
					<MenuTitle>{title}</MenuTitle>
					<Menus>
						{menuItems.map((item) => (
							<Link to={item.link} key={item.label}>
								<p>{item.label}</p>
							</Link>
						))}
					</Menus>
				</>
			)}
		</>
	);
}

export default Menu;
