import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useLine } from '../../hooks/useLine'

export const Start = () => {
  const { color } = useLine()

  return (
    <Flex flexShrink="0" alignItems="center" position="relative">
      <Text fontSize="xs" position="absolute" bottom="4" color={color}>
        上行
      </Text>
      <Box h="20px" w="6px" bg={color} position="absolute" left="0"></Box>
      <Box h="6px" w="48px" bg={color}></Box>
      <Text fontSize="xs" position="absolute" top="4" color={color}>
        下行
      </Text>
    </Flex>
  )
}
