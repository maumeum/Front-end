import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card.tsx';
import CommunityCard from './CommunityCard.tsx';
import ReviewCard from './ReviewCard.tsx';
import VolunteerCard from './VolunteerCard.tsx';
import car from '@src/assets/images/car.png';

const meta: Meta<typeof Card> = {
	title: 'Components/Card',
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

export const ongoing: Story = {
	args: {
		data: {
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			thumbnail: car,
			nickname: '내닉네임은너무나도길어',
			profile: car,
			recruitStatus: '모집중',
			startDate: '2021-01-01',
			endDate: '2021-01-02',
		},
		currTab: '완료한 봉사',
	},
};

export const complete: Story = {
	args: {
		data: {
			title: '쪽방촌에 계시는 어른들에게 도시락을 전달해요!',
			thumbnail: car,
			nickname: '도시락요정',
			profile: car,
			recruitStatus: '모집완료',
			startDate: '2021-06-01',
			endDate: '2021-06-01',
		},
		currTab: '신청한 봉사',
	},
};
