import { Line } from '../constants/line'
import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'

type Schedule = {
  plat: number
  dest: Stop
  time: string
}

export type LineSchedule = {
  [key in Stop]: {
    currTime: string
    isDelay: boolean
    schedule: { up?: Schedule[]; down?: Schedule[] }
    sysTime: string
  }
}

export const getLineSchedules = ({ line }: { line: Line }) =>
  apiClient.url(`/lines/${line}/schedules`).get().json<LineSchedule>()
