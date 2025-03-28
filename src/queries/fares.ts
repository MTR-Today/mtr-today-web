import { gql } from 'graphql-request';
import type { StopCode } from 'mtr-kit';

import { apiClient } from '.';

export type Fare = {
  from?: StopCode;
  to?: StopCode;
  octopusCard: {
    child: number;
    adult: number;
    student: number;
    elderly: number;
    joyYou: number;
    pwd: number;
  };
  singleJourneyTicket: {
    child: number;
    adult: number;
    elderly: number;
  };
};

export type Fares = {
  fares: Fare[];
};

const query = gql`
  query ListFares($from: StopCode!) {
    fares(from: $from) {
      from
      to
      octopusCard {
        child
        adult
        student
        elderly
        joyYou
        pwd
      }
      singleJourneyTicket {
        child
        adult
        elderly
      }
    }
  }
`;

export const listFares = ({ stop }: { stop: StopCode }) =>
  apiClient.request<Fares>(query, { from: stop });
