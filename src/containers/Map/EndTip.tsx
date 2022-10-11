import { Box, BoxProps, useColorMode } from '@chakra-ui/react'
import React, { memo, useContext } from 'react'
import { Line } from '../../constants/line'
import { lineConfigsContext } from '../../contexts/lineConfigsContext'
import c from 'color'

export const EndTip: React.FC<
  BoxProps & { coord: [x: number, y: number]; line: Line; flip?: boolean }
> = memo(({ coord: [x, y], line, flip = false, ...props }) => {
  const { hoveringLine, lineConfigs } = useContext(lineConfigsContext)
  const { colorMode } = useColorMode()
  const color = lineConfigs[line]?.color

  return (
    <Box
      position="absolute"
      top={`${y}px`}
      left={`${x}px`}
      fontSize="xs"
      opacity={hoveringLine && hoveringLine !== line ? '.3' : undefined}
      style={{ transition: 'opacity .3s' }}
      {...props}
    >
      <Box
        fontSize="8px"
        whiteSpace="nowrap"
        position="absolute"
        bottom="2"
        transform="translateX(-50%)"
        opacity=".3"
      >
        {flip ? '下行' : '上行'}
      </Box>
      <Box
        fontSize="8px"
        opacity=".3"
        whiteSpace="nowrap"
        position="absolute"
        transform="translateX(-50%)"
        top="2"
      >
        {flip ? '上行' : '下行'}
      </Box>
      <Box
        w="6px"
        h="16px"
        position="absolute"
        transform="translateY(-50%) translateX(-50%)"
        bg={colorMode === 'dark' && color ? c(color).darken(0.3).hex() : color}
      />
    </Box>
  )
})
