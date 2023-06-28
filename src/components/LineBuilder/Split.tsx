import { Box, Flex } from '@chakra-ui/react'

import { useLine } from '../../hooks/useLine'

export const Split = () => {
  const { color } = useLine()

  return (
    <Flex align="center" flexShrink="0">
      <Box w="32px" h="6px" bg={color} />
      <Box w="6px" h="80px" bg={color} borderLeftRadius="sm" />
    </Flex>
  )
}
