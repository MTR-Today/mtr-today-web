import { Line } from '../constants/line'
import { apiClient } from './apiClient'

export const getLines = () => apiClient.url('/lines').get().json<Line[]>()
