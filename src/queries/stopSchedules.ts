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

export type StopSchedule = { stop: { stop: StopCode; schedules: Schedule[] } }

export const GET_STOP_SCHEDULES = gql`
  query GetStopSchedules($stop: StopCode!) {
    stop(stop: $stop) {
      stop
      schedules {
        line
        stop
        currentTime
        isDelayed
        systemTime
        schedule {
          down {
            destination
            platform
            timestamp
          }
          up {
            destination
            platform
            timestamp
          }
        }
      }
    }
  }
`
