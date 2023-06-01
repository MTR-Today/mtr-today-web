import { Line } from '../constants/line'
import { apiClient } from './apiClient'
import { LineSchedule } from './lineScheduleApi'

export type Schedule = { code: Line; stops: LineSchedule[] }

export const list = () => apiClient.url(`/schedules`).get().json<Schedule[]>()

export const scheduleApi = { list }
