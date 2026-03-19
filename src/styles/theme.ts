import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#FF4D4D', // Red/coral accent
    primaryLight: '#FF7373',
    primaryDark: '#D93636',
    secondary: '#1A1A1A', // Off-black
    background: '#FFFFFF',
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
      light: '#FFFFFF',
    },
    border: '#EAEAEA',
    success: '#10B981',
    whatsapp: '#25D366'
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: 'clamp(2.5rem, 5vw, 4rem)', // 40px - 64px
    h2: 'clamp(2rem, 4vw, 3rem)',   // 32px - 48px
    h3: 'clamp(1.5rem, 3vw, 2rem)', // 24px - 32px
    body: '1rem',                   // 16px
    small: '0.875rem',              // 14px
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px'
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.05)',
    md: '0 4px 12px rgba(0,0,0,0.1)',
    lg: '0 12px 24px rgba(0,0,0,0.15)',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  }
};
