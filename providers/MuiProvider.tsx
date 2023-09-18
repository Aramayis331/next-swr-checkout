'use client';
import { FC, ReactNode } from 'react';
import { theme } from 'utils/theme';

import { ThemeProvider } from '@mui/material';

const MuiProvider: FC<{ children: ReactNode }> = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MuiProvider;
