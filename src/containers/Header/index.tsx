import { HamburgerIcon, MoonIcon, SunIcon, TimeIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { lines } from 'mtr-kit'
import React from 'react'

import logoDark from '../../assets/logoDark.svg'
import logoLight from '../../assets/logoLight.svg'
import { TimeDisplay } from '../../constants/timeDisplay'
import { useConfig } from '../../hooks/useConfig'
import { Clock } from './Clock'

export const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { timeDisplay, setTimeDisplay } = useConfig()

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
          {lines.map(({ color }) => (
            <Box
              key={color}
              display="inline-block"
              bg={color}
              w="4px"
              h="64px"
              mx="0.5px"
              position="relative"
              top="4px"
              right="20px"
              transform="rotate(45deg)"
              opacity={0.7}
            />
          ))}
        </Box>
        <Img
          src={colorMode === 'light' ? logoLight : logoDark}
          w="24px"
          h="24px"
          position="absolute"
          left="3"
          borderRadius="md"
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
      <Clock />
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
