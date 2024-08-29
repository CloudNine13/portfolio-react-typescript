import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      gray: string;
      darkGray: string;
      lightGray: string;
      extraLightGray: string;
      brown: string;
      tomato: string;
    };
    animations: {
      transitions: {
        cubicBezierFadeIn: string;
      };
    };
    fonts: {
      weight: {
        black: number;
        extraBold: number;
        bold: number;
        demiBold: number;
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
        xxl: string;
        xxxl: string;
      };
      style: {
        italic: string;
      };
    };
  }
}
