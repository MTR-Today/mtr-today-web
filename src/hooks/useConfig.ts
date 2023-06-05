import constate from 'constate'
import { useState } from 'react'
import { TimeDisplay } from '../constants/timeDisplay'

export const [UseConfigProvider, useConfig] = constate(() => {
  const [timeDisplay, setTimeDisplay] = useState(TimeDisplay.REL)

  return { timeDisplay, setTimeDisplay }
})
