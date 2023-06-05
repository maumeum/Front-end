import React, { useState } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes, MyPageTypes } from '@src/utils/EnumTypes';
import MyPageUserForm from '@components/UserForm/MyPageUserForm';

function myPage() {
	const [currTab] = useState<TabTypes>(TabTypes.MYPAGE);
	const tabs = [TabTypes.MYPAGE];

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
				<MyPageUserForm myInfo={myInfo} pageType={MyPageTypes.QUERYPAGE} />
			</Main>
		</Container>
	);
}

export default myPage;
