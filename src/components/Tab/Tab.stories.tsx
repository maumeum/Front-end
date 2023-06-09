import type { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab.tsx';
import { TabTypes } from '@components/Tab/TabTypes.ts';

const meta: Meta<typeof Tab> = {
	title: 'Components/Tab',
	component: Tab,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		currTab: TabTypes.COMMENTED_POSTS,
		tabs: [
			TabTypes.EDIT_PROFILE,
			TabTypes.EDIT_MYINFO,
			TabTypes.VOLUNTEER_APPLIED,
			TabTypes.VOLUNTEER_COMPLETED,
			TabTypes.WRITTEN_POSTS,
			TabTypes.COMMENTED_POSTS,
			TabTypes.VOLUNTEER_SUGGEST,
			TabTypes.WRITTEN_REVIEW,
			TabTypes.WITHDRAWAL,
		],
	},
};
