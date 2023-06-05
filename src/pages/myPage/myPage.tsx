import React, { useState } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@components/Tab/TabTypes.ts';

import SingUp from '@pages/userPage/signUp.tsx';
function myPage() {
	const [currTab] = useState<TabTypes>(TabTypes.EDIT_MYINFO);
	const tabs = [TabTypes.EDIT_MYINFO];

	const myInfo = {
		email: 'abc@naver.com',
		nickname: '안녕하세요',
		password: '12345',
		pwdcheck: '1234',
		phoneNum: '1234',
	};

	return (
		<Container>
			<MenuBar>
				<Menu title={'마이페이지'} />
			</MenuBar>

			<Main>
				<TabMenu>
					<Tab currTab={currTab} tabs={tabs} />
				</TabMenu>
				<SingUp mypage='mypage' />
			</Main>
		</Container>
	);
}

export default myPage;
