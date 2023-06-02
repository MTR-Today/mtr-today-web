import { Box, BoxProps, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { memo, useCallback, useContext, useMemo } from 'react'
import { mapContext } from '../../contexts/mapContext'
import { stopContext } from '../../contexts/stopContext'
import { useTime } from '../../hooks/useTime'
import dayjs from 'dayjs'
import { LineCode } from 'mtr-kit'

export const Schedule: React.FC<
  BoxProps & { line: LineCode; disabled?: boolean; dir: 'up' | 'down' }
> = memo(({ line, disabled = false, dir, ...props }) => {
  const now = useTime()
  const { stop, setHovering } = useContext(stopContext)
  const { hoveringLine, lineConfigs, isDragging, schedules } =
    useContext(mapContext)

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

  const config = useMemo(
    () => lineConfigs.find(item => item.code === line),
    [lineConfigs, line]
  )

  const firstItem = useMemo(() => {
    const lineSchedules = schedules.find(item => item.code === line)
    const stopSchedule = lineSchedules?.stops.find(item => item.code === stop)
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
        opacity={
          isDragging || (hoveringLine && hoveringLine !== line)
            ? '.3'
            : undefined
        }
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
          {isDragging || disabled || !firstItem
            ? '--:--'
            : getDisplayTime(firstItem.time)}
        </Clock>
      </Flex>
    </Box>
  )
})

const Clock = styled(Box)`
  font-variant-numeric: tabular-nums;
`
