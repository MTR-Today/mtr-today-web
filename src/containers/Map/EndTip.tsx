import { Box, BoxProps } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Line } from '../../constants/line'
import { lineConfigsContext } from '../../contexts/lineConfigsContext'

export const EndTip: React.FC<
  BoxProps & { coord: [x: number, y: number]; line: Line; flip?: boolean }
> = ({ coord: [x, y], line, flip = false, ...props }) => {
  const configs = useContext(lineConfigsContext)

  return (
    <Box
      position="absolute"
      top={`${x}px`}
      left={`${y}px`}
      fontSize="xs"
      {...props}
    >
      <Box
        fontSize="8px"
        color="blackAlpha.500"
        whiteSpace="nowrap"
        position="absolute"
        bottom="2"
        transform="translateX(-50%)"
      >
        {flip ? '下行' : '上行'}
      </Box>
      <Box
        fontSize="8px"
        color="blackAlpha.500"
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
        bg={configs[line]?.color}
      />
    </Box>
  )
}
