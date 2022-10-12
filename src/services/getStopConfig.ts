import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'

export type StopConfig = {
  nameEn: string
  nameZh: string
}

export type StopConfigs = { [key in Stop]: StopConfig }

export const getStopConfigs = () =>
  apiClient.url(`/stops`).get().json<StopConfigs>()
