import { HamburgerIcon, SunIcon, TimeIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Img,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { lines } from 'mtr-kit'
import { useTranslation } from 'react-i18next'
import { IoLogoGithub } from 'react-icons/io'
import { MdGTranslate } from 'react-icons/md'

import logoDark from '../../assets/logoDark.svg'
import logoLight from '../../assets/logoLight.svg'
import { RadioSwitch, RadioSwitchItem } from '../../components/RadioSwitch'
import { Language } from '../../constants/language'
import { TimeDisplay } from '../../constants/timeDisplay'
import { useConfig } from '../../hooks/useConfig'
import { Clock } from './Clock'

export const Header: React.FC = () => {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()
  const { timeDisplay, setTimeDisplay, language, setLanguage } = useConfig()

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
          <Link href="https://github.com/mtr-today">
            <MenuItem icon={<IoLogoGithub />}>{t('source_code')}</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  )
}
