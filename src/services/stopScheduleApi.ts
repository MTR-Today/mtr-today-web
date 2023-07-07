import { StopCode } from 'mtr-kit'

import { apiClient } from './apiClient'
import { Schedule } from './lineStopScheduleApi'

const list = ({ stop }: { stop: StopCode }) =>
  apiClient.url(`/stops/${stop}/schedules`).get().json<Schedule[]>()

export const stopScheduleApi = { list }
