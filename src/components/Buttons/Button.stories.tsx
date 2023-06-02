import type { Meta, StoryObj } from '@storybook/react';

import { StyledButton } from './index';

const meta = {
	title: 'Components/Button',
	component: StyledButton,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true,
		isFull: false,
		label: '확인',
	},
};

export const Secondary: Story = {
	args: {
		isFull: false,
		label: '확인',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		isFull: false,
		label: '확인',
	},
};

export const Mediem: Story = {
	args: {
		size: 'medium',
		isFull: false,
		label: '확인',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		isFull: false,
		label: '확인',
	},
};
