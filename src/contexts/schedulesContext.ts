import { createContext } from 'react'

import { Schedule } from '../queries/stopSchedules'

export const schedulesContext = createContext<Schedule[]>([])
