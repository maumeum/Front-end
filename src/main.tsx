import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from '@src/styles/GlobalStyles';
import GlobalFont from '@src/styles/GlobalFont';
import { ThemeProvider } from 'styled-components';
import { theme } from '@src/styles/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<GlobalFont />
			<>
				<App />
			</>
		</ThemeProvider>
	</React.StrictMode>,
);
