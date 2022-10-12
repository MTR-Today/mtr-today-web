import { Line } from '../constants/line'
import { apiClient } from './apiClient'
import { LineConfig } from './getLineConfig'

export type LineConfigs = { [line in Line]: LineConfig }

export const getLineConfigs = () => apiClient.url(`/lines`).get().json<LineConfigs>()
