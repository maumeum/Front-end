import { create } from 'zustand';
import { getToken } from '@api/token';
import { get } from '@api/api';

import { SubmitType } from '@src/types/authType';
import DataType from '@src/types/dataType';

const useSummitStore = create<SubmitType>((set) => ({
	isSubmit: false,
	setIsSubmit: async () => {
		if (getToken()) {
			const responseData = await get<DataType>('/api/team/auth', {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});
			set({ isSubmit: await responseData.data.isSubmit });
		}
	},
	resetSubmit: () => set({ isSubmit: false }),
}));

export default useSummitStore;
