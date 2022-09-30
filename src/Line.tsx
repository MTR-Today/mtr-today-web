import { useQueries } from '@tanstack/react-query'
import React from 'react'
import { getLineInfo } from './services/getLineInfo'
import { LineConfig } from './types/lineConfig'

type Props = {
  config: LineConfig
}

export const Line: React.FC<Props> = ({ config }) => {
  const results = useQueries({
    queries: config.stations.map(stop => ({
      queryKey: ['line', config.line, stop],
      queryFn: () => getLineInfo({ line: config.line, station: stop }),
      refetchInterval: 5000,
    })),
  })

  const mappedResult = results
    .map(({ data }) => data?.data)
    .map(item => {
      if (!item) return item
      const [[key, info]] = Object.entries(item)
      const [line, station] = key.split('-')
      return {
        line,
        station,
        info,
      }
    })

  return (
    <div>
      {mappedResult.map((item, i) => (
        <div key={i}>
          {item ? (
            <div>
              <div>{item.station}</div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '40px' }}>
                  {(item.info.DOWN || [])
                    .sort((a, b) => a.seq - b.seq)
                    .map(({ ttnt, time }, i) => (
                      <div>
                        {ttnt} {time}
                      </div>
                    ))}
                </div>
                <div>
                  {(item.info.UP || [])
                    .sort((a, b) => a.seq - b.seq)
                    .map(({ ttnt, time }, i) => (
                      <div>
                        {ttnt} {time}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  )
}
