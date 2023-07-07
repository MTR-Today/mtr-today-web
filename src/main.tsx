import './locales'
import './utils/dayjs'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { RouterProvider } from '@tanstack/router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { UseConfigProvider } from './hooks/useConfig'
import { UseTimeProvider } from './hooks/useTime'
import { router } from './Router'

const apolloClient = new ApolloClient({
  uri: `${import.meta.env.VITE_API_BASE_URL}/api/v1/graphql`,
  cache: new InMemoryCache(),
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
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <UseConfigProvider>
          <UseTimeProvider>
            <RouterProvider router={router} />
          </UseTimeProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </UseConfigProvider>
      </ChakraProvider>
    </ApolloProvider>
  </StrictMode>
)
