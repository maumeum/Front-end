// Datalist Type

export interface communityListType {
	user_id: {
		nickname: string;
	};
	title: string;
	postType: string;
}

export interface reviewListType {
	title: string;
	content: string;
	images: string[];
	volunteer_id: string;
	user_id: {
		nickname: string;
	};
	index: number;
}

export interface volunteerListType {
	title: string;
	content: string;
	centName: string;
	createdAt: string;
	statusName: string;
	deadline: string;
	applyCount: number;
	registerCount: number;
	actTypeName: string;
	teenager: boolean;
	images: string[];
	user_id: string;
	updateAt: string;
}
