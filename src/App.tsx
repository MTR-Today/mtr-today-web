import { Map, MAP_HEIGHT, MAP_WIDTH } from './containers/Map'
import styled from '@emotion/styled'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Coordinates } from '@dnd-kit/utilities'
import { useWindowSize } from './hooks/useWindowSize'
import { Header } from './containers/Header'
import { useQuery } from '@tanstack/react-query'
import { getLineConfigs } from './services/getLineConfigs'
import { max, min } from 'ramda'

export const App = () => {
  const { width, height } = useWindowSize()
  const [scale, setScale] = useState(1)
  const { data: lineConfigs = {} } = useQuery(['line-configs'], () =>
    getLineConfigs()
  )

  const { mapWidth, mapHight } = useMemo(
    () => ({
      mapWidth: MAP_WIDTH * scale,
      mapHight: MAP_HEIGHT * scale,
    }),
    [scale]
  )

  const [{ x, y }, setCoordinates] = useState<Coordinates>({
    x: mapWidth > width ? -mapWidth / 2 / 2 : (width - mapWidth) / 2,
    y: mapHight > height ? -mapHight / 2 / 2 : (height - mapHight) / 2,
  })

  const handleDragEnd = useCallback(
    ({ delta }: DragEndEvent) => {
      const maxHeight = -mapHight + height
      const maxWidth = -mapWidth + width
      setCoordinates(old => {
        const newX = old.x + delta.x
        const newY = old.y + delta.y
        const x = newX > 0 ? 0 : newX < maxWidth ? maxWidth : newX
        const y = newY > 0 ? 0 : newY < maxHeight ? maxHeight : newY
        return { x, y }
      })
    },
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
      <Header lineConfigs={lineConfigs} />
      <Wrapper>
        <BG />
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

const BG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.1;
  background-color: #000000;
`
