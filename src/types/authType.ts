import UserType from '@src/types/userType';

interface AuthType {
	userData: UserType | null;
	getUserData: () => void;
}

export default AuthType;
