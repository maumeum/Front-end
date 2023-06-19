import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import { theme } from '../src/styles/Theme';

export const decorators = [
	withThemeFromJSXProvider({
		themes: { light: theme },
		defaultTheme: 'light',
		Provider: ThemeProvider,
		GlobalStyles,
	}),
];

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
