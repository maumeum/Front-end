import { create } from 'zustand';

import { UuidType } from '@src/types/authType';

const useUUIDStore = create<UuidType>((set) => ({
	uuidData: '',
	setUUID: (uuidData) => set({ uuidData }),
}));

export default useUUIDStore;
