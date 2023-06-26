import { Box, BoxProps, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { LineCode, lines } from 'mtr-kit'
import { memo, useCallback, useContext, useMemo } from 'react'

import { TimeDisplay } from '../../constants/timeDisplay'
import { mapContext } from '../../contexts/mapContext'
import { schedulesContext } from '../../contexts/schedulesContext'
import { stopContext } from '../../contexts/stopContext'
import { useConfig } from '../../hooks/useConfig'
import { useTime } from '../../hooks/useTime'

export const Schedule: React.FC<
  BoxProps & { line: LineCode; disabled?: boolean; dir: 'up' | 'down' }
> = memo(({ line, disabled = false, dir, ...props }) => {
  const now = useTime()
  const { timeDisplay } = useConfig()
  const { stop, setHovering } = useContext(stopContext)
  const { hoveringLine } = useContext(mapContext)
  const schedules = useContext(schedulesContext)

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

  const config = useMemo(() => lines.find(item => item.code === line), [line])

  const firstItem = useMemo(() => {
    const stopSchedule = schedules.find(
      item => item.line === line && item.stop === stop
    )

    return stopSchedule?.schedule?.[dir]?.[0]
  }, [schedules, line, stop, dir])

  return (
    <Box position="absolute" {...props}>
      <Flex
        position="absolute"
        transform="translateY(-50%) translateX(-50%)"
        w="56px"
        textAlign="center"
        fontSize="xs"
        onMouseEnter={() => {
          setHovering(true)
        }}
        onMouseLeave={() => {
          setHovering(false)
        }}
        opacity={hoveringLine && hoveringLine !== line ? '.3' : undefined}
        style={{ transition: 'opacity .3s' }}
        userSelect="none"
      >
        <Box
          display="inline-block"
          w="4"
          h="4"
          textAlign="center"
          borderRadius="100%"
          flexShrink="0"
          color="white"
          bg={config?.color}
        >
          {disabled || !firstItem ? '-' : firstItem.plat}
        </Box>
        <Clock w="100%" textAlign="right">
          {disabled || !firstItem ? '--:--' : getDisplayTime(firstItem.time)}
        </Clock>
      </Flex>
    </Box>
  )
})

const Clock = styled(Box)`
  font-variant-numeric: tabular-nums;
`
