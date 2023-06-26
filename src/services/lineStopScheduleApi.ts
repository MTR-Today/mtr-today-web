import { LineCode, StopCode } from 'mtr-kit'

import { apiClient } from './apiClient'

export type ScheduleItem = {
  plat: number
  dest: StopCode
  time: string
}

export type LineStopSchedule = {
  currTime: string
  isDelay: boolean
  schedule: { up?: ScheduleItem[]; down?: ScheduleItem[] }
  sysTime: string
}

export const get = ({ line, stop }: { line: LineCode; stop: StopCode }) =>
  apiClient
    .url(`/lines/${line}/stops/${stop}/schedules`)
    .get()
    .json<LineStopSchedule>()

export const lineStopScheduleApi = { get }
