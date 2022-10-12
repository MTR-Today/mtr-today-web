import { createContext } from 'react'
import { Line } from '../constants/line'
import { LineConfigs } from '../services/getLineConfigs'
import { Schedule } from '../services/getSchedules'
import { StopConfigs } from '../services/getStopConfig'

export const mapContext = createContext<{
  lineConfigs: Partial<LineConfigs>
  schedules: Partial<Schedule>
  stopConfigs: Partial<StopConfigs>
  hoveringLine?: Line
  setHoveringLine: (line: Line | undefined) => void
  isDragging: boolean
}>({
  lineConfigs: {},
  schedules: {},
  stopConfigs: {},
  setHoveringLine: () => {},
  isDragging: false,
})
