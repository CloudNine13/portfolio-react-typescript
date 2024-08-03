import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      amour: string;
    };
    fonts: {
      bold: number;
      medium: number;
      light: number;
    };
    fontSize: {
      small: string;
      medium: string;
      big: string;
    };
  }
}
