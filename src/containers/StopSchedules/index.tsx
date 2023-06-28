import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
  const { i18n } = useTranslation()
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
      allowMultiple
      defaultIndex={range(0, stopSchedules.length + 1)}
      mb="8"
      key={stopCode}
    >
      {stopSchedules.map(schedule => {
        const line = lineMap[schedule.line]
        return (
          <AccordionItem border="0" key={schedule.line}>
            <AccordionButton bg="blackAlpha.200">
              <Heading
                as="h1"
                size="md"
                py="1"
                flex="1"
                textAlign="left"
                display="flex"
                alignItems="center"
                position="relative"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mr="2"
                >
                  <Box
                    w="18px"
                    h="18px"
                    borderWidth="3px"
                    borderColor={colorMode === 'dark' ? 'white' : 'gray.700'}
                    borderRadius="100%"
                    transition="transform .5s"
                    bg="Background"
                    position="relative"
                    zIndex="1"
                  />
                  <Box w="1" bg={line.color} h="full" position="absolute" />
                </Box>
                {i18n.language === Language['ZH-HK']
                  ? line.nameZh
                  : line.nameEn}
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p="0">
              <Flex>
                {!isEmpty(schedule.schedule.up || []) && (
                  <Box w="full">
                    <Heading as="h2" size="sm" p="4" py="3" textAlign="center">
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
                    <Heading as="h2" size="sm" p="4" textAlign="center" py="3">
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
