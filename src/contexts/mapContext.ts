import { LineCode } from 'mtr-kit'
import { createContext } from 'react'

export const mapContext = createContext<{
  hoveringLine?: LineCode
  setHoveringLine: (line: LineCode | undefined) => void
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHoveringLine: () => {},
})
