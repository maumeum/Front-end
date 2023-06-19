import type { Meta, StoryObj } from '@storybook/react';
import { StyledButton } from './StyledButton';

const meta: Meta<typeof StyledButton> = {
	title: 'Components/Button',
	component: StyledButton,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { Control: 'color' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		colorType: 'green',
		label: '확인',
	},
};

export const White: Story = {
	args: {
		...Default.args,
		colorType: 'white',
	},
};

export const Pink: Story = {
	args: {
		...Default.args,
		colorType: 'pink',
	},
};

export const Gray: Story = {
	args: {
		...Default.args,
		colorType: 'gray',
	},
};

export const Round: Story = {
	args: {
		...Default.args,
		round: true,
	},
};

export const Small: Story = {
	args: {
		...Default.args,
		size: 'small',
	},
};

export const Medium: Story = {
	args: {
		...Default.args,
		size: 'medium',
	},
};

export const Large: Story = {
	args: {
		...Default.args,
		size: 'large',
	},
};
