import { createContext } from 'react'
import { Stop } from '../constants/stop'

export const stopContext = createContext<{ stop?: Stop }>({})
