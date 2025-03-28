import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { min } from 'ramda';
import { useMemo } from 'react';
import { isIOS } from 'react-device-detect';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import { useWindowSize } from '../../hooks/useWindowSize';
import { Toolbox } from './Toolbox';

export const CONTAINER_WIDTH = 2800 * 2;
export const CONTAINER_HEIGHT = 1630 * 2;

type Props = {
  childWidth: number;
  childHeight: number;
  children: React.ReactNode;
  bg?: React.ReactNode;
};

export const DragContainer: React.FC<Props> = ({
  childHeight,
  childWidth,
  children,
  bg,
}) => {
  const { width, height } = useWindowSize();

  const { fitScale, containerWidth, containerHeight } = useMemo(() => {
    const scale = min(width / childWidth, height / childHeight);
    return {
      fitScale: scale,
      containerWidth: width / scale,
      containerHeight: height / scale,
    };
  }, [childHeight, childWidth, height, width]);

  return (
    <>
      {/* Scaling Canvas will crash IOS device */}
      {isIOS && bg}
      <TransformWrapper
        centerOnInit
        minScale={fitScale}
        alignmentAnimation={{ disabled: true, sizeX: 0, sizeY: 0 }}
        centerZoomedOut
      >
        {({ zoomIn, zoomOut, centerView }) => (
          <>
            <TransformComponent
              wrapperStyle={{
                maxWidth: '100vw',
                maxHeight: '100vh',
              }}
            >
              <DragWrapper
                width={`${containerWidth}px`}
                height={`${containerHeight}px`}
              >
                {/* Scaling Canvas will crash IOS device */}
                {!isIOS && bg}
                {children}
              </DragWrapper>
            </TransformComponent>
            <Box pos="fixed" zIndex="overlay" bottom="16px" left="16px">
              <Toolbox
                onFitScreenClick={() => {
                  centerView(fitScale);
                }}
                onZoomInClick={() => zoomIn()}
                onZoomOutClick={() => zoomOut()}
              />
            </Box>
          </>
        )}
      </TransformWrapper>
    </>
  );
};

const DragWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
