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
	// 카드 데이터
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
	// 글 작성자 데이터
	register_user: {
		nickname: string;
		introduction?: string;
		image: string;
	};
// 글 작성자의 인증단체 데이터
	team: {
		category?: string;
		teamName: string;
		introduction?: string;
		briefHistory?: string;
		establishmentDate?: string;
		phone?: string;
		location?: string;
		image?: string;
	};
	// 댓글 - api 따로있음
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
	};
	createdAt: string;
}
// // 봉사활동 전체보기 리스트
export type VolunteerTogetherListType = VolunteerTogetherType[];

export interface CommentType {
	_id: string;
	user_id: {
		nickname: string;
	};
	content: string;
	post_id: string;
	isReported: boolean;
}

export type CommentListType = CommentType[];
