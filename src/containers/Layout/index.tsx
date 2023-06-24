import { useColorMode } from '@chakra-ui/react'
import { Outlet } from '@tanstack/router'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { ControlledMap } from '../ControlledMap'
import { Header } from './Header'

export const Layout = () => {
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
      <Outlet />
    </>
  )
}
