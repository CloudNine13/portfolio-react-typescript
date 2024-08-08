import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    white: '#edf4f2',
    bun: '#E5CB7A',
    tomato: '#D22501',
    patty: '#88472E',
    lettuce: '#91a61d',
  },
  fonts: {
    weight: {
      extraBold: 800,
      bold: 700,
      semiBold: 600,
      medium: 500,
      light: 300,
      extraThin: 200,
      thin: 100,
    },
    size: {
      xs: '9px',
      small: '12px',
      regular: '15px',
      medium: '18px',
      large: '21px',
      xl: '24px',
    },
  },
};

export { theme };
