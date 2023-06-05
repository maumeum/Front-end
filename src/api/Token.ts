// 토큰을 localStorage에 저장하는 함수
export const setToken = (token: string) => {
	localStorage.setItem('userToken', token);
};

// localStorage에 있는 토큰을 가져오는 함수
export const getToken = () => {
	return localStorage.getItem('userToken') || null;
};

// localStorage 토큰 삭제 함수
export const deleteToken = () => {
	localStorage.removeItem('userToken');
};
