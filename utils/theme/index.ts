import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#000034',
			dark: '#979ab8',
			light: '#d6d8ee',
		},
		secondary: {
			main: '#4B4E68',
		},
		error: {
			main: '#EB5757',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					width: '100%',
					height: '56px',
					fontWeight: '600',
					borderRadius: '16px',
					'@media(max-width: 575px)': {
						height: '42px',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					width: '500px',
					padding: '20px',
				},
			},
		},
	},
});
