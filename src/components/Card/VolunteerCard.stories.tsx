import type { Meta, StoryObj } from '@storybook/react';
import VolunteerCard from './VolunteerCard.tsx';
import imgData from '@src/assets/images/volunteer1.jpg';

const meta: Meta<typeof VolunteerCard> = {
	title: 'Components/Card/VolunteerCard',
	component: VolunteerCard,
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

export const Primary: Story = {
	args: {
		volunteerData: {
			_id: '01',
			title: '아동기초학습지도',
			content:
				'지구촌지역아동센터에서 초등학생 1~6학년 아이들 교육지도를 도와주실 봉사자를 모집합니다. 궁금한 사항 있으시면 언제든 연락주세요',
			centName: '지구촌지역아동센터',
			createdAt: '2023-05-30 14:00:00',
			statusName: '모집중',
			deadline: '2023-06-10 14:00:00',
			applyCount: 3,
			registerCount: 1,
			actTypeName: '교육지원',
			teenager: true,
			images: [imgData],
			user_id: '1',
		},
	},
};
