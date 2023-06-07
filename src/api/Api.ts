import axios, { AxiosRequestConfig } from 'axios';

const apiURL = import.meta.env.VITE_API_URL;
const apiClient = axios.create({});

const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
	try {
		const response = await apiClient.request<T>(config);
		return response.data;
	} catch (err) {
		throw new Error('API 요청에 실패했습니다.');
	}
};

// axios.get
export const get = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const fullURL = apiURL + url;
	return request<T>({
		url: fullURL,
		method: 'GET',
		...config,
	});
};

export const post = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const fullURL = apiURL + url;
	const requestOptions: AxiosRequestConfig = {
		url: fullURL,
		method: 'POST',
		...(data && { data }), // Conditionally include 'data' if it exists
		...config,
	};
	return request<T>(requestOptions);
};

// axios.patch
export const patch = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const fullURL = apiURL + url;
	return request<T>({
		url: fullURL,
		method: 'PATCH',
		data,
		...config,
	});
};

//axios delete
export const del = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const fullURL = apiURL + url;
	return request<T>({
		url: fullURL,
		method: 'DELETE',
		...config,
	});
};
