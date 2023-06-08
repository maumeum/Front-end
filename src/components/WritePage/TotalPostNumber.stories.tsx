import type { Meta, StoryObj } from '@storybook/react';
import WritePage from './WritePage.tsx';

const meta: Meta<typeof WritePage> = {
	title: 'Components/WritePage',
	component: WritePage,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '1280px' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: '봉사활동 이름과 날짜를 포함하는 제목을 지어보세요',
		subtitle:
			'봉사활동 이름, 날짜를 포함하여 정보를 입력해주세요.\n서로 예의를 지키며 존중하는 문화를 만들어가요.',
	},
};
