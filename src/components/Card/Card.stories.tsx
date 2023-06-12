import type { Meta, StoryObj } from '@storybook/react';
import Card from '@components/Card/Card.tsx';
import car from '@assets/images/car.png';

const meta: Meta<typeof Card> = {
	title: 'Components/Card/Card',
	component: Card,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '400px' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Ongoing: Story = {
	args: {
		currTab: '신청한 봉사',
		data: {
			createdAt: '2023-06-12',
			isParticipate: false,
			volunteer_id: {
				startDate: '2021-01-01',
				endDate: '2021-01-02',
				_id: '내닉네임은너무나도길어',
				title:
					'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
				centName: '행복한 나눔',
				statusName: '모집중', // 모집완료, 모집중단
				deadline: '2020-12-31',
				images: [car],
			},
		},
	},
};

export const Complete: Story = {
	args: {
		currTab: '완료한 봉사',
		data: {
			createdAt: '2023-06-12',
			volunteer_id: {
				startDate: '2021-01-01',
				endDate: '2021-01-02',
				_id: '내닉네임은너무나도길어',
				title:
					'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
				centName: '행복한 나눔',
				statusName: '모집완료',
				deadline: '2020-12-31',
				images: [car],
			},
		},
	},
};

export const Close: Story = {
	args: {
		currTab: '완료한 봉사',
		data: {
			createdAt: '2023-06-12',
			volunteer_id: {
				startDate: '2021-01-01',
				endDate: '2021-01-02',
				_id: '내닉네임은너무나도길어',
				title:
					'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
				centName: '행복한 나눔',
				statusName: '모집중단',
				deadline: '2020-12-31',
				images: [car],
			},
		},
	},
};
