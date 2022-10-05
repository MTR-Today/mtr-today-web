import { LineStopConfig } from './../services/getLineStopConfig'
import constate from 'constate'
import { Line } from '../constants/line'
import { getLineConfig, LineConfig } from '../services/getLineConfig'
import { getLineStopConfig } from '../services/getLineStopConfig'
import { getLineSchedules, LineSchedule } from '../services/getLineSchedules'
import { useQuery } from '@tanstack/react-query'

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
    const { data: lineConfig = {} } = useQuery(['line-config', line], () =>
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
        refetchInterval: 2000,
        enabled: !disabled,
      }
    )

    return { ...lineConfig, stops: lineStopConfig, schedules }
  }
)
