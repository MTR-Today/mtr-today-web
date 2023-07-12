import { gql } from 'graphql-request'
import { LineCode, StopCode } from 'mtr-kit'

import { apiClient } from '.'

export type ScheduleItem = {
  platform: number
  destination: StopCode
  timestamp: string
}

export type Schedule = {
  line: LineCode
  stop: StopCode
  currentTime: string
  isDelayed: boolean
  schedule: { up?: ScheduleItem[]; down?: ScheduleItem[] }
  systemTime: string
}

export type Schedules = {
  schedules: Schedule[]
}

const query = gql`
  query ListSchedules {
    schedules {
      line
      stop
      currentTime
      isDelayed
      systemTime
      schedule {
        up {
          platform
          destination
          timestamp
        }
        down {
          platform
          destination
          timestamp
        }
      }
    }
  }
`

export const listSchedules = () => apiClient.request<Schedules>(query)
