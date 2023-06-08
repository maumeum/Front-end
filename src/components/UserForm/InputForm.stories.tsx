import type { Meta, StoryObj } from '@storybook/react';
import InputForm from './InputForm.tsx';
import {
	validEmail,
	validPassword,
	validPhoneNum,
} from '@src/utils/signUpCheck.ts';
import {
	emailError,
	nicknameError,
	passwordError,
	passwordCheckError,
	phoneNumError,
} from '@src/utils/errorMessage.ts';

const meta: Meta<typeof InputForm> = {
	title: 'Components/Form/InputForm',
	component: InputForm,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '600px' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
	args: {
		submit: false,
		dataName: '이메일',
		inputType: 'text',
		name: 'email',
		placeholder: '이메일을 입력해주세요.',
		value: '',
		errorMessage: emailError,
		validFn: validEmail,
	},
};

export const Nickname: Story = {
	args: {
		submit: false,
		dataName: '닉네임',
		inputType: 'text',
		name: 'nickname',
		placeholder: '닉네임을 입력해주세요.',
		value: '',
		errorMessage: nicknameError,
	},
};

export const Password: Story = {
	args: {
		submit: false,
		dataName: '비밀번호',
		inputType: 'password',
		name: 'password',
		placeholder: '비밀번호 4~20자 입력',
		value: '1234',
		errorMessage: passwordError,
		validPassword: validPassword,
	},
};

export const PasswordCheck: Story = {
	args: {
		submit: false,
		dataName: '비밀번호 확인',
		inputType: 'password',
		name: 'checkPassword',
		placeholder: '비밀번호 다시 입력',
		value: '',
		errorMessage: passwordCheckError,
		passwordData: '1234',
	},
};

export const PhoneNumber: Story = {
	args: {
		submit: false,
		dataName: '핸드폰 번호',
		inputType: 'text',
		name: 'phoneNum',
		placeholder: '핸드폰 번호("-"없이 입력)',
		value: '',
		errorMessage: phoneNumError,
		validFn: validPhoneNum,
	},
};
