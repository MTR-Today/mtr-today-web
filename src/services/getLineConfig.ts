import { Line } from '../constants/line'
import { apiClient } from './apiClient'

export type LineConfig = {
  nameEn: string
  nameZh: string
  color: string
}

export const getLineConfig = ({ line }: { line: Line }) =>
  apiClient.url(`/lines/${line}`).get().json<LineConfig>()
