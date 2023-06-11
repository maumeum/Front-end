import { useState, useEffect } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';

import Tab from '@components/Tab/Tab.tsx';
import MyPost from '@components/MyPost/MyPost.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/types/EnumTypes';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import DataType from '@src/types/DataType';

type ReviewProps = {
	title: string;
	content: string;
	createdAt: string;
	_id: string;
};

function MyReview() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>('/api/reviews/users', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				setData(response.data as ReviewProps[]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const tabs = [TabTypes.WRITTEN_REVIEW];
	const [currTab] = useState<TabTypes>(TabTypes.WRITTEN_REVIEW);
	const [data, setData] = useState<ReviewProps[]>([]);

	const removePost = (postId: string) => {
		setData(data.filter((post) => post._id !== postId));
	};

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
					{data.length === 0 && <div>작성된 리뷰가 없습니다.</div>}
					{data.map((data) => {
						return (
							<MyPost
								key={data._id}
								data={data}
								currTab={currTab}
								onRemovePost={removePost}
							/>
						);
					})}
				</Main>
			</Container>
		</>
	);
}

export default MyReview;
