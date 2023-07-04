import { LineCode, StopCode } from 'mtr-kit'

import { apiClient } from './apiClient'

export type ScheduleItem = {
  platform: number
  destination: StopCode
  timestamp: string
}

export type LineStopSchedule = {
  currentTime: string
  isDelayed: boolean
  schedule: { up?: ScheduleItem[]; down?: ScheduleItem[] }
  systemTime: string
}

export const get = ({ line, stop }: { line: LineCode; stop: StopCode }) =>
  apiClient
    .url(`/lines/${line}/stops/${stop}/schedules`)
    .get()
    .json<LineStopSchedule>()

export const lineStopScheduleApi = { get }
