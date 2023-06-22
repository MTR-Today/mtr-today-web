import { Box, Flex, Text } from '@chakra-ui/react'

import { useLine } from '../../hooks/useLine'

export const End = () => {
  const { color } = useLine()

  return (
    <Flex flexShrink="0" alignItems="center" position="relative">
      <Text
        fontSize="xs"
        position="absolute"
        bottom="4"
        color={color}
        right="0"
      >
        上行
      </Text>
      <Box h="20px" w="6px" bg={color} position="absolute" right="0" />
      <Box h="6px" w="48px" bg={color} />
      <Text fontSize="xs" position="absolute" top="4" color={color} right="0">
        下行
      </Text>
    </Flex>
  )
}
