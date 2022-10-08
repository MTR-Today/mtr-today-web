import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../../components/LineBuilder/End'
import { LineName } from '../../components/LineName'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { Line as LineType } from '../../constants/line'
import { Stop as StopType } from '../../constants/stop'
import { Line } from '../../components/LineBuilder/Line'
import { Joint } from '../../components/LineBuilder/Joint'
import { Split } from '../../components/LineBuilder/Split'
import { UseLineProvider } from '../../hooks/useLine'

export const EAL: React.FC = () => {
  return (
    <UseLineProvider line={LineType.EAL}>
      <Flex w="full" height="250" bg="blackAlpha.100">
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
    </UseLineProvider>
  )
}
