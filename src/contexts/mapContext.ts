import { LineCode } from 'mtr-kit'
import { createContext } from 'react'

import { Schedule } from '../services/scheduleApi'

export const mapContext = createContext<{
  schedules: Schedule[]
  hoveringLine?: LineCode
  setHoveringLine: (line: LineCode | undefined) => void
  isDragging: boolean
}>({
  schedules: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHoveringLine: () => {},
  isDragging: false,
})
