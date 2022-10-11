import { Box, BoxProps } from '@chakra-ui/react'
import React, { memo } from 'react'
import { ArrowRightIcon } from '@chakra-ui/icons'

export const ArrowRight: React.FC<BoxProps> = memo(props => {
  return (
    <Box position="absolute" {...props}>
      <Box position="absolute" transform="translateY(-50%) translateX(-50%)">
        <ArrowRightIcon fontSize="8px" opacity=".3" />
      </Box>
    </Box>
  )
})
