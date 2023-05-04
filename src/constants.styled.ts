import { DefaultTheme, createGlobalStyle } from 'styled-components'

const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#4169e1',
  secondary: '#7a96ea',
  success: '#00a468',
  warning: '#ffd400',
  danger: '#c50030',
  info: '#0089c0',
  dark: '#3c3c3c',
}

const spacings = {
  small: '4px',
  seminormal: '8px',
  normal: '16px',
  semilarge: '24px',
  large: '48px',
}

const fontSizes = {
  large: '1.125rem',
  normal: '1rem',
  small: '0.875rem',
}

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  
  font-family: 'Roboto', Helvetica, sans-serif;
  font-weight: 400;
}
`

export default {
  colors,
  spacings,
  fontSizes,
} as DefaultTheme
