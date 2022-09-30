import { apiClient } from './apiClient'

export const getLineInfo = ({
  line,
  station,
}: {
  line: string
  station: string
}) =>
  apiClient.query({ line, sta: station }).get().json<{
    sys_time: string
    curr_time: string
    data: {
      [key: string]: {
        curr_time: string
        sys_time: string
        isPaxLoadEnabled: 'Y'
        DOWN: {
          seq: string
          dest: string
          plat: string
          time: string
          ttnt: string
          valid: 'Y' | 'N'
          source: string
          paxLoad: { availability: string; car: string }[]
        }[]
        UP: {
          seq: string
          dest: string
          plat: string
          time: string
          ttnt: string
          valid: 'Y' | 'N'
          source: string
          paxLoad: { availability: string; car: string }[]
        }[]
      }
    }
    status: number
    message: string
    isdelay: 'N' | 'Y'
  }>()
