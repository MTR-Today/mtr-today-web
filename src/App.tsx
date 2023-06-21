import { useColorMode } from '@chakra-ui/react'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import type { Coordinates } from '@dnd-kit/utilities'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { max, min } from 'ramda'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import faviconDark from './assets/faviconDark.svg'
import faviconLight from './assets/faviconLight.svg'
import { Bg } from './containers/Bg'
import { Header } from './containers/Header'
import { CONTAINER_HEIGHT, CONTAINER_WIDTH, Map } from './containers/Map'
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

  const { mapWidth, mapHight } = useMemo(
    () => ({
      mapWidth: CONTAINER_WIDTH * scale,
      mapHight: CONTAINER_HEIGHT * scale,
    }),
    [scale]
  )

  const [{ x, y }, setCoordinates] = useState<Coordinates>({
    x: mapWidth > width ? -mapWidth / 2 / 1.5 : (width - mapWidth) / 2,
    y: mapHight > height ? -mapHight / 2 / 1.5 : (height - mapHight) / 2,
  })

  const handleDragEnd = useCallback(
    ({ delta }: DragEndEvent) => {
      setCoordinates(old => {
        const newX = old.x + delta.x
        const newY = old.y + delta.y
        return { x: newX, y: newY }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [width, height]
  )

  useEffect(() => {
    addEventListener('wheel', ({ deltaY }) => {
      if (deltaY > 0) {
        setScale(prev => max(prev - 0.1, 0.1))
      } else {
        setScale(prev => min(prev + 0.1, 2))
      }
    })
  }, [])

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
      </Wrapper>
    </DndContext>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
