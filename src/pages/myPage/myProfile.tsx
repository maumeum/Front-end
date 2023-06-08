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
import MyIntro from '@components/Profile/MyIntro.tsx';
import ProfileImg from '@components/Profile/ProfileImg.tsx';

function myProfile() {
	const [currImgTab] = useState<TabTypes>(TabTypes.EDIT_PROFILE);
	const tabs_img = [TabTypes.EDIT_PROFILE];
	const [currIntroTab] = useState<TabTypes>(TabTypes.EDIT_INTRO);
	const tabs_intro = [TabTypes.EDIT_INTRO];
	return (
		<>
			<Container>
				<MenuBar>
					<Menu title={'마이페이지'} />
				</MenuBar>

				<Main>
					<TabMenu>
						<Tab currTab={currImgTab} tabs={tabs_img} />
					</TabMenu>
					<ProfileImg />

					<TabMenu>
						<Tab currTab={currIntroTab} tabs={tabs_intro} />
					</TabMenu>
					<MyIntro />
				</Main>
			</Container>
		</>
	);
}

export default myProfile;
