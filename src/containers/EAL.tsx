import { Box, Flex, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { LineName } from '../components/LineName'

export const EAL: React.FC = () => {
  return (
    <Flex w="full" height="200" bg="blackAlpha.500">
      <LineName nameEn="East Rail Line" nameZh="東鐵線" color="blue.700" />
      <Box w="full"></Box>
    </Flex>
  )
}
