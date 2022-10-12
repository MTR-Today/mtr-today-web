import { Map, MAP_HEIGHT, MAP_WIDTH } from './containers/Map'
import styled from '@emotion/styled'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { useCallback, useState } from 'react'
import type { Coordinates } from '@dnd-kit/utilities'
import { useWindowSize } from './hooks/useWindowSize'

export const App = () => {
  const { width, height } = useWindowSize()
  const [{ x, y }, setCoordinates] = useState<Coordinates>({
    x: -MAP_WIDTH / 2 / 2,
    y: -MAP_HEIGHT / 2 / 2,
  })

  const handleDragEnd = useCallback(
    ({ delta }: DragEndEvent) => {
      setCoordinates(({ x, y }) => {
        const newX = x + delta.x
        const newY = y + delta.y

        return {
          x:
            newX > 0
              ? 0
              : newX < -MAP_WIDTH + width
              ? -MAP_WIDTH + width
              : newX,
          y:
            newY > 0
              ? 0
              : newY < -MAP_HEIGHT + height
              ? -MAP_HEIGHT + height
              : newY,
        }
      })
    },
    [width, height]
  )

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Wrapper>
        <BG />
        <Map x={x} y={y} />
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
