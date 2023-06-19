import type { Meta, StoryObj } from '@storybook/react';
import PostList from './PostList.tsx';

const meta: Meta<typeof PostList> = {
	title: 'Components/PostList',
	component: PostList,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '1280px' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		postTitle: '5/3일에 계획중인 유기견 봉사 같이 갈 사람을 구합니다',
		postContents:
			'저번에 한번 갔던 유기견 봉사활동이 너무 좋아서 다시 가려하는데 혹시 같이 가실 분 계신가요? ',
	},
};
