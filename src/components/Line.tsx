import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { useLine } from '../hooks/useLine'

export const Line = () => {
  const { color } = useLine()

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      color={color}
    >
      <Text fontSize="xs" position="absolute" bottom="4">
        <ArrowLeftIcon />
      </Text>
      <Box h="6px" w="80px" flexShrink="0" bg={color}></Box>
      <Text fontSize="xs" position="absolute" top="4">
        <ArrowRightIcon />
      </Text>
    </Flex>
  )
}
