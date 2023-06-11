import axios, { AxiosRequestConfig } from 'axios';

const apiURL = import.meta.env.VITE_API_URL;

// axios.get
export const get = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const fullURL = apiURL + url;
	try {
		const response = await axios.get<T>(fullURL, config);
		return response.data;
	} catch (err) {
		throw new Error('API 요청에 실패했습니다.');
	}
};

// axios.post
export const post = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const fullURL = apiURL + url;
	try {
		const response = await axios.post<T>(fullURL, data, config);
		return response.data;
	} catch (err) {
		throw new Error('API 요청에 실패했습니다.');
	}
};

// axios.patch
export const patch = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): Promise<void> => {
	const fullURL = apiURL + url;
	try {
		await axios.patch<T>(fullURL, data, config);
	} catch (err) {
		throw new Error('API 요청에 실패했습니다.');
	}
};

// axios.delete
export const del = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<void> => {
	const fullURL = apiURL + url;
	try {
		await axios.delete<T>(fullURL, config);
	} catch (err) {
		throw new Error('API 요청에 실패했습니다.');
	}
};
