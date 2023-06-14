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
