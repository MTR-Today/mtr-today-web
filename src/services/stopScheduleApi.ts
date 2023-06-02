import { LineCode, StopCode } from 'mtr-kit'
import { apiClient } from './apiClient'

type ScheduleItem = {
  plat: number
  dest: StopCode
  time: string
}

export type StopSchedule = {
  currTime: string
  isDelay: boolean
  schedule: { up?: ScheduleItem[]; down?: ScheduleItem[] }
  sysTime: string
}

export const get = ({ line, stop }: { line: LineCode; stop: StopCode }) =>
  apiClient
    .url(`/lines/${line}/stops/${stop}/schedules`)
    .get()
    .json<StopSchedule>()

export const stopScheduleApi = { get }
