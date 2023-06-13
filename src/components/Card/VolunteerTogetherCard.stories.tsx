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
		volunteerCardData: {
			_id: '345734',
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			statusName: '모집중', // 모집완료, 모집중단
			deadline: '2023-06-05T17:06:58.150+00:00',
			applyCount: 3,
			registerCount: 10,
			actTypeName: '동물보호',
			teenager: false,
			createdAt: '2023-05-10T17:06:58.150+00:00',
			images: [TestImage1, TestImage2],

			register_user: {
				nickname: '봉사왕김봉사',
				image: TestUserImage,
			},

			team: {
				teamName: '데일리플러깅',
			},
		},
	},
};

export const Complete: Story = {
	args: {
		volunteerCardData: {
			_id: '345734',
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			statusName: '모집완료',
			deadline: '2023-06-05T17:06:58.150+00:00',
			applyCount: 3,
			registerCount: 10,
			actTypeName: '동물보호',
			teenager: false,
			createdAt: '2023-05-10T17:06:58.150+00:00',
			images: [TestImage1, TestImage2],

			register_user: {
				nickname: '봉사왕김봉사',
				image: TestUserImage,
			},

			team: {
				teamName: '데일리플러깅',
			},
		},
	},
};

export const Close: Story = {
	args: {
		volunteerCardData: {
			_id: '345734',
			title:
				'세상에서 제일 재밌는 봉사활동, 런닝과 환경 보호를 한번에! 참여해보세요',
			statusName: '모집중단',
			deadline: '2023-06-05T17:06:58.150+00:00',
			applyCount: 3,
			registerCount: 10,
			actTypeName: '동물보호',
			teenager: false,
			createdAt: '2023-05-10T17:06:58.150+00:00',
			images: [TestImage1, TestImage2],

			register_user: {
				nickname: '봉사왕김봉사',
				image: TestUserImage,
			},

			team: {
				teamName: '데일리플러깅',
			},
		},
	},
};
