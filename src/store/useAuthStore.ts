import { create } from 'zustand';
import { getToken } from '@api/Token';
import { get } from '@api/Api';

import AuthType from '@src/types/AuthType';
import DataType from '@src/types/DataType';

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
