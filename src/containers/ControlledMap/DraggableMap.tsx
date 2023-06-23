import { Box } from '@chakra-ui/react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import styled from '@emotion/styled'

import { MtrMap } from '../MtrMap'

type Props = {
  x: number
  y: number
  scale: number
}

export const CONTAINER_WIDTH = 2800 * 2
export const CONTAINER_HEIGHT = 1630 * 2

export const DraggableMap: React.FC<Props> = ({ x, y, scale }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: 'map',
    })

  return (
    <DragContainer
      borderWidth="2px"
      boxShadow="md"
      borderRadius="xl"
      ref={setNodeRef}
      style={{
        transform: transform
          ? ` ${CSS.Translate.toString({
              ...transform,
              scaleX: scale,
              scaleY: scale,
            })} scale(${scale})`
          : `scale(${scale})`,
        top: y,
        left: x,
      }}
      {...attributes}
      {...listeners}
    >
      <MtrMap isDragging={isDragging} />
    </DragContainer>
  )
}

const DragContainer = styled(Box)`
  width: ${CONTAINER_WIDTH}px;
  height: ${CONTAINER_HEIGHT}px;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  // Prevent mobile scrolling
  touch-action: none;
`
