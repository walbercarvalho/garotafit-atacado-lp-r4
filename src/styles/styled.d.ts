import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      background: string;
      text: {
        primary: string;
        secondary: string;
        light: string;
      };
      border: string;
      success: string;
      whatsapp: string;
    };
    typography: {
      fontFamily: string;
      h1: string;
      h2: string;
      h3: string;
      body: string;
      small: string;
      weight: {
        regular: number;
        medium: number;
        bold: number;
        black: number;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
  }
}
