// 유효성 검사 함수
export const validEmail = (email: string): boolean | null => {
	return (
		email.match(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) &&
		email !== ''
	);
};

export const validPassword = (password: string): boolean | undefined => {
	if (password.length < 4 || password.length > 20) {
		return false;
	}
	return true;
};

export const validPhoneNum = (phoneNum: string): boolean | null => {
	return phoneNum.match(/^\d+$/) && phoneNum !== '';
};
