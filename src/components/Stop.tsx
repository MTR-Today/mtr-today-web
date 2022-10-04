import { Box, color, Flex, Text } from '@chakra-ui/react'
import React, { useCallback, useContext } from 'react'
import { Stop as StopType } from '../constants/stop'
import { useTime } from '../hooks/useTime'
import { lineContext } from '../providers/lineContext'
import dayjs from 'dayjs'
import styled from '@emotion/styled'

type Props = {
  stop: StopType
  namePosition?: 'top' | 'bottom'
}

export const Stop: React.FC<Props> = ({ stop, namePosition = 'bottom' }) => {
  const now = useTime()
  const { stops, schedules, color } = useContext(lineContext)

  const { schedule } = schedules[stop] || {}

  const getDisplayTime = useCallback(
    (time: string) => {
      const timeDayJs = dayjs(time)

      return timeDayJs.isAfter(now)
        ? dayjs.duration(dayjs(timeDayJs).diff(now)).format('H[:]mm:ss')
        : dayjs.duration(dayjs(now).diff(timeDayJs)).format('-H[:]mm:ss')
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
      <Box position="absolute" bottom="6" w="56px" textAlign="center">
        {schedule?.up?.[0] ? (
          <Flex fontSize="xs">
            <Box
              fontSize="xs"
              bg={color}
              display="inline-block"
              w="4"
              h="4"
              textAlign="center"
              borderRadius="100%"
              flexShrink="0"
            >
              {schedule.up[0].plat}
            </Box>
            <Clock w="100%" textAlign="right">
              {getDisplayTime(schedule.up[0].time)}
            </Clock>
          </Flex>
        ) : (
          <Text fontSize="xs">-</Text>
        )}
      </Box>
      <Box
        w="18px"
        h="18px"
        bg="blackAlpha.500"
        borderWidth="3px"
        borderColor="white"
        borderRadius="100%"
      ></Box>
      <Box position="absolute" top="6" w="56px" textAlign="center">
        {schedule?.down?.[0] ? (
          <Flex fontSize="xs">
            <Box
              fontSize="xs"
              bg={color}
              display="inline-block"
              w="4"
              h="4"
              textAlign="center"
              borderRadius="100%"
              flexShrink="0"
            >
              {schedule.down[0].plat}
            </Box>
            <Clock w="100%" textAlign="right">
              {getDisplayTime(schedule.down[0].time)}
            </Clock>
          </Flex>
        ) : (
          <Text fontSize="xs">-</Text>
        )}
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

const Clock = styled(Box)`
  font-variant-numeric: tabular-nums;
`
