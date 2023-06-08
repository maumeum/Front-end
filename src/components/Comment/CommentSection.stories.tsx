import type { Meta, StoryObj } from '@storybook/react';
import CommentSection from './Comment.tsx';

const meta: Meta<typeof CommentSection> = {
	title: 'Components/CommentSection',
	component: CommentSection,
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
	args: {},
};
