import { StopCode } from 'mtr-kit'

import { apiClient } from './apiClient'

export type StopConfig = {
  code: StopCode
  nameEn: string
  nameZh: string
}

const list = () => apiClient.url('/stops').get().json<StopConfig[]>()

const get = ({ stop }: { stop: StopCode }) =>
  apiClient.url(`/stops/${stop}`).get().json<StopConfig>()

export const stopConfigApi = { list, get }
