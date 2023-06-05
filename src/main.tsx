import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { UseTimeProvider } from './hooks/useTime'
import './utils/dayjs'
import { UseConfigProvider } from './hooks/useConfig'

const queryClient = new QueryClient({
  defaultOptions: { queries: { cacheTime: 0 } },
})

const config = {
  initialColorMode: 'auto',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <UseConfigProvider>
          <UseTimeProvider>
            <App />
          </UseTimeProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </UseConfigProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
