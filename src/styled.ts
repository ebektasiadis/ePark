import { DefaultTheme, createGlobalStyle } from 'styled-components'

const colors = {
  white: '#ffffff',
  eerieBlack: '#1b1b1e',
  dukeBlue: '#390099',
  murrey: '#9e0059',
  poppy: '#df2935',
  orange: '#f3a712',
  emerald: '#4cb963',
  cerulean: '#006989',
}

const spacings = {
  small: '4px',
  seminormal: '8px',
  normal: '16px',
  semilarge: '24px',
  large: '48px',
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
} as DefaultTheme
