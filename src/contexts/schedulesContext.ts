import { createContext } from 'react'

import { Schedule } from '../services/scheduleApi'

export const schedulesContext = createContext<Schedule[]>([])
