import { gql } from '@apollo/client'
import { StopCode } from 'mtr-kit'

import { Schedule } from './schedules'

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
