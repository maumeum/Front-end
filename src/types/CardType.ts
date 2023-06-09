// Datalist Type
export interface CommunityListType {
	_id: string;
	user_id: {
		nickname: string;
	};
	title: string;
	postType: string;
	content: string;
}

export interface ReviewListType {
	_id: string;
	title: string;
	content: string;
	volunteer_id: string;
	user_id: {
		nickname: string;
	};
	index: number;
	images?: string[];
}

export interface VolunteerListType {
	_id: string;
	title: string;
	content: string;
	centName: string;
	statusName: string;
	deadline: string;
	applyCount: number;
	registerCount: number;
	actTypeName: string;
	teenager: boolean;
	user_id: string;
	images?: string[];
}

export interface TeamListType {
	_id: number;
	category: string;
	teamName: string;
	userId: {
		nickname: string;
	};
	createdAt: string;
	image?: string;
}
