import { ThemeProvider } from 'styled-components'
import theme from './constants.styled'
import { Button } from './shared/components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '10px' }}>
        {['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'link'].map((color) => (
          <Button id={`color-${color}`} key={color} variant={color as unknown}>
            {color.charAt(0).toUpperCase() + color.substring(1)}
          </Button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '10px', background: 'lightgray' }}>
        {['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'link'].map((color) => (
          <Button key={color} variant={color as unknown}>
            {color.charAt(0).toUpperCase() + color.substring(1)}
          </Button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '10px', background: 'black' }}>
        {['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'link'].map((color) => (
          <Button key={color} variant={color as unknown}>
            {color.charAt(0).toUpperCase() + color.substring(1)}
          </Button>
        ))}
      </div>
    </ThemeProvider>
  )
}

export default App
