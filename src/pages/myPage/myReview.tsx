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
import { TabTypes } from '@src/utils/EnumTypes';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';
import DataType from '@src/types/DataType';
import Swal from 'sweetalert2';

type ReviewProps = {
	title: string;
	content: string;
	createdAt: string;
	_id: string;
};

function myReview() {
	useEffect(() => {
		if (!getToken()) {
			window.location.href = '/';
			Swal.fire({
				title: '로그인이 필요한 서비스입니다.',
				icon: 'info',
				confirmButtonColor: 'var(--button--color)',
			});
		}
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

export default myReview;
