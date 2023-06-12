import UserType from './userType';

export interface AuthType {
	userData: UserType | null;
	getUserData: () => void;
}

export interface SubmitType {
	isSubmit: boolean;
	setIsSubmit: () => void;
	resetSubmit: () => void;
}
