import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { lineContext } from '../providers/lineContext'

export const Joint = () => {
  const { color } = useContext(lineContext)

  return (
    <Flex flexShrink="0" alignItems="center">
      <Box h="80px" w="6px" bg={color}></Box>
      <Box h="6px" w="32px" bg={color}></Box>
    </Flex>
  )
}
