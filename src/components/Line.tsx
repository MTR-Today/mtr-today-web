import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { lineContext } from '../providers/lineContext'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'

export const Line = () => {
  const { color } = useContext(lineContext)

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
