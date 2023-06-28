import { Box, Flex, Text } from '@chakra-ui/react'

import { useLine } from '../../hooks/useLine'

export const Start = () => {
  const { color } = useLine()

  return (
    <Flex pos="relative" align="center" flexShrink="0">
      <Text pos="absolute" bottom="4" color={color} fontSize="xs">
        上行
      </Text>
      <Box pos="absolute" left="0" w="6px" h="20px" bg={color} />
      <Box w="48px" h="6px" bg={color} />
      <Text pos="absolute" top="4" color={color} fontSize="xs">
        下行
      </Text>
    </Flex>
  )
}
