import { Box, BoxProps, Flex, HStack, Skeleton } from '@chakra-ui/react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { LineCode, lineMap } from 'mtr-kit'
import { memo, useCallback, useContext, useMemo } from 'react'

import { TimeDisplay } from '../../constants/timeDisplay'
import { mapContext } from '../../contexts/mapContext'
import { stopContext } from '../../contexts/stopContext'
import { useConfig } from '../../hooks/useConfig'
import { useTime } from '../../hooks/useTime'

export const Schedule: React.FC<
  BoxProps & { line: LineCode; disabled?: boolean; dir: 'up' | 'down' }
> = memo(({ line, disabled = false, dir, ...props }) => {
  const now = useTime()
  const { timeDisplay } = useConfig()
  const { stop } = useContext(stopContext)
  const { schedules, isScheduleLoading } = useContext(mapContext)
  const config = lineMap[line]

  const schedule = useMemo(
    () =>
      schedules.find(item => item.line === line && item.stop === stop)
        ?.schedule?.[dir]?.[0],
    [dir, line, schedules, stop]
  )

  const getDisplayTime = useCallback(
    (time: string) => {
      const timeDayJs = dayjs(time)

      if (timeDisplay === TimeDisplay.ABS) return timeDayJs.format('H[:]mm')

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
    [now, timeDisplay]
  )

  return (
    <Box pos="absolute" {...props}>
      <Flex
        pos="absolute"
        w="56px"
        fontSize="xs"
        textAlign="center"
        transform="translateY(-50%) translateX(-50%)"
        userSelect="none"
        style={{ transition: 'opacity .3s' }}
      >
        <Skeleton
          height="16px"
          w="84px"
          as={HStack}
          gap="0"
          isLoaded={!isScheduleLoading}
          verticalAlign="center"
        >
          <Box
            flexShrink="0"
            display="inline-block"
            color="white"
            bg={config.color}
            borderRadius="100%"
            opacity={schedule ? 1 : 0.3}
            w="4"
            h="4"
            lineHeight="4"
            textAlign="center"
          >
            {disabled || !schedule ? '-' : schedule.platform}
          </Box>
          <Clock w="100%" textAlign="right" opacity={schedule ? 1 : 0.3}>
            {disabled || !schedule
              ? '--:--'
              : getDisplayTime(schedule.timestamp)}
          </Clock>
        </Skeleton>
      </Flex>
    </Box>
  )
})

const Clock = styled(Box)`
  font-variant-numeric: tabular-nums;
`
