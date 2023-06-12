import axios, { AxiosInstance } from 'axios';
import { getToken } from '@api/token'; // 토큰 관련 함수를 가져옵니다.

const apiURL = import.meta.env.VITE_API_URL;
const api: AxiosInstance = axios.create({
	baseURL: apiURL,
});

// 토큰이 변경될 때마다 헤더 업데이트
api.interceptors.request.use(
	(config) => {
		const token = getToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default api;
