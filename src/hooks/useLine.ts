import { useColorMode } from '@chakra-ui/react'
import { LineStopConfig } from './../services/getLineStopConfig'
import constate from 'constate'
import { Line } from '../constants/line'
import { getLineConfig, LineConfig } from '../services/getLineConfig'
import { getLineStopConfig } from '../services/getLineStopConfig'
import { getLineSchedules, LineSchedule } from '../services/getLineSchedules'
import { useQuery } from '@tanstack/react-query'
import color from 'color'

export const [UseLineProvider, useLine] = constate(
  ({
    line,
    disabled = false,
  }: {
    line: Line
    disabled?: boolean
  }): Partial<LineConfig> & {
    stops: Partial<LineStopConfig>
    schedules: Partial<LineSchedule>
  } => {
    const { colorMode } = useColorMode()

    const { data: lineConfig } = useQuery(['line-config', line], () =>
      getLineConfig({ line })
    )

    const { data: lineStopConfig = {} } = useQuery(
      ['line-stop-config', line],
      () => getLineStopConfig({ line })
    )

    const { data: schedules = {} } = useQuery(
      ['line-schedules', line],
      () => getLineSchedules({ line }),
      {
        refetchInterval: 5000,
        enabled: !disabled,
      }
    )

    return {
      ...(lineConfig || {}),
      color:
        lineConfig?.color && colorMode === 'dark'
          ? color(lineConfig?.color).darken(0.3).hex()
          : lineConfig?.color,
      stops: lineStopConfig,
      schedules,
    }
  }
)
