import type { Meta, StoryObj } from '@storybook/react';
import Menu from './Menu.tsx';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof Menu> = {
	title: 'Components/Menu',
	component: Menu,
	tags: ['autodocs'],
	decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Community: Story = {
	args: {
		title: '커뮤니티',
	},
	parameters: {
		reactRouter: {
			routePath: '/community',
		},
	},
};

export const Mypage: Story = {
	args: {
		title: '마이페이지',
	},
	parameters: {
		reactRouter: {
			routePath: '/mypage',
		},
	},
};
