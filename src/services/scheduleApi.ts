import { LineCode } from 'mtr-kit'
import { apiClient } from './apiClient'
import { LineSchedule } from './lineScheduleApi'

export type Schedule = { code: LineCode; stops: LineSchedule[] }

export const list = () => apiClient.url(`/schedules`).get().json<Schedule[]>()

export const scheduleApi = { list }
