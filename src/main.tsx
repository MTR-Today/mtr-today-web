import './locales'
import './utils/dayjs'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { UseConfigProvider } from './hooks/useConfig'
import { UseTimeProvider } from './hooks/useTime'
import { router } from './Router'

const queryClient = new QueryClient({
  defaultOptions: { queries: { cacheTime: 0 } },
})

const config = {
  initialColorMode: 'auto',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  components: {
    Drawer: {
      variants: {
        alwaysOpen: {
          parts: ['dialog, dialogContainer'],
          dialog: {
            pointerEvents: 'auto',
          },
          dialogContainer: {
            pointerEvents: 'none',
          },
        },
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <UseConfigProvider>
          <UseTimeProvider>
            <RouterProvider router={router} />
          </UseTimeProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </UseConfigProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
)
