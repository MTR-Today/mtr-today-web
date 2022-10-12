import { Line } from '../constants/line'
import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'

export type Schedule = {
  [key in Line]: {
    [key in Stop]: StopSchedule
  }
}

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

export const getSchedules = () =>
  apiClient.url(`/schedules`).get().json<Schedule>()
