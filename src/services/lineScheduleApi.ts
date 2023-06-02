import { LineCode, StopCode } from 'mtr-kit'
import { apiClient } from './apiClient'
import { StopSchedule } from './stopScheduleApi'

export type LineSchedule = { code: StopCode } & StopSchedule

const list = ({ line }: { line: LineCode }) =>
  apiClient.url(`/lines/${line}/schedules`).get().json<LineSchedule[]>()

export const lineScheduleApi = { list }
