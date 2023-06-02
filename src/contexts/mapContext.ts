import { createContext } from 'react'
import { Schedule } from '../services/scheduleApi'
import { LineConfig } from '../services/lineConfigApi'
import { StopConfig } from '../services/stopConfigApi'
import { LineCode } from 'mtr-kit'

export const mapContext = createContext<{
  lineConfigs: LineConfig[]
  schedules: Schedule[]
  stopConfigs: StopConfig[]
  hoveringLine?: LineCode
  setHoveringLine: (line: LineCode | undefined) => void
  isDragging: boolean
}>({
  lineConfigs: [],
  schedules: [],
  stopConfigs: [],
  setHoveringLine: () => {},
  isDragging: false,
})
