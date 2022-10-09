import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import { ArrowRightIcon } from '@chakra-ui/icons'

export const ArrowRight: React.FC<BoxProps> = props => {
  return (
    <Box position="absolute" {...props}>
      <Box position="absolute" transform="translateY(-50%) translateX(-50%)">
        <ArrowRightIcon fontSize="8px" color="blackAlpha.400" />
      </Box>
    </Box>
  )
}
