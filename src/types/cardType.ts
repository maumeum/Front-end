// Datalist Type
export interface CommunityType {
	_id: string;
	user_id: {
		nickname: string;
	};
	title: string;
	postType: string;
	createdAt: string;
	content: string;
	isReported: boolean;
}

export type CommunityListType = CommunityType[];

export interface ReviewType {
	_id: string;
	title: string;
	content: string;
	volunteer_id: string;
	user_id: {
		nickname: string;
	};
	index: number;
	createdAt: string;
	images: string[];
	isReported: boolean;
}

export type ReviewListType = ReviewType[];

export interface VolunteerType {
	_id: string;
	title: string;
	content?: string;
	centName?: string;
	statusName: string;
	deadline: string;
	applyCount: number;
	registerCount: number;
	actTypeName: string;
	teenager: boolean;
	user_id?: string;
	createdAt: string;
	images?: string[];
}

export type VolunteerListType = VolunteerType[];

export interface TeamType {
	_id: number;
	category: string;
	teamName: string;
	establishmentDate: string;
	introduction: string;
	briefHistory: string;
	location: string;
	phone: string;
	user_id: {
		_id: string;
		nickname: string;
	};
	createdAt: string;
	image?: string;
	isSubmit: boolean;
}

export type TeamListType = TeamType[];

export interface VolunteerCommentType {
	volunteer_id: string;
	content: string;
}

export type VolunteerCommentListType = VolunteerCommentType[];

export interface VolunteerDetailType {
	_id: string;
	title: string;
	content?: string;
	statusName: string;
	deadline: string;
	applyCount: number;
	registerCount: number;
	actTypeName: string;
	teenager: boolean;
	createdAt: string;
	images: string[];
	startDate?: string;
	endDate?: string;

	register_user: {
		// 글 작성자
		nickname: string;
		introduction?: string;
		image: string;
	};

	team: {
		// 글 작성자의 인증단체
		category?: string;
		teamName: string;
		introduction?: string;
		briefHistory?: string;
		establishmentDate?: string;
		phone?: string;
		location?: string;
		image?: string;
	};
}
// 봉사활동 전체보기 카드 한 개에 들어가야 할 데이터:
export interface VolunteerTogetherType {
	_id: string;
	title: string;
	centName: string;
	statusName: string;
	deadline: string;
	applyCount: number;
	registerCount: number;
	images: string[];
	register_user_id: {
		_id: string;
		nickname: string;
		image: string;
		uuid: string;
	};
	createdAt: string;
}
// // 봉사활동 전체보기 리스트
export type VolunteerTogetherListType = VolunteerTogetherType[];
