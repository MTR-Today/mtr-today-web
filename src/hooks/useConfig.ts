import { useLocalStorageValue } from '@react-hookz/web'
import constate from 'constate'

import { LocalStorageKey } from '../constants/localStorageKey'
import { TimeDisplay } from '../constants/timeDisplay'

export const [UseConfigProvider, useConfig] = constate(() => {
  const { value: timeDisplay, set: setTimeDisplay } = useLocalStorageValue(
    LocalStorageKey.TIME_DISPLAY,
    { defaultValue: TimeDisplay.REL }
  )

  return { timeDisplay, setTimeDisplay }
})
