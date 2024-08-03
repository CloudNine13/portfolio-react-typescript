import React from 'react';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles';

const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Providers };
