import { LineCode } from 'mtr-kit'
import { createContext } from 'react'

import { LineConfig } from '../services/lineConfigApi'
import { Schedule } from '../services/scheduleApi'
import { StopConfig } from '../services/stopConfigApi'

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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHoveringLine: () => {},
  isDragging: false,
})
