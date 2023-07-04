import { Stop, StopCode } from 'mtr-kit'

import { apiClient } from './apiClient'

const get = ({ stop }: { stop: StopCode }) =>
  apiClient.url(`/stops/${stop}`).get().json<Stop>()

export const stopConfigApi = { get }
