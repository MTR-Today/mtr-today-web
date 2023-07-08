import { gql } from '@apollo/client'
import { LineCode, StopCode } from 'mtr-kit'

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

export const LIST_SCHEDULES = gql`
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
