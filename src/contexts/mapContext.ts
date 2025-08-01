import type { LineCode, StopCode } from "mtr-kit";
import { createContext } from "react";

import { MapMode } from "../constants/mapMode";
import type { Fare } from "../queries/fares";
import type { Schedule } from "../queries/schedules";

export const lineContext = createContext<{
  selectedLines: LineCode[];
}>({
  selectedLines: [],
});

export const mapContext = createContext<{
  selectedLines: LineCode[];
  mode: MapMode;
  selectedStop?: StopCode;
  schedules: Schedule[];
  fares: Fare[];
  isFaresLoading: boolean;
  isScheduleLoading: boolean;
}>({
  selectedLines: [],
  mode: MapMode.SCHEDULES,
  schedules: [],
  fares: [],
  isFaresLoading: true,
  isScheduleLoading: true,
});
