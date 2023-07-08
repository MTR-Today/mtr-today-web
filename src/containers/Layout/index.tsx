import { useQuery } from '@apollo/client'
import { useColorMode } from '@chakra-ui/react'
import { Outlet } from '@tanstack/router'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { schedulesContext } from '../../contexts/schedulesContext'
import { LIST_SCHEDULES, Schedules } from '../../queries/schedules'
import { ControlledMap } from '../ControlledMap'
import { Header } from './Header'

export const Layout = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()
  const { data = { schedules: [] } } = useQuery<Schedules>(LIST_SCHEDULES, {
    pollInterval: 10000,
  })

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
      <schedulesContext.Provider value={data.schedules}>
        <ControlledMap />
        <Outlet />
      </schedulesContext.Provider>
    </>
  )
}
