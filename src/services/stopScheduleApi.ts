import { Line } from '../constants/line'
import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'

type ScheduleItem = {
  plat: number
  dest: Stop
  time: string
}

export type StopSchedule = {
  currTime: string
  isDelay: boolean
  schedule: { up?: ScheduleItem[]; down?: ScheduleItem[] }
  sysTime: string
}

export const get = ({ line, stop }: { line: Line; stop: Stop }) =>
  apiClient
    .url(`/lines/${line}/stops/${stop}/schedules`)
    .get()
    .json<StopSchedule>()

export const stopScheduleApi = { get }
