import { Line } from '../constants/line'
import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'
import { StopSchedule } from './stopScheduleApi'

export type LineSchedule = { code: Stop } & StopSchedule

const list = ({ line }: { line: Line }) =>
  apiClient.url(`/lines/${line}/schedules`).get().json<LineSchedule[]>()

export const lineScheduleApi = { list }
