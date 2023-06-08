import type { Meta, StoryObj } from '@storybook/react';
import UserForm from './UserForm.tsx';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof UserForm> = {
	title: 'Components/Form/UserForm',
	component: UserForm,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '600px' }}>
				<Story />
			</div>
		),
		withRouter,
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Correct: Story = {
	parameters: {
		reactRouter: {
			routePath: '/',
			routeHandle: 'LargeButton',
			routeState: { password: '1234' },
		},
	},
};
