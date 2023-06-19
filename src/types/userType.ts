export interface UserType {
	_id: string;
	email: string;
	nickname: string;
	phone: string;
	image: string;
	introduction: string;
	role: string;
	nanoid: string;
	authorization: boolean;
}

export type UserListType = UserType[];

export interface TeamType {
	category: string;
	teamName: string;
	introduction: string;
	briefHistory: string;
	establishmentDate: string;
	phone: string;
	location: string;
	image: string;
}

export type TeamListType = TeamType[];
