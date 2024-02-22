import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}
