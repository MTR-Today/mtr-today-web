import { LineStopConfig } from './../services/getLineStopConfig'
import { createContext } from 'react'
import { LineConfig } from '../services/getLineConfig'
import { LineSchedule } from '../services/getLineSchedules'

export const lineContext = createContext<
  Partial<LineConfig> & {
    stops: Partial<LineStopConfig>
    schedules: Partial<LineSchedule>
  }
>({ stops: {}, schedules: {} })
