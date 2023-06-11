import type { Meta, StoryObj } from '@storybook/react';
import Card from '@components/Card/Card.tsx';
import car from '@assets/images/car.png';

const meta: Meta<typeof Card> = {
	title: 'Components/Card/Card',
	component: Card,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '400px' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ongoing: Story = {
	args: {},
};
