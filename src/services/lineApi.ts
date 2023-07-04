import { Line, LineCode } from 'mtr-kit'

import { apiClient } from './apiClient'

const get = ({ line }: { line: LineCode }) =>
  apiClient.url(`/lines/${line}`).get().json<Line>()

export const lineApi = { get }
