// 유효성 검사 함수
export const validEmail = (email: string): boolean | null => {
	return (
		email.match(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) &&
		email !== ''
	);
};

export const validPassword = (password: string, checkPassword: string): boolean | undefined => {
	if (password !== checkPassword) {
		return false;
	}
	if (password.length >= 4 && password.length <= 20) {
		return true;
	}
};

export const validPhoneNum = (phoneNum: string): boolean | null => {
	return phoneNum.match(/^\d+$/) && phoneNum !== '';
};

// 이메일 공란일 때
export const checkEmail = (email: string): boolean => {
	if (email === '') {
		return true;
	}
	return false;
};