import { create } from 'zustand';
import { getToken } from '@api/Token';
import { get } from '@api/Api';

import UserType from '@src/types/UserType';
import AuthType from '@src/types/AuthType';
import DataType from '@src/types/DataType';

const useAuthStore = create<AuthType>((set) => ({
	userData: null,
	setUserData: (userData: UserType) => set({ userData }),
	initialize: () => {
		const fetchData = async () => {
			if (getToken() !== null) {
				const responseData = await get<DataType>('/api/users/info', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				useAuthStore.setState({ userData: responseData.data as UserType });
			} else {
				return undefined;
			}
		};
		fetchData();
	},
}));

export default useAuthStore;
