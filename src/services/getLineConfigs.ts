import { Line } from '../constants/line'
import { apiClient } from './apiClient'

export type LineConfig = {
  nameEn: string
  nameZh: string
  color: string
}

export const getLineConfigs = () =>
  apiClient.url(`/lines`).get().json<{ [line in Line]: LineConfig }>()
