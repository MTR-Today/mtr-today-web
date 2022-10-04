import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../components/End'
import { LineName } from '../components/LineName'
import { Start } from '../components/Start'
import { Stop } from '../components/Stop'
import { lineContext } from '../providers/lineContext'
import { Line as LineType } from '../constants/line'
import { getLineConfig } from '../services/getLineConfig'
import { getLineStopConfig } from '../services/getLineStopConfig'
import { getLineSchedules } from '../services/getLineSchedules'
import { useQuery } from '@tanstack/react-query'
import { Stop as StopType } from '../constants/stop'
import { Line } from '../components/Line'
import { Joint } from '../components/Joint'
import { Split } from '../components/Split'

const line = LineType.EAL

export const EAL: React.FC = () => {
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
        >
          <Box>
            <Flex verticalAlign="center" alignItems="center" pb="56px">
              <Start />
              <Stop stop={StopType.LMC} namePosition="top" />
              <Line />
            </Flex>
            <Flex verticalAlign="center" alignItems="center">
              <Start />
              <Stop stop={StopType.LOW} />
              <Line />
            </Flex>
          </Box>
          <Joint />
          <Stop stop={StopType.SHS} />
          <Line />
          <Stop stop={StopType.FAN} />
          <Line />
          <Stop stop={StopType.TAW} />
          <Line />
          <Stop stop={StopType.TAP} />
          <Line />
          <Stop stop={StopType.UNI} />
          <Split />
          <Box>
            <Flex verticalAlign="center" alignItems="center" pb="56px">
              <Line />
              <Stop stop={StopType.RAC} namePosition="top" />
              <Line />
            </Flex>
            <Flex verticalAlign="center" alignItems="center">
              <Line />
              <Stop stop={StopType.FOT} />
              <Line />
            </Flex>
          </Box>
          <Joint />
          <Stop stop={StopType.SHT} />
          <Line />
          <Stop stop={StopType.TAW} />
          <Line />
          <Stop stop={StopType.KOT} />
          <Line />
          <Stop stop={StopType.MKK} />
          <Line />
          <Stop stop={StopType.HUH} />
          <Line />
          <Stop stop={StopType.EXC} />
          <Line />
          <Stop stop={StopType.ADM} />
          <End />
        </Flex>
      </Flex>
    </lineContext.Provider>
  )
}
