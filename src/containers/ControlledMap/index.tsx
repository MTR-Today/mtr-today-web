import { Box } from '@chakra-ui/react'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import type { Coordinates } from '@dnd-kit/utilities'
import { max, min } from 'ramda'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { useWindowSize } from '../../hooks/useWindowSize'
import { MAP_HEIGHT, MAP_WIDTH } from '../MtrMap'
import { Bg } from './Bg'
import { CONTAINER_HEIGHT, CONTAINER_WIDTH, DraggableMap } from './DraggableMap'
import { Toolbox } from './Toolbox'

export const ControlledMap: React.FC = () => {
  const { width, height } = useWindowSize()

  const [scale, setScale] = useState(1)

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

  const zoomIn = useCallback(() => {
    setScale(prev => min(prev + 0.1, 2))
  }, [])

  const zoomOut = useCallback(() => {
    setScale(prev => max(prev - 0.1, 0.5))
  }, [])

  useEffect(() => {
    const handleScrollWheel = ({ deltaY }: WheelEvent) => {
      if (deltaY > 0) zoomOut()
      else zoomIn()
    }

    addEventListener('wheel', handleScrollWheel)

    return () => {
      removeEventListener('wheel', handleScrollWheel)
    }
  }, [zoomIn, zoomOut])

  const fitScreen = useCallback(() => {
    const fitScale = min(width / MAP_WIDTH, height / MAP_HEIGHT)
    setScale(fitScale)
    setCoordinates(initCord)
  }, [height, initCord, width])

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Bg />
      <DraggableMap x={x} y={y} scale={scale} />
      <Box position="fixed" bottom="16px" left="16px" zIndex="overlay">
        <Toolbox
          onFitScreenClick={fitScreen}
          onZoomInClick={zoomIn}
          onZoomOutClick={zoomOut}
        />
      </Box>
    </DndContext>
  )
}
