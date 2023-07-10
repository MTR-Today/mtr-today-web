import { LineCode, StopCode } from 'mtr-kit'
import { createContext } from 'react'

import { MapMode } from '../constants/mapMode'
import { Fare } from '../queries/fares'
import { Schedule } from '../queries/schedules'

export const mapContext = createContext<{
  hoveringLine?: LineCode
  setHoveringLine: (line: LineCode | undefined) => void
  mode: MapMode
  selectedStop?: StopCode
  schedules: Schedule[]
  fares: Fare[]
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHoveringLine: () => {},
  mode: MapMode.SCHEDULES,
  schedules: [],
  fares: [],
})
