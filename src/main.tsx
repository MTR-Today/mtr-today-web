import {
  ChakraProvider,
  ColorModeScript,
  DarkMode,
  extendTheme,
} from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { UseTimeProvider } from './hooks/useTime'
import './utils/dayjs'

const queryClient = new QueryClient({
  defaultOptions: { queries: { cacheTime: 0 } },
})

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
          <UseTimeProvider>
            <App />
          </UseTimeProvider>
        </DarkMode>
      </ChakraProvider>
    </QueryClientProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  </React.StrictMode>
)
