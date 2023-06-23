import { useColorMode } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { ControlledMap } from './containers/ControlledMap'
import { Header } from './containers/Header'

export const App = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <link
          rel="icon"
          href={
            colorMode === 'light' ? '/faviconLight.png' : '/faviconDark.png'
          }
        />
        <title>{t('title')}</title>
      </Helmet>
      <Header />
      <ControlledMap />
    </>
  )
}
