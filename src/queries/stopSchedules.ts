import { gql } from 'graphql-request';
import type { StopCode } from 'mtr-kit';

import { apiClient } from '.';
import type { Schedule } from './schedules';

export type StopSchedule = { stop: { stop: StopCode; schedules: Schedule[] } };

const query = gql`
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
`;

export const listStopSchedules = ({ stop }: { stop: StopCode }) =>
  apiClient.request<StopSchedule>(query, { stop });
