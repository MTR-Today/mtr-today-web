import { useColorMode } from '@chakra-ui/react'
import constate from 'constate'
import { Line } from '../constants/line'

import { useQuery } from '@tanstack/react-query'
import color from 'color'
import { lineConfigApi } from '../services/lineConfigApi'
import { lineScheduleApi } from '../services/lineScheduleApi'

export const [UseLineProvider, useLine] = constate(
  ({ line, disabled = false }: { line: Line; disabled?: boolean }) => {
    const { colorMode } = useColorMode()

    const { data: lineConfig } = useQuery(['line-config', line], () =>
      lineConfigApi.get({ line })
    )

    const { data: schedules = [] } = useQuery(
      ['line-schedules', line],
      () => lineScheduleApi.list({ line }),
      {
        refetchInterval: 5000,
        enabled: !disabled,
      }
    )

    return {
      ...lineConfig,
      color:
        lineConfig?.color && colorMode === 'dark'
          ? color(lineConfig?.color).darken(0.3).hex()
          : lineConfig?.color,
      stops: lineConfig?.stops || [],
      schedules,
    }
  }
)
