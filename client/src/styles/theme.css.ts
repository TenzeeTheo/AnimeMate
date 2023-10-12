import { createGlobalTheme } from "@vanilla-extract/css";

export const root = createGlobalTheme(":root", {
  fonts: {
    brand: 'Kaisei Tokumin, sans-serif',
    body: 'Kaisei Tokumin, sans-serif',
  },
  colors: {
    // Semantic tokens
    primary: 'white', 
    complementary: 'black', 
    brand: 'skyblue', 
    brandLight: 'emerald', 
    favColorDark: '#400099', 
    favColor: '#9F83C6',
    semiColor:'rgba(0, 255, 255, 0.352)',


    // Color tokens
    success: 'green', 
    warning: 'amber', 
    error: 'rose',
    grey200: 'gray', 
    grey300: 'gray', 
    grey400: 'gray', 
    grey500: 'gray', 
    grey600: 'gray', 
  },
  space: {
    none: '0',
    '1x': '8px',
    '2x': '16px',
    '3x': '24px',
    '4x': '32px',
    '5x': '40px',
    '6x': '48px',
    '7x': '60px',

  },
  fontSizes: {
    '1x': '8px',
    '2x': '12px',
    '3x': '16px',
    '4x': '20px',
    '5x': '24px',
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  },
});

export const vars = { ...root };
