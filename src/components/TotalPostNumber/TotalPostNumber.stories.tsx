import type { Meta, StoryObj } from '@storybook/react';
import TotalPostNumber from './TotalPostNumber.tsx';

const meta: Meta<typeof TotalPostNumber> = {
	title: 'Components/TotalPostNumber',
	component: TotalPostNumber,
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
		totalPosts: 10,
	},
};
