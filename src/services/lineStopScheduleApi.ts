import { LineCode, StopCode } from 'mtr-kit'

import { apiClient } from './apiClient'

export type ScheduleItem = {
  platform: number
  destination: StopCode
  timestamp: string
}

export type Schedule = {
  line: LineCode
  stop: StopCode
  currentTime: string
  isDelayed: boolean
  schedule: { up?: ScheduleItem[]; down?: ScheduleItem[] }
  systemTime: string
}

export const list = ({ line, stop }: { line: LineCode; stop: StopCode }) =>
  apiClient
    .url(`/lines/${line}/stops/${stop}/schedules`)
    .get()
    .json<Schedule[]>()

export const lineStopScheduleApi = { list }
