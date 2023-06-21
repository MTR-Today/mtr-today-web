import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import type { Coordinates } from '@dnd-kit/utilities'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { max, min } from 'ramda'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { ImEnlarge } from 'react-icons/im'

import faviconDark from './assets/faviconDark.svg'
import faviconLight from './assets/faviconLight.svg'
import { Bg } from './containers/Bg'
import { Header } from './containers/Header'
import {
  CONTAINER_HEIGHT,
  CONTAINER_WIDTH,
  MAP_HEIGHT,
  MAP_WIDTH,
  Map,
} from './containers/Map'
import { useWindowSize } from './hooks/useWindowSize'
import { lineConfigApi } from './services/lineConfigApi'

export const App = () => {
  const { colorMode } = useColorMode()
  const { width, height } = useWindowSize()
  const { t } = useTranslation()

  const [scale, setScale] = useState(1)
  const { data: lineConfigs = [] } = useQuery({
    queryKey: ['line-configs'],
    queryFn: () => lineConfigApi.list(),
  })

  const initCord = useMemo<Coordinates>(
    () => ({
      x:
        CONTAINER_WIDTH > width
          ? -(CONTAINER_WIDTH / 2 - width / 2)
          : (width - CONTAINER_WIDTH) / 2,
      y:
        CONTAINER_HEIGHT > height
          ? -(CONTAINER_HEIGHT / 2 - height / 2)
          : (height - CONTAINER_HEIGHT) / 2,
    }),
    [height, width]
  )

  const [{ x, y }, setCoordinates] = useState<Coordinates>(initCord)

  const handleDragEnd = useCallback(({ delta }: DragEndEvent) => {
    setCoordinates(old => {
      const newX = old.x + delta.x
      const newY = old.y + delta.y
      return { x: newX, y: newY }
    })
  }, [])

  useEffect(() => {
    addEventListener('wheel', ({ deltaY }) => {
      if (deltaY > 0) {
        setScale(prev => max(prev - 0.1, 0.1))
      } else {
        setScale(prev => min(prev + 0.1, 2))
      }
    })
  }, [])

  const fitScreen = useCallback(() => {
    const fitScale = min(width / MAP_WIDTH, height / MAP_HEIGHT)
    setScale(fitScale)
    setCoordinates(initCord)
  }, [height, initCord, width])

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Helmet>
        <link
          rel="icon"
          type="image/svg+xml"
          href={colorMode === 'light' ? faviconLight : faviconDark}
        />
        <title>{t('title')}</title>
      </Helmet>
      <Header />
      <Wrapper>
        <Bg />
        <Map x={x} y={y} lineConfigs={lineConfigs} scale={scale} />
        <Tooltip label={t('fit_screen')}>
          <IconButton
            variant="outline"
            aria-label="dit-screen"
            icon={<ImEnlarge />}
            position="fixed"
            zIndex="overlay"
            bottom="16px"
            left="16px"
            onClick={fitScreen}
          />
        </Tooltip>
      </Wrapper>
    </DndContext>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
