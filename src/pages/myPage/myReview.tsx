import React, { useState, useEffect } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';

import Tab from '@components/Tab/Tab.tsx';
import MyPost from '@components/MyPost/MyPost.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/utils/EnumTypes';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';

type ReviewProps = {
	title: string;
	content: string;
	createdAt: string;
	_id: string;
};

function myReview() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get('/api/reviews/users', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				setData(response as ReviewProps[]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const tabs = [TabTypes.WRITTEN_REVIEW];
	const [currTab] = useState<TabTypes>(TabTypes.WRITTEN_REVIEW);
	const [data, setData] = useState<ReviewProps[]>([]);

	return (
		<>
			<Container>
				<MenuBar>
					<Menu title={'마이페이지'} />
				</MenuBar>

				<Main>
					<TabMenu>
						<Tab currTab={currTab} tabs={tabs} />
					</TabMenu>
					{data.map((data) => {
						return <MyPost key={data._id} data={data} currTab={currTab} />;
					})}
				</Main>
			</Container>
		</>
	);
}

export default myReview;
