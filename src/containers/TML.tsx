import { Flex } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { End } from '../components/End'
import { Line } from '../components/Line'
import { LineName } from '../components/LineName'
import { Start } from '../components/Start'
import { Stop } from '../components/Stop'
import { lineContext } from '../providers/lineContext'
import { getLineSchedules } from '../services/getLineSchedules'
import { Line as LineType } from '../constants/line'
import { getLineConfig } from '../services/getLineConfig'
import { getLineStopConfig } from '../services/getLineStopConfig'
import { Stop as StopType } from '../constants/stop'

const line = LineType.TML

export const TML: React.FC = () => {
  const { data: lineConfig = {} } = useQuery(['line-config', line], () =>
    getLineConfig({ line })
  )

  const { data: lineStopConfig = {} } = useQuery(
    ['line-stop-config', line],
    () => getLineStopConfig({ line })
  )

  const { data: schedules = {} } = useQuery(
    ['line-schedules', line],
    () => getLineSchedules({ line }),
    {
      refetchInterval: 2000,
    }
  )

  return (
    <lineContext.Provider
      value={{ ...lineConfig, stops: lineStopConfig, schedules }}
    >
      <Flex w="full" height="250" bg="blackAlpha.500">
        <LineName />
        <Flex
          w="full"
          verticalAlign="center"
          alignItems="center"
          px="20"
          overflow="auto"
          paddingBottom="8"
        >
          <Start />
          <Stop stop={StopType.TUM} />
          <Line />
          <Stop stop={StopType.SIH} />
          <Line />
          <Stop stop={StopType.TIS} />
          <Line />
          <Stop stop={StopType.LOP} />
          <Line />
          <Stop stop={StopType.YUL} />
          <Line />
          <Stop stop={StopType.KSR} />
          <Line />
          <Stop stop={StopType.TWW} />
          <Line />
          <Stop stop={StopType.MEF} />
          <Line />
          <Stop stop={StopType.NAC} />
          <Line />
          <Stop stop={StopType.AUS} />
          <Line />
          <Stop stop={StopType.ETS} />
          <Line />
          <Stop stop={StopType.HUH} />
          <Line />
          <Stop stop={StopType.HOM} />
          <Line />
          <Stop stop={StopType.TKW} />
          <Line />
          <Stop stop={StopType.SUW} />
          <Line />
          <Stop stop={StopType.KAT} />
          <Line />
          <Stop stop={StopType.DIH} />
          <Line />
          <Stop stop={StopType.HIK} />
          <Line />
          <Stop stop={StopType.TAW} />
          <Line />
          <Stop stop={StopType.CKT} />
          <Line />
          <Stop stop={StopType.STW} />
          <Line />
          <Stop stop={StopType.CIO} />
          <Line />
          <Stop stop={StopType.SHM} />
          <Line />
          <Stop stop={StopType.TSH} />
          <Line />
          <Stop stop={StopType.HEO} />
          <Line />
          <Stop stop={StopType.MOS} />
          <Line />
          <Stop stop={StopType.WKS} />
          <End />
        </Flex>
      </Flex>
    </lineContext.Provider>
  )
}
