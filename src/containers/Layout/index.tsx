import { useQuery } from '@apollo/client'
import { useColorMode } from '@chakra-ui/react'
import { Outlet } from '@tanstack/router'
import { flatten, pluck } from 'ramda'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { schedulesContext } from '../../contexts/schedulesContext'
import {
  LIST_LINE_STOP_SCHEDULES,
  LineStopSchedule,
} from '../../queries/lineStopSchedules'
import { ControlledMap } from '../ControlledMap'
import { Header } from './Header'

export const Layout = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()
  const { data = { lines: [] } } = useQuery<LineStopSchedule>(
    LIST_LINE_STOP_SCHEDULES,
    {
      pollInterval: 10000,
    }
  )

  const schedules = useMemo(() => {
    const stopsSchedules = flatten(pluck('stops', data.lines))
    return flatten(pluck('schedules', stopsSchedules))
  }, [data])

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
