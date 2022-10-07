import { Box, Button, Flex, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { useTime } from '../hooks/useTime'

export const Header = () => {
  const now = useTime()
  const { colorMode, toggleColorMode } = useColorMode()

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
      <Box w="full">
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Box>
      <Clock
        flexShrink="0"
        bg="blackAlpha.900"
        h="full"
        alignItems="center"
        px="4"
        color="white"
      >
        {now.format('YYYY-MM-DD HH:mm:ss')}
      </Clock>
    </Flex>
  )
}

const Clock = styled(Flex)`
  font-variant-numeric: tabular-nums;
`
