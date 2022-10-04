import constate from 'constate'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export const [UseTimeProvider, useTime] = constate(() => {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return time
})
