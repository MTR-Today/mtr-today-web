import { StopCode } from 'mtr-kit'
import { createContext } from 'react'

export const stopContext = createContext<{
  stop?: StopCode
  hovering: boolean
  lineHovering: boolean
  setHovering: (value: boolean) => void
}>({
  hovering: false,
  lineHovering: false,
  setHovering: () => {},
})
