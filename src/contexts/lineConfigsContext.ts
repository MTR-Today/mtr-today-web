import { createContext } from 'react'
import { Line } from '../constants/line'
import { LineConfig } from '../services/getLineConfig'

export const lineConfigsContext = createContext<
  {
    [line in Line]?: LineConfig
  } & { hoveringLine?: Line }
>({})
