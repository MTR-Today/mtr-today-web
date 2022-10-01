import { Line } from '../constants/line'
import { apiClient } from './apiClient'

export const getLine = ({ line }: { line: Line }) =>
  apiClient.url(`/lines/${line}`).get().json<{}>()
