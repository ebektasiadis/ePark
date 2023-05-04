import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      primary: string
      secondary: string
      success: string
      warning: string
      danger: string
      info: string
      dark: string
      light: string
    }
    spacings: {
      small: string
      seminormal: string
      normal: string
      semilarge: string
      large: string
    }
    fontSizes: {
      large: string
      normal: string
      small: string
    }
  }
}
