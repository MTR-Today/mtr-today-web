import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Box, BoxProps } from '@chakra-ui/react'
import { memo } from 'react'

export const ArrowLeft: React.FC<BoxProps> = memo(props => (
  <Box pos="absolute" {...props}>
    <Box pos="absolute" transform="translateY(-50%) translateX(-50%)">
      <ArrowLeftIcon fontSize="8px" opacity=".3" />
    </Box>
  </Box>
))
