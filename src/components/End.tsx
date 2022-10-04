import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { lineContext } from '../providers/lineContext'

export const End = () => {
  const { color } = useContext(lineContext)

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
      <Box h="20px" w="6px" bg={color} position="absolute" right="0"></Box>
      <Box h="6px" w="40px" bg={color}></Box>
      <Text fontSize="xs" position="absolute" top="4" color={color} right="0">
        下行
      </Text>
    </Flex>
  )
}
