import { create } from 'zustand';
import { getToken } from '@api/token';
import { get } from '@src/api/api';

import AuthType from '@src/types/authType';
import DataType from '@src/types/dataType';

const useAuthStore = create<AuthType>((set) => ({
	userData: null,
	getUserData: async () => {
		if (getToken()) {
			const responseData = await get<DataType>('/api/users/info', {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});
			set({ userData: await responseData.data });
		}
	},
}));

export default useAuthStore;
