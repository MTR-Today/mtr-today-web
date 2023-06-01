import { createContext } from 'react'
import { Line } from '../constants/line'
import { Schedule } from '../services/scheduleApi'
import { LineConfig } from '../services/lineConfigApi'
import { StopConfig } from '../services/stopConfigApi'

export const mapContext = createContext<{
  lineConfigs: LineConfig[]
  schedules: Schedule[]
  stopConfigs: StopConfig[]
  hoveringLine?: Line
  setHoveringLine: (line: Line | undefined) => void
  isDragging: boolean
}>({
  lineConfigs: [],
  schedules: [],
  stopConfigs: [],
  setHoveringLine: () => {},
  isDragging: false,
})
