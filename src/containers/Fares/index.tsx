import { Box } from '@chakra-ui/react'

import { Toolbox } from './ToolBox'

export const Fares = () => (
  <Box
    pos="fixed"
    zIndex="overlay"
    top="72px"
    left="50%"
    maxW="calc(100% - 32px)"
    transform="translateX(-50%)"
  >
    <Toolbox />
  </Box>
)
