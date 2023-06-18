import { useColorMode } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import color from 'color'
import constate from 'constate'
import { LineCode } from 'mtr-kit'

import { lineConfigApi } from '../services/lineConfigApi'
import { lineScheduleApi } from '../services/lineScheduleApi'

export const [UseLineProvider, useLine] = constate(
  ({ line, disabled = false }: { line: LineCode; disabled?: boolean }) => {
    const { colorMode } = useColorMode()

    const { data: lineConfig } = useQuery({
      queryKey: ['line-config', line],
      queryFn: () => lineConfigApi.get({ line }),
    })

    const { data: schedules = [] } = useQuery({
      queryKey: ['line-schedules', line],
      queryFn: () => lineScheduleApi.list({ line }),
      refetchInterval: 5000,
      enabled: !disabled,
    })

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
