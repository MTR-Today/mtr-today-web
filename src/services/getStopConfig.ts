import { Line } from '../constants/line'
import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'

export type StopConfig = {
  nameEn: string
  nameZh: string
}

export const getStopConfig = ({ stop }: { stop: Stop }) =>
  apiClient.url(`/stops/${stop}`).get().json<StopConfig>()
