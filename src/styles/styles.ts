import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#7f778b',
    darkGray: '#333333',
    lightGray: '#e4e4e7',
    extraLightGray: '#fafafa',
    brown: '#88472E',
    lightRed: '#FF817E',
  },
  animations: {
    transitions: {
      cubicBezierFadeIn: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
    },
  },
  fonts: {
    weight: {
      black: 900,
      extraBold: 800,
      bold: 700,
      demiBold: 600,
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
      xxl: '36px',
      xxxl: '48px',
    },
    style: {
      italic: 'italic',
    },
  },
};

export { theme };
