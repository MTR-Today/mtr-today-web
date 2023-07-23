import { StopCode } from 'mtr-kit'
import { createContext } from 'react'

export const stopContext = createContext<{
  stop: StopCode
  isSelected: boolean
  setHovering: (value: boolean) => void
}>({
  stop: '' as StopCode,
  isSelected: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHovering: () => {},
})
