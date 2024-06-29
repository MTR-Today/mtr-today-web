import constate from 'constate'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export const [UseTimeProvider, useTime] = constate(() => {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    const interval = global.setInterval(() => {
      setTime(dayjs())
    }, 1000)

    return () => {
      global.clearInterval(interval)
    }
  }, [])

  return time
})
