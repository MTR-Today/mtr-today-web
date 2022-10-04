import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useCallback, useContext } from 'react'
import { Stop as StopType } from '../constants/stop'
import { useTime } from '../hooks/useTime'
import { lineContext } from '../providers/lineContext'
import dayjs from 'dayjs'

type Props = {
  stop: StopType
  namePosition?: 'top' | 'bottom'
}

export const Stop: React.FC<Props> = ({ stop, namePosition = 'bottom' }) => {
  const now = useTime()
  const { stops, schedules } = useContext(lineContext)

  const { schedule } = schedules[stop] || {}

  const getDisplayTime = useCallback(
    (time: string) => {
      const timeDayJs = dayjs(time)

      return timeDayJs.isAfter(now)
        ? dayjs.duration(dayjs(timeDayJs).diff(now)).format('mm:ss')
        : dayjs.duration(dayjs(now).diff(timeDayJs)).format('-mm:ss')
    },
    [now]
  )

  return (
    <Flex
      flexShrink="0"
      alignItems="center"
      flexDirection="column"
      position="relative"
    >
      {namePosition === 'top' && (
        <Box position="absolute" bottom="12" w="20" textAlign="center">
          <Text fontSize="xs">{stops[stop]?.nameZh}</Text>
          <Text fontSize="xs">{stops[stop]?.nameEn}</Text>
        </Box>
      )}
      <Box position="absolute" bottom="6">
        <Text fontSize="xs">
          {schedule?.up?.[0] ? getDisplayTime(schedule.up[0]?.time) : '-'}
        </Text>
      </Box>
      <Box
        w="18px"
        h="18px"
        bg="blackAlpha.500"
        borderWidth="3px"
        borderColor="white"
        borderRadius="100%"
      ></Box>
      <Box position="absolute" top="6">
        <Text fontSize="xs">
          {schedule?.down?.[0] ? getDisplayTime(schedule.down[0]?.time) : '-'}
        </Text>
      </Box>
      {namePosition === 'bottom' && (
        <Box position="absolute" top="12" w="20" textAlign="center">
          <Text fontSize="xs">{stops[stop]?.nameZh}</Text>
          <Text fontSize="xs">{stops[stop]?.nameEn}</Text>
        </Box>
      )}
    </Flex>
  )
}
