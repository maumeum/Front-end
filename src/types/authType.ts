import UserType from './UserType';

interface AuthType {
	userData: UserType | null;
	getUserData: () => void;
}

export default AuthType;
