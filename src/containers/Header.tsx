import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { useTime } from '../hooks/useTime'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header = () => {
  const now = useTime()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as="header"
      position="absolute"
      top="16px"
      left="16px"
      right="16px"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      width="calc( 100% - 32px)"
      zIndex="overlay"
      borderRadius="md"
      alignItems="center"
      borderWidth="2px"
      boxShadow="sm"
    >
      <Box w="full"></Box>
      <Clock
        flexShrink="0"
        alignItems="center"
        px="4"
        borderRightRadius="md"
        fontSize="sm"
      >
        {now.format('YYYY-MM-DD HH:mm:ss')}
      </Clock>
      <IconButton
        aria-label="color-mode"
        borderLeftRadius="0"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      ></IconButton>
    </Flex>
  )
}

const Clock = styled(Flex)`
  font-variant-numeric: tabular-nums;
`
