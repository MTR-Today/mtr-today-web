import { LineCode, StopCode } from 'mtr-kit'

import { apiClient } from './apiClient'
import { LineStopSchedule } from './lineStopScheduleApi'

export type LineSchedule = { stop: StopCode } & LineStopSchedule

const list = ({ line }: { line: LineCode }) =>
  apiClient.url(`/lines/${line}/schedules`).get().json<LineSchedule[]>()

export const lineScheduleApi = { list }
