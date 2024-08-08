import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      bun: string;
      tomato: string;
      patty: string;
      lettuce: string;
    };
    fonts: {
      weight: {
        extraBold: number;
        bold: number;
        semiBold: number;
        medium: number;
        light: number;
        extraThin: number;
        thin: number;
      };
      size: {
        xs: string;
        small: string;
        regular: string;
        medium: string;
        large: string;
        xl: string;
      };
    };
  }
}
