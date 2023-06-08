import type { Meta, StoryObj } from '@storybook/react';
import ReviewCard from './ReviewCard.tsx';
import img1 from '@src/assets/images/volunteer1.jpg';
import img2 from '@src/assets/images/volunteer2.jpg';

const meta: Meta<typeof ReviewCard> = {
	title: 'Components/Card/ReviewCard',
	component: ReviewCard,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '800px' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		data: {
			title: '직장인 유기견 봉사활동 후기 6개월차',
			content:
				'저는 일주일에 1번씩 6개월 동안 유기견 봉사활동을 다녔던 직장인입니다. 봉사가 취미이기도 하고, 봉사활동 하고나면 남한테 도움을 준듯한 느낌이 들어 기분이 좋아지더라구요 이번 유기견 봉사활동도 잘 마칠 수 있었습니다.',
			images: [img1, img2],
			volunteer_id: 'volunteer_id',
			user_id: {
				nickname: '봉사원3',
			},
			index: 1,
		},
	},
};
