import type { Meta, StoryObj } from '@storybook/react';
import VolunteerCalendar from './VolunteerCalendar.tsx';

const meta: Meta<typeof VolunteerCalendar> = {
	title: 'Components/Calendar',
	component: VolunteerCalendar,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
