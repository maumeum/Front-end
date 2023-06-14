import type { Meta, StoryObj } from '@storybook/react';
import VolunteerWritePage from './VolunteerWritePage.tsx';

const meta: Meta<typeof VolunteerWritePage> = {
	title: 'Components/WritePage',
	component: VolunteerWritePage,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
