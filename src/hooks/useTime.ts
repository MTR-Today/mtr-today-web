import constate from 'constate'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export const [UseTimeProvider, useTime] = constate(() => {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(dayjs())
    }, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return time
})
