import { Line } from '../constants/line'
import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'

type Schedule = {
  plat: number
  dest: Stop
  time: string
}

export type StopSchedule = {
  currTime: string
  isDelay: boolean
  schedule: { up?: Schedule[]; down?: Schedule[] }
  sysTime: string
}

export const getStopSchedules = ({ line, stop }: { line: Line; stop: Stop }) =>
  apiClient
    .url(`/lines/${line}/stops/${stop}/schedules`)
    .get()
    .json<StopSchedule>()
