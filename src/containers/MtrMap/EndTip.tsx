import { Box, BoxProps, useColorMode } from '@chakra-ui/react'
import c from 'color'
import { LineCode, lineMap } from 'mtr-kit'
import { isEmpty } from 'ramda'
import { memo, useContext } from 'react'

import { MapMode } from '../../constants/mapMode'
import { lineContext } from '../../contexts/mapContext'

export const EndTip: React.FC<
  BoxProps & { coord: [x: number, y: number]; line: LineCode; flip?: boolean }
> = memo(({ coord: [x, y], line, flip = false, ...props }) => {
  const { selectedLines, mode } = useContext(lineContext)
  const { colorMode } = useColorMode()
  const color = lineMap[line].color
  const isSelected =
    mode === MapMode.FARES ||
    isEmpty(selectedLines) ||
    selectedLines.includes(line)

  return (
    <Box
      pos="absolute"
      top={`${y}px`}
      left={`${x}px`}
      fontSize="xs"
      opacity={!isSelected ? '.3' : undefined}
      style={{ transition: 'opacity .3s' }}
      {...props}
    >
      <Box
        pos="absolute"
        bottom="2"
        fontSize="8px"
        opacity=".3"
        transform="translateX(-50%)"
        whiteSpace="nowrap"
      >
        {flip ? '下行' : '上行'}
      </Box>
      <Box
        pos="absolute"
        top="2"
        fontSize="8px"
        opacity=".3"
        transform="translateX(-50%)"
        whiteSpace="nowrap"
      >
        {flip ? '上行' : '下行'}
      </Box>
      <Box
        pos="absolute"
        w="6px"
        h="16px"
        bg={colorMode === 'dark' && color ? c(color).darken(0.3).hex() : color}
        transform="translateY(-50%) translateX(-50%)"
      />
    </Box>
  )
})
