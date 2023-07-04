import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Flex,
  Heading,
  useColorMode,
} from '@chakra-ui/react'
import { useParams } from '@tanstack/router'
import { lineMap } from 'mtr-kit'
import { isEmpty, range } from 'ramda'
import { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Language } from '../../constants/language'
import { schedulesContext } from '../../contexts/schedulesContext'
import { Empty } from './Empty'
import { ScheduleList } from './ScheduleList'

export const StopSchedules: React.FC = () => {
  const { i18n, t } = useTranslation()
  const { colorMode } = useColorMode()
  const { stop: stopCode } = useParams()
  const schedules = useContext(schedulesContext)

  const stopSchedules = useMemo(
    () => schedules.filter(schedule => schedule.stop === stopCode),
    [schedules, stopCode]
  )

  return isEmpty(stopSchedules) ? (
    <Empty />
  ) : (
    <Accordion
      key={stopCode}
      mb="8"
      allowMultiple
      defaultIndex={range(0, stopSchedules.length + 1)}
    >
      {stopSchedules.map(schedule => {
        const line = lineMap[schedule.line]

        return (
          <AccordionItem key={schedule.line} border="0">
            <AccordionButton bg="blackAlpha.200">
              <Heading
                as="h1"
                pos="relative"
                alignItems="center"
                flex="1"
                display="flex"
                py="1"
                textAlign="left"
                size="md"
              >
                <Flex align="center" justify="center" mr="2">
                  <Box
                    pos="relative"
                    zIndex="1"
                    w="18px"
                    h="18px"
                    bg="Background"
                    borderWidth="3px"
                    borderColor={colorMode === 'dark' ? 'white' : 'gray.700'}
                    borderRadius="100%"
                    transition="transform .5s"
                  />
                  <Box pos="absolute" w="1" h="full" bg={line.color} />
                </Flex>
                {i18n.language === Language['ZH-HK']
                  ? line.nameZh
                  : line.nameEn}
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p="0">
              {schedule.isDelayed && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertDescription>{t('is_delayed')}</AlertDescription>
                </Alert>
              )}
              <Flex>
                {!isEmpty(schedule.schedule.up || []) && (
                  <Box w="full">
                    <Heading as="h2" p="4" py="3" textAlign="center" size="sm">
                      上行
                    </Heading>
                    <ScheduleList
                      schedules={schedule.schedule.up || []}
                      color={line.color}
                    />
                  </Box>
                )}
                {!isEmpty(schedule.schedule.down || []) && (
                  <Box w="full">
                    <Heading as="h2" p="4" py="3" textAlign="center" size="sm">
                      下行
                    </Heading>
                    <ScheduleList
                      schedules={schedule.schedule.down || []}
                      color={line.color}
                    />
                  </Box>
                )}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
