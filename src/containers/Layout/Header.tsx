import {
  HamburgerIcon,
  InfoOutlineIcon,
  SunIcon,
  TimeIcon,
} from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Img,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Link as RouterLink } from '@tanstack/router'
import { lines } from 'mtr-kit'
import { useTranslation } from 'react-i18next'
import { MdGTranslate } from 'react-icons/md'

import logoDark from '../../assets/logoDark.svg'
import logoLight from '../../assets/logoLight.svg'
import { RadioSwitch, RadioSwitchItem } from '../../components/RadioSwitch'
import { Language } from '../../constants/language'
import { TimeDisplay } from '../../constants/timeDisplay'
import { useConfig } from '../../hooks/useConfig'
import { useTime } from '../../hooks/useTime'

export const Header: React.FC = () => {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()
  const { timeDisplay, setTimeDisplay, language, setLanguage } = useConfig()
  const now = useTime()

  return (
    <Flex
      as="header"
      pos="absolute"
      zIndex="overlay"
      top="16px"
      right="16px"
      left="16px"
      align="center"
      overflow="hidden"
      w="calc(100% - 32px)"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      borderWidth="2px"
      borderRadius="md"
      shadow="sm"
    >
      <Flex align="center" w="full" h="40px">
        <Box>
          {lines.map(({ color }) => (
            <Box
              key={color}
              pos="relative"
              top="4px"
              right="20px"
              display="inline-block"
              w="4px"
              h="64px"
              mx="0.5px"
              bg={color}
              opacity={0.7}
              transform="rotate(45deg)"
            />
          ))}
        </Box>
        <Img
          pos="absolute"
          left="3"
          w="24px"
          h="24px"
          borderRadius="md"
          src={colorMode === 'light' ? logoLight : logoDark}
        />
        <Flex align="end">
          <Text fontWeight="semibold">MTR</Text>
          <Text
            color={colorMode === 'dark' ? 'white' : 'gray.500'}
            fontSize="xs"
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
          borderRadius="0"
          aria-label="Options"
          icon={<HamburgerIcon />}
        />
        <MenuList>
          <MenuItem>
            <Box mr="3">
              <MdGTranslate />
            </Box>
            <RadioSwitch value={language} onChange={setLanguage}>
              <RadioSwitchItem value={Language['ZH-HK']}>
                {t('language.zh_hk')}
              </RadioSwitchItem>
              <RadioSwitchItem value={Language.EN}>
                {t('language.en')}
              </RadioSwitchItem>
            </RadioSwitch>
          </MenuItem>
          <MenuItem>
            <Box mr="3">
              <TimeIcon />
            </Box>
            <RadioSwitch value={timeDisplay} onChange={setTimeDisplay}>
              <RadioSwitchItem value={TimeDisplay.ABS}>
                {t('time_display.abs')}
              </RadioSwitchItem>
              <RadioSwitchItem value={TimeDisplay.REL}>
                {t('time_display.rel')}
              </RadioSwitchItem>
            </RadioSwitch>
          </MenuItem>
          <MenuItem>
            <Box mr="3">
              <SunIcon />
            </Box>
            <RadioSwitch value={colorMode} onChange={toggleColorMode}>
              <RadioSwitchItem value="light">
                {t('color_mode.light')}
              </RadioSwitchItem>
              <RadioSwitchItem value="dark">
                {t('color_mode.dark')}
              </RadioSwitchItem>
            </RadioSwitch>
          </MenuItem>
          <MenuDivider />
          <RouterLink to="/about-us">
            <MenuItem icon={<InfoOutlineIcon />}>{t('about_us')}</MenuItem>
          </RouterLink>
        </MenuList>
      </Menu>
    </Flex>
  )
}

const Clock = styled(Flex)`
  font-variant-numeric: tabular-nums;
`
