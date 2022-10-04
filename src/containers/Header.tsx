import { Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { useTime } from '../hooks/useTime'

export const Header = () => {
  const now = useTime()
  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      bg="blackAlpha.700"
      zIndex="overlay"
      h="12"
      alignItems="center"
    >
      <Box w="full"></Box>
      <Clock
        flexShrink="0"
        bg="blackAlpha.900"
        h="full"
        alignItems="center"
        px="4"
      >
        {now.format('YYYY-MM-DD HH:mm:ss')}
      </Clock>
    </Flex>
  )
}

const Clock = styled(Flex)`
  font-variant-numeric: tabular-nums;
`
