import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'

export type StopConfig = {
  code: Stop
  nameEn: string
  nameZh: string
}

const list = () => apiClient.url(`/stops`).get().json<StopConfig[]>()

const get = ({ stop }: { stop: Stop }) =>
  apiClient.url(`/stops/${stop}`).get().json<StopConfig>()

export const stopConfigApi = { list, get }
