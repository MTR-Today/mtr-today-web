import { Box, Flex } from '@chakra-ui/react'

import { useLine } from '../../hooks/useLine'

export const Joint = () => {
  const { color } = useLine()

  return (
    <Flex flexShrink="0" alignItems="center">
      <Box h="80px" w="6px" bg={color} borderRightRadius="sm" />
      <Box h="6px" w="32px" bg={color} />
    </Flex>
  )
}
