import axios, { AxiosInstance } from 'axios';
import { getToken } from '@api/token';

const apiURL = import.meta.env.VITE_API_URL;
const api: AxiosInstance = axios.create({
	baseURL: apiURL,
});

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
