import { useColorMode } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { Outlet } from '@tanstack/router'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { schedulesContext } from '../../contexts/schedulesContext'
import { scheduleApi } from '../../services/scheduleApi'
import { ControlledMap } from '../ControlledMap'
import { Header } from './Header'

export const Layout = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()

  const { data: schedules = [] } = useQuery({
    queryKey: ['schedules'],
    queryFn: () => scheduleApi.list(),
    refetchInterval: 10000,
    refetchOnMount: true,
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
      <schedulesContext.Provider value={schedules}>
        <ControlledMap />
        <Outlet />
      </schedulesContext.Provider>
    </>
  )
}
