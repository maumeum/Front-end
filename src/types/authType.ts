import { UserType } from '@src/types/userType';

export interface AuthType {
	userData: UserType | null;
	getUserData: () => void;
}

export interface SubmitType {
	isSubmit: boolean;
	setIsSubmit: () => void;
	resetSubmit: () => void;
}

export interface UuidType {
	uuidData: string;
	setUUID: (uuidData: string) => void;
}
