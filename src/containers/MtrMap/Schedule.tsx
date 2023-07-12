import { Box, BoxProps, Flex, Skeleton } from '@chakra-ui/react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { LineCode, lineMap } from 'mtr-kit'
import { memo, useCallback, useContext } from 'react'

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
  const { hoveringLine, schedules, isScheduleLoading } = useContext(mapContext)
  const config = lineMap[line]

  const schedule = schedules.find(
    item => item.line === line && item.stop === stop
  )?.schedule?.[dir]?.[0]

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
        opacity={hoveringLine && hoveringLine !== line ? '.3' : undefined}
        transform="translateY(-50%) translateX(-50%)"
        userSelect="none"
        style={{ transition: 'opacity .3s' }}
      >
        {isScheduleLoading ? (
          <Skeleton height="16px" w="84px" />
        ) : (
          <>
            <Box
              flexShrink="0"
              display="inline-block"
              w="4"
              h="4"
              color="white"
              textAlign="center"
              bg={config.color}
              borderRadius="100%"
            >
              {disabled || !schedule ? '-' : schedule.platform}
            </Box>
            <Clock w="100%" textAlign="right">
              {disabled || !schedule
                ? '--:--'
                : getDisplayTime(schedule.timestamp)}
            </Clock>
          </>
        )}
      </Flex>
    </Box>
  )
})

const Clock = styled(Box)`
  font-variant-numeric: tabular-nums;
`
