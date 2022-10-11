import { Box, BoxProps } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ArrowLeftIcon } from '@chakra-ui/icons'

export const ArrowLeft: React.FC<BoxProps> = props => {
  return (
    <Box position="absolute" {...props}>
      <Box position="absolute" transform="translateY(-50%) translateX(-50%)">
        <ArrowLeftIcon fontSize="8px" opacity=".3" />
      </Box>
    </Box>
  )
}
