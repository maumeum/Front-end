import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: [
			{ find: '@public', replacement: resolve(__dirname, 'public') },
			{ find: '@src', replacement: resolve(__dirname, 'src') },
			{
				find: '@components',
				replacement: resolve(__dirname, 'src/components'),
			},
			{
				find: '@pages',
				replacement: resolve(__dirname, 'src/pages'),
			},
			{
				find: '@assets',
				replacement: resolve(__dirname, 'src/assets'),
			},
			{
				find: '@styles',
				replacement: resolve(__dirname, 'src/styles'),
			},
			{
				find: '@utils',
				replacement: resolve(__dirname, 'src/utils'),
			},
		],
	},
	server: {
		port: 5000,
	},
	plugins: [react(), tsconfigPaths()],
});
