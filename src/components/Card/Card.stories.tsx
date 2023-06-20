import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '@components/Card/Card.tsx';
import dog from '@assets/images/dog.png';
import defaultImage from '@src/assets/images/volunteer1.jpg';

const meta: Meta<typeof Card> = {
	title: 'Components/Card/Card',
	component: Card,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '400px' }}>
				<BrowserRouter>
					<Story />
				</BrowserRouter>
			</div>
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

export const Ongoing: Story = {
	args: {
		currTab: '신청한 봉사',
		data: {
			createdAt: '2023-06-12',
			isParticipate: false,
			_id: '234636',
			register_user_id: {
				nickname: '위클리프로젝트',
				image: dog,
				authorization: false,
			},
			isReviewed: false,
			volunteer_id: {
				startDate: '2021-01-01',
				endDate: '2021-01-02',
				_id: '948593',
				title:
					'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
				centName: '행복한 나눔',
				statusName: '모집중',
				deadline: '2020-12-31',
				images: [defaultImage, dog],
				register_user_id: {
					nickname: '위클리프로젝트',
					image: dog,
					authorization: false,
				},
			},
		},
	},
};

export const Complete: Story = {
	args: {
		currTab: '신청한 봉사',
		data: {
			createdAt: '2023-06-12',
			isParticipate: false,
			_id: '234636',
			register_user_id: {
				nickname: '위클리프로젝트',
				image: dog,
				authorization: false,
			},
			isReviewed: false,
			volunteer_id: {
				startDate: '2021-01-01',
				endDate: '2021-01-02',
				_id: '948593',
				title:
					'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
				centName: '행복한 나눔',
				statusName: '모집완료', //  모집중단
				deadline: '2020-12-31',
				images: [defaultImage, dog],
				register_user_id: {
					nickname: '위클리프로젝트',
					image: dog,
					authorization: false,
				},
			},
		},
	},
};

export const Close: Story = {
	args: {
		currTab: '신청한 봉사',
		data: {
			createdAt: '2023-06-12',
			isParticipate: false,
			_id: '234636',
			register_user_id: {
				nickname: '위클리프로젝트',
				image: dog,
				authorization: false,
			},
			isReviewed: false,
			volunteer_id: {
				startDate: '2021-01-01',
				endDate: '2021-01-02',
				_id: '948593',
				title:
					'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
				centName: '행복한 나눔',
				statusName: '모집중단',
				deadline: '2020-12-31',
				images: [defaultImage, dog],
				register_user_id: {
					nickname: '위클리프로젝트',
					image: dog,
					authorization: false,
				},
			},
		},
	},
};
