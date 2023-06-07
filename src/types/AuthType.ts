import UserType from './userType';

interface AuthType {
	userData: UserType | null;
	setUserData: (userData: UserType) => void;
	initialize: () => void;
}

export default AuthType;
