import type { Meta, StoryObj } from '@storybook/react';
import VolunteerTogetherCard from '@components/Card/VolunteerTogetherCard';
import TestImage1 from '@assets/images/volunteer1.jpg';
import TestImage2 from '@assets/images/volunteer2.jpg';
import TestUserImage from '@assets/images/car.png';

const meta: Meta<typeof VolunteerTogetherCard> = {
	title: 'Components/Card/VolunteerTogetherCard',
	component: VolunteerTogetherCard,
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

export const Ongoing: Story = {
	args: {
		data: {
			_id: '345734',
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			centName: '엘리스봉사단',
			statusName: '모집중', // 모집완료, 모집중단
			deadline: '2023-06-05T17:06:58.150+00:00',
			applyCount: 3,
			registerCount: 10,
			images: [TestImage1, TestImage2],
			register_user_id: {
				_id: '453561',
				nickname: '봉사왕김봉사',
				image: TestUserImage,
			},
			createdAt: '2023-05-10T17:06:58.150+00:00',
		},
	},
};

export const Complete: Story = {
	args: {
		data: {
			_id: '345734',
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			centName: '엘리스봉사단',
			statusName: '모집완료',
			deadline: '2023-06-05T17:06:58.150+00:00',
			applyCount: 3,
			registerCount: 10,
			images: [TestImage1, TestImage2],
			register_user_id: {
				_id: '453561',
				nickname: '봉사왕김봉사',
				image: TestUserImage,
			},
			createdAt: '2023-05-10T17:06:58.150+00:00',
		},
	},
};

export const Close: Story = {
	args: {
		data: {
			_id: '345734',
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			centName: '엘리스봉사단',
			statusName: '모집중단',
			deadline: '2023-06-05T17:06:58.150+00:00',
			applyCount: 3,
			registerCount: 10,
			images: [TestImage1, TestImage2],
			register_user_id: {
				_id: '453561',
				nickname: '봉사왕김봉사',
				image: TestUserImage,
			},
			createdAt: '2023-05-10T17:06:58.150+00:00',
		},
	},
};
