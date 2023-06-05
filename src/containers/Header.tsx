import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useMemo } from 'react'
import { useTime } from '../hooks/useTime'
import { HamburgerIcon, MoonIcon, SunIcon, TimeIcon } from '@chakra-ui/icons'
import { LineConfig } from '../services/lineConfigApi'
import { useConfig } from '../hooks/useConfig'
import { TimeDisplay } from '../constants/timeDisplay'

export const Header: React.FC<{ lineConfigs: LineConfig[] }> = ({
  lineConfigs,
}) => {
  const now = useTime()
  const { colorMode, toggleColorMode } = useColorMode()
  const { timeDisplay, setTimeDisplay } = useConfig()

  const colors = useMemo(
    () => lineConfigs.map(({ color }) => color),
    [lineConfigs]
  )

  return (
    <Flex
      as="header"
      position="absolute"
      top="16px"
      left="16px"
      right="16px"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      width="calc(100% - 32px)"
      zIndex="overlay"
      borderRadius="md"
      alignItems="center"
      borderWidth="2px"
      boxShadow="sm"
      overflow="hidden"
    >
      <Flex w="full" h="40px" alignItems="center">
        <Box>
          {colors.map(color => (
            <Box
              display="inline-block"
              bg={color}
              w="4px"
              h="64px"
              mx="0.5px"
              position="relative"
              top="4px"
              right="20px"
              transform="rotate(45deg)"
            />
          ))}
        </Box>
        <Box
          w="24px"
          h="24px"
          borderWidth="3px"
          borderColor={colorMode === 'dark' ? 'white' : 'gray.700'}
          borderRadius="100%"
          position="absolute"
          left="3"
          bg={colorMode === 'dark' ? 'gray.700' : 'white'}
        />
        <Flex alignItems="end">
          <Text fontWeight="semibold">MTR</Text>
          <Text
            fontSize="xs"
            color={colorMode === 'dark' ? 'white' : 'gray.500'}
          >
            .today
          </Text>
        </Flex>
      </Flex>
      <Clock
        flexShrink="0"
        alignItems="center"
        px="4"
        borderRightRadius="md"
        fontSize="sm"
      >
        {now.format('YYYY-MM-DD HH:mm:ss')}
      </Clock>
      <Menu strategy="fixed">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          borderLeftRadius="0"
        >
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          >
            Color Mode
          </MenuItem>
          <MenuItem
            icon={<TimeIcon />}
            onClick={() => {
              setTimeDisplay(prev =>
                prev === TimeDisplay.ABS ? TimeDisplay.REL : TimeDisplay.ABS
              )
            }}
          >
            {timeDisplay === TimeDisplay.ABS
              ? 'Show Relative Time'
              : 'Show Absolute Time'}
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

const Clock = styled(Flex)`
  font-variant-numeric: tabular-nums;
`
