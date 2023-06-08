import type { Meta, StoryObj } from '@storybook/react';
import Selector from './Selector.tsx';

const meta: Meta<typeof Selector> = {
	title: 'Components/Selector',
	component: Selector,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
