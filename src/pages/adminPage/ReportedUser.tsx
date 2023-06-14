import { useEffect, useState } from 'react';

import { get } from '@api/api';
import UserCard from '@components/Card/UserCard';
import Menu from '@components/Menu/Menu.tsx';
import { UserListType } from '@src/types/userType';
import DataType from '@src/types/dataType';
import { MenuBar, TopBarContainer, TopBar, UserContainer } from './style';

const ReportedUser = () => {
	const [userList, setUserList] = useState<UserListType>([]);

	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>('/api/users/admin/disabled');
			setUserList(responseData.data);
		};
		fetchData();
	}, []);

	return (
		<>
			<MenuBar>
				<Menu title='관리자' />
			</MenuBar>
			<TopBarContainer>
				<TopBar>신고된 유저 관리</TopBar>
			</TopBarContainer>
			<UserContainer>
				{userList &&
					userList.map((item) => <UserCard UserData={item} key={item._id} />)}
			</UserContainer>
		</>
	);
};

export default ReportedUser;
