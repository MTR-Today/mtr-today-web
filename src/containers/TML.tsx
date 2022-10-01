import { Box, Flex, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { LineName } from '../components/LineName'

export const TML: React.FC = () => {
  return (
    <Flex w="full" height="200" bg="blackAlpha.500">
      <LineName nameEn="Tuen Ma Line" nameZh="屯碼線" color="red.700" />
      <Box w="full"></Box>
    </Flex>
  )
}
