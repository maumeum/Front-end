import type { Meta, StoryObj } from '@storybook/react';
import MyPost from './MyPost.tsx';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof MyPost> = {
	title: 'Components/MyPost',
	component: MyPost,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
	parameters: {
		reactRouter: {
			routePath: '/',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Review: Story = {
	args: {
		currTab: '내가 쓴 리뷰',
		data: {
			title:
				'한강 플로깅 같이 하실분 구합니다~ 카카오톡 오픈채팅방으로 들어오세요',
			content:
				'7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요 7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요 7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요',
			postType: '동행구해요',
			createdAt: '2022-01-01',
			_id: '13',
		},
	},
};

export const Post: Story = {
	args: {
		currTab: '내가 쓴 게시글',
		data: {
			title:
				'한강 플로깅 같이 하실분 구합니다~ 카카오톡 오픈채팅방으로 들어오세요',
			content:
				'7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요 7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요 7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요7월 8일 8시쯤 저녁먹고 산책할겸 한강나루역 부근에서 플로깅하실 분.생각잇으시면댓 주세요',
			postType: '동행구해요',
			createdAt: '2022-01-01',
			_id: '13',
		},
	},
};
