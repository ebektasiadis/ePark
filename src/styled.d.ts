// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      eerieBlack: string
      dukeBlue: string
      murrey: string
      poppy: string
      orange: string
      emerald: string
      cerulean: string
    }
    spacings: {
      small: string
      seminormal: string
      normal: string
      semilarge: string
      large: string
    }
  }
}
