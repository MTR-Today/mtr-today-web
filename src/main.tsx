import './locales'
import './utils/dayjs'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { UseConfigProvider } from './hooks/useConfig'
import { UseTimeProvider } from './hooks/useTime'

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
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <UseConfigProvider>
          <UseTimeProvider>
            <App />
            <Global
              styles={css`
                html,
                html * {
                  // Prevent mobile scroll on Dnd
                  touch-action: none;
                }
              `}
            />
          </UseTimeProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </UseConfigProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
)
