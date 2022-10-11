import { createContext } from 'react'
import { Stop } from '../constants/stop'

export const stopContext = createContext<{
  stop?: Stop
  hovering: boolean
  lineHovering: boolean
  setHovering: (value: boolean) => void
}>({
  hovering: false,
  lineHovering: false,
  setHovering: () => {},
})
