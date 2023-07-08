import { createContext } from 'react'

import { Schedule } from '../queries/schedules'

export const schedulesContext = createContext<Schedule[]>([])
