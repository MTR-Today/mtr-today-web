import { LineCode, StopCode } from 'mtr-kit'
import { createContext } from 'react'

import { MapMode } from '../constants/mapMode'
import { Fare } from '../queries/fares'
import { Schedule } from '../queries/schedules'

export const lineContext = createContext<{
  hoveringLine?: LineCode
  setHoveringLine: (line: LineCode | undefined) => void
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHoveringLine: () => {},
})

export const mapContext = createContext<{
  hoveringLine?: LineCode
  mode: MapMode
  selectedStop?: StopCode
  schedules: Schedule[]
  fares: Fare[]
  isFaresLoading: boolean
  isScheduleLoading: boolean
}>({
  mode: MapMode.SCHEDULES,
  schedules: [],
  fares: [],
  isFaresLoading: true,
  isScheduleLoading: true,
})
