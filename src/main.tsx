import {
  ChakraProvider,
  ColorModeScript,
  DarkMode,
  extendTheme,
  ThemeProvider,
} from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const queryClient = new QueryClient()

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  global: {
    bg: 'black.900',
  },
  config,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <DarkMode>
          <App />
        </DarkMode>
      </ChakraProvider>
    </QueryClientProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  </React.StrictMode>
)
