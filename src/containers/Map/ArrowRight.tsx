import { ArrowRightIcon } from '@chakra-ui/icons'
import { Box, BoxProps } from '@chakra-ui/react'
import { memo } from 'react'

export const ArrowRight: React.FC<BoxProps> = memo(props => (
  <Box position="absolute" {...props}>
    <Box position="absolute" transform="translateY(-50%) translateX(-50%)">
      <ArrowRightIcon fontSize="8px" opacity=".3" />
    </Box>
  </Box>
))
