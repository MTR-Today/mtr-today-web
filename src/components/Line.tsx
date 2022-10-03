import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { lineContext } from '../providers/lineContext'

export const Line = () => {
  const { color } = useContext(lineContext)

  return <Box h="6px" w="60px" flexShrink="0" bg={color}></Box>
}
