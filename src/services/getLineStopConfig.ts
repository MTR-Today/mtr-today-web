import { Line } from '../constants/line'
import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'

export type LineStopConfig = {
  [key in Stop]: {
    nameEn: string
    nameZh: string
  }
}

export const getLineStopConfig = ({ line }: { line: Line }) =>
  apiClient.url(`/lines/${line}/stops`).get().json<LineStopConfig>()
