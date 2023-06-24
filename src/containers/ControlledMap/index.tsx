import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { min } from 'ramda'
import { useMemo } from 'react'
import { isSafari } from 'react-device-detect'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import { useWindowSize } from '../../hooks/useWindowSize'
import { MAP_HEIGHT, MAP_WIDTH, MtrMap } from '../MtrMap'
import { Bg } from './Bg'
import { Toolbox } from './Toolbox'

export const CONTAINER_WIDTH = 2800 * 2
export const CONTAINER_HEIGHT = 1630 * 2

export const ControlledMap: React.FC = () => {
  const { width, height } = useWindowSize()

  const { fitScale, containerWidth, containerHeight } = useMemo(() => {
    const scale = min(width / MAP_WIDTH, height / MAP_HEIGHT)
    return {
      fitScale: scale,
      containerWidth: width / scale,
      containerHeight: height / scale,
    }
  }, [height, width])

  return (
    <>
      {/* Scaling Canvas will crash IOS device */}
      {isSafari && <Bg />}
      <TransformWrapper
        centerOnInit
        minScale={fitScale}
        alignmentAnimation={{ disabled: true, sizeX: 0, sizeY: 0 }}
        centerZoomedOut
      >
        {({ zoomIn, zoomOut, centerView }) => (
          <>
            <TransformComponent
              wrapperStyle={{ maxWidth: '100vw', maxHeight: '100vh' }}
            >
              <DragContainer
                width={`${containerWidth}px`}
                height={`${containerHeight}px`}
              >
                <MtrMap />
                {!isSafari && <Bg />}
              </DragContainer>
            </TransformComponent>
            <Box position="fixed" bottom="16px" left="16px" zIndex="overlay">
              <Toolbox
                onFitScreenClick={() => {
                  centerView(fitScale)
                }}
                onZoomInClick={() => zoomIn()}
                onZoomOutClick={() => zoomOut()}
              />
            </Box>
          </>
        )}
      </TransformWrapper>
    </>
  )
}

const DragContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
