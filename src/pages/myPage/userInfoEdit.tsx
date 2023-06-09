import { useState } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/utils/EnumTypes';
import MyPageUserForm from '@components/UserForm/MyPageUserForm';
import { getToken } from '@src/api/Token';
import Swal from 'sweetalert2';

if (!getToken()) {
	window.location.href = '/';
	Swal.fire({
		title: '로그인이 필요한 서비스입니다.',
		icon: 'info',
		confirmButtonColor: 'var(--button--color)',
	});
}

function userInfoEdit() {
	const [currTab] = useState<TabTypes>(TabTypes.EDIT_MYINFO);
	const tabs = [TabTypes.EDIT_MYINFO];

	return (
		<Container>
			<MenuBar>
				<Menu title={'마이페이지'} />
			</MenuBar>

			<Main>
				<TabMenu>
					<Tab currTab={currTab} tabs={tabs} />
				</TabMenu>
				<MyPageUserForm pageType={TabTypes.EDIT_MYINFO} />
			</Main>
		</Container>
	);
}

export default userInfoEdit;
