import * as React from 'react';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { THEME } from '../utils/themes';
import { Compose } from './utils/Compose';
import { makeProviders } from './utils/Providers';


interface IProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: IProps) => (
  <Compose elements={makeProviders()}>
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </Compose>
);
