import { useColorMode } from '@chakra-ui/react'
import { Outlet, useRouterContext } from '@tanstack/router'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { Bg } from '../../components/Bg/Bg'
import { MapMode } from '../../constants/mapMode'
import { useConfig } from '../../hooks/useConfig'
import { DragContainer } from '../DragContainer'
import { MAP_HEIGHT, MAP_WIDTH, MtrMap } from '../MtrMap'
import { Header } from './Header'

export const Layout = () => {
  const { colorMode } = useColorMode()
  const { t } = useTranslation()

  const routeMatch = useRouterContext()
  const { animatedBg } = useConfig()

  const currentMode = routeMatch.state.location.pathname.startsWith('/fares')
    ? MapMode.FARES
    : MapMode.SCHEDULES

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
      <DragContainer
        bg={animatedBg && <Bg />}
        childHeight={MAP_HEIGHT}
        childWidth={MAP_WIDTH}
      >
        <MtrMap mode={currentMode} />
      </DragContainer>
      <Outlet />
    </>
  )
}
