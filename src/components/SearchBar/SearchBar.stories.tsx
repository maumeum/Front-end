import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar.tsx';

const meta: Meta<typeof SearchBar> = {
	title: 'Components/SearchBar',
	component: SearchBar,
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
