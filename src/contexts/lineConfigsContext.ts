import { createContext } from 'react'
import { Line } from '../constants/line'
import { LineConfig } from '../services/getLineConfig'

export const lineConfigsContext = createContext<{
  lineConfigs: {
    [line in Line]?: LineConfig
  }
  hoveringLine?: Line
  setHoveringLine: (line: Line | undefined) => void
}>({
  lineConfigs: {},
  setHoveringLine: () => {},
})
