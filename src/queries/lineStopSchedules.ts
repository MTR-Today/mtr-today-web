import { gql } from '@apollo/client'
import { LineCode, StopCode } from 'mtr-kit'

import { Schedule } from './stopSchedules'

export type LineStopSchedule = {
  lines: {
    line: LineCode
    stops: { stop: StopCode; schedules: Schedule[] }[]
  }[]
}

export const LIST_LINE_STOP_SCHEDULES = gql`
  query ListLineStopSchedules {
    lines {
      line
      stops {
        stop
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
    }
  }
`
