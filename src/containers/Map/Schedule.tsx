import { Box, BoxProps, Flex, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import React, { useCallback, useContext } from 'react'
import { Line } from '../../constants/line'
import { lineConfigsContext } from '../../contexts/lineConfigsContext'
import { stopContext } from '../../contexts/stopContext'
import { useTime } from '../../hooks/useTime'
import { getStopSchedules } from '../../services/getStopSchedules'
import dayjs from 'dayjs'

export const Schedule: React.FC<
  BoxProps & { line: Line; disabled?: boolean; dir: 'up' | 'down' }
> = ({ line, disabled = false, dir, ...props }) => {
  const now = useTime()
  const { stop } = useContext(stopContext)
  const configs = useContext(lineConfigsContext)

  const { data } = useQuery(
    ['stop-schedule', line, stop],
    () => (line && stop ? getStopSchedules({ line, stop }) : null),
    { enabled: !disabled }
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
      >
        <Box
          display="inline-block"
          w="4"
          h="4"
          textAlign="center"
          borderRadius="100%"
          flexShrink="0"
          color="white"
          bg={configs[line]?.color}
        >
          {disabled || !firstItem ? '-' : firstItem.plat}
        </Box>
        <Clock w="100%" textAlign="right">
          {disabled || !firstItem ? '--:--' : getDisplayTime(firstItem.time)}
        </Clock>
      </Flex>
    </Box>
  )
}

const Clock = styled(Box)`
  font-variant-numeric: tabular-nums;
`
