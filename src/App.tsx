import { Map, MAP_HEIGHT, MAP_WIDTH } from './containers/Map'
import styled from '@emotion/styled'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { useCallback, useState } from 'react'
import type { Coordinates } from '@dnd-kit/utilities'
import { useWindowSize } from './hooks/useWindowSize'
import { Header } from './containers/Header'
import { useQuery } from '@tanstack/react-query'
import { getLineConfigs } from './services/getLineConfigs'

export const App = () => {
  const { width, height } = useWindowSize()
  const { data: lineConfigs = {} } = useQuery(['line-configs'], () =>
    getLineConfigs()
  )

  const [{ x, y }, setCoordinates] = useState<Coordinates>({
    x: MAP_WIDTH > width ? -MAP_WIDTH / 2 / 2 : (width - MAP_WIDTH) / 2,
    y: MAP_HEIGHT > height ? -MAP_HEIGHT / 2 / 2 : (height - MAP_HEIGHT) / 2,
  })

  const handleDragEnd = useCallback(
    ({ delta }: DragEndEvent) => {
      const maxHeight = -MAP_HEIGHT + height
      const maxWidth = -MAP_WIDTH + width
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

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Header lineConfigs={lineConfigs} />
      <Wrapper>
        <BG />
        <Map x={x} y={y} lineConfigs={lineConfigs} />
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
