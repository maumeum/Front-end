import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/types/myPageConstants';
import MyPageUserForm from '@components/UserForm/MyPageUserForm';

function MyPage() {
	const tabs = [TabTypes.MYPAGE];

	return (
		<Container>
			<MenuBar>
				<Menu title={'마이페이지'} />
			</MenuBar>
			<Main>
				<TabMenu>
					<Tab tabs={tabs} />
				</TabMenu>
				<MyPageUserForm pageType={TabTypes.MYPAGE} />
			</Main>
		</Container>
	);
}

export default MyPage;
