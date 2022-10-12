import { Line } from '../constants/line'
import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'
import { StopSchedule } from './getSchedules'

export type LineSchedule = {
  [key in Stop]: StopSchedule
}

export const getLineSchedules = ({ line }: { line: Line }) =>
  apiClient.url(`/lines/${line}/schedules`).get().json<LineSchedule>()
