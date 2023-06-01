import { Line } from '../constants/line'
import { Stop } from '../constants/stop'
import { apiClient } from './apiClient'
import { StopConfig } from './stopConfigApi'

export type LineConfig = {
  code: Line
  nameEn: string
  nameZh: string
  color: string
  stops: StopConfig[]
}

const list = () => apiClient.url(`/lines`).get().json<LineConfig[]>()

const get = ({ line }: { line: Line }) =>
  apiClient.url(`/lines/${line}`).get().json<LineConfig>()

const listStops = ({ line }: { line: Line }) =>
  apiClient.url(`/lines/${line}/stops`).get().json<StopConfig[]>()

export const lineConfigApi = { list, get, listStops }
