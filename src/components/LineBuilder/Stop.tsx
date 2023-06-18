import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { StopCode } from 'mtr-kit'
import React, { useCallback } from 'react'

import { useLine } from '../../hooks/useLine'
import { useTime } from '../../hooks/useTime'

type Props = {
  stop: StopCode
  namePosition?: 'top' | 'bottom'
}

export const Stop: React.FC<Props> = ({ stop, namePosition = 'bottom' }) => {
  const now = useTime()
  const { colorMode } = useColorMode()
  const { stops, schedules, color } = useLine()

  const { schedule } = schedules.find(item => item.code === stop) || {}
  const config = stops.find(item => item.code === stop)

  const getDisplayTime = useCallback(
    (time: string) => {
      const timeDayJs = dayjs(time)

      return timeDayJs.isAfter(now)
        ? dayjs
            .duration(dayjs(timeDayJs).diff(now))
            .format('H[:]mm:ss')
            .replace(/^0:/, '')
        : dayjs
            .duration(dayjs(now).diff(timeDayJs))
            .format('-H[:]mm:ss')
            .replace(/^-0:/, '-')
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
          <Text fontSize="xs">{config?.nameZh}</Text>
          <Text fontSize="xs">{config?.nameEn}</Text>
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
              color="white"
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
        bg="blackAlpha.100"
        borderWidth="3px"
        borderColor={colorMode === 'dark' ? 'white' : 'gray.700'}
        borderRadius="100%"
      />
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
              color="white"
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
          <Text fontSize="xs">{config?.nameZh}</Text>
          <Text fontSize="xs">{config?.nameEn}</Text>
        </Box>
      )}
    </Flex>
  )
}

const Clock = styled(Box)`
  font-variant-numeric: tabular-nums;
`
