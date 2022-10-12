import { Box, BoxProps, Flex, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import React, { memo, useCallback, useContext } from 'react'
import { Line } from '../../constants/line'
import { lineConfigsContext } from '../../contexts/lineConfigsContext'
import { stopContext } from '../../contexts/stopContext'
import { useTime } from '../../hooks/useTime'
import { getStopSchedules } from '../../services/getStopSchedules'
import dayjs from 'dayjs'

export const Schedule: React.FC<
  BoxProps & { line: Line; disabled?: boolean; dir: 'up' | 'down' }
> = memo(({ line, disabled = false, dir, ...props }) => {
  const now = useTime()
  const { stop, setHovering } = useContext(stopContext)
  const { hoveringLine, lineConfigs, isDragging } =
    useContext(lineConfigsContext)

  const { data } = useQuery(
    ['stop-schedule', line, stop],
    () => (line && stop ? getStopSchedules({ line, stop }) : null),
    { enabled: !disabled && !isDragging }
  )

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

  const firstItem = data?.schedule?.[dir]?.[0]

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
          bg={lineConfigs[line]?.color}
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
