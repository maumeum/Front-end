import type { Meta, StoryObj } from '@storybook/react';
import CommunityCard from './CommunityCard.tsx';

const meta: Meta<typeof CommunityCard> = {
	title: 'Components/Card/CommunityCard',
	component: CommunityCard,
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
		communityData: {
			_id: '01',
			user_id: {
				nickname: '커뮤장인1',
			},
			title:
				'[푸른문간]에서 진행하는 에너지 취약계층을 위한 배달봉사 같이할사람!',
			postType: '동행구해요',
			content: '',
			createdAt: '2023-05-30 14:00:00',
			isReported: false,
		},
	},
};
