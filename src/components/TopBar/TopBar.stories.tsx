import type { Meta, StoryObj } from '@storybook/react';
import TopBar from './TopBar.tsx';

const meta: Meta<typeof TopBar> = {
	title: 'Components/TopBar',
	component: TopBar,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: '유저 정보 확인',
		text: '회원정보 수정을 위해 비밀번호를 입력해주세요:)',
		modal: 'modal',
	},
};
