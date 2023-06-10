// 유효성 검사 함수
export const validEmail = (email: string): boolean => {
	return (
		email.match(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) !== null
	);
};

export const validPassword = (password: string): boolean => {
	return password.length >= 4 && password.length <= 20;
};

export const validPhoneNum = (phoneNum: string): boolean => {
	return phoneNum.match(/^\d+$/) !== null;
};
