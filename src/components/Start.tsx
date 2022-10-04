import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { lineContext } from '../providers/lineContext'

export const Start = () => {
  const { color } = useContext(lineContext)

  return (
    <Flex flexShrink="0" alignItems="center" position="relative">
      <Box h="20px" w="6px" bg={color} position="absolute" left="0"></Box>
      <Box h="6px" w="16px" bg={color}></Box>
    </Flex>
  )
}
