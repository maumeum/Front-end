import type { Meta, StoryObj } from '@storybook/react';
import { StyledButton } from './StyledButton';

const meta: Meta<typeof StyledButton> = {
	title: 'Components/Button',
	component: StyledButton,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ margin: '3em' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		backgroundColor: { Control: 'color' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true,
		label: '확인',
	},
};

export const Outline: Story = {
	args: {
		...Primary.args,
		primary: false,
	},
};

export const Round: Story = {
	args: {
		...Primary.args,
		round: true,
	},
};

export const Small: Story = {
	args: {
		...Primary.args,
		size: 'small',
	},
};

export const Mediem: Story = {
	args: {
		...Primary.args,
		size: 'medium',
	},
};

export const Large: Story = {
	args: {
		...Primary.args,
		size: 'large',
	},
};
