import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
//  현재 모듈의 기준 경로를 기준으로 상대 경로를 절대 경로로 변환
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: '@src', replacement: resolve(__dirname, 'src') },
			{
				find: '@components',
				replacement: resolve(__dirname, 'src/components'),
			},
		],
	},

	plugins: [react(), tsconfigPaths()],
});
