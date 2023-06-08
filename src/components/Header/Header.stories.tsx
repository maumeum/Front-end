import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header.tsx';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
	parameters: {
		reactRouter: {
			routePath: '/',
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;
// login, main, search
export const Primary: Story = {
	args: {
		label: '헤더',
	},
};
