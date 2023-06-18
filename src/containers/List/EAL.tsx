import { Box, Flex } from '@chakra-ui/react'
import { LineCode, StopCode } from 'mtr-kit'
import React from 'react'

import { End } from '../../components/LineBuilder/End'
import { Joint } from '../../components/LineBuilder/Joint'
import { Line } from '../../components/LineBuilder/Line'
import { Split } from '../../components/LineBuilder/Split'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { LineName } from '../../components/LineName'
import { UseLineProvider } from '../../hooks/useLine'

export const EAL: React.FC = () => (
  <UseLineProvider line={LineCode.EAL}>
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
            <Stop stop={StopCode.LMC} namePosition="top" />
            <Line />
          </Flex>
          <Flex verticalAlign="center" alignItems="center">
            <Start />
            <Stop stop={StopCode.LOW} />
            <Line />
          </Flex>
        </Box>
        <Joint />
        <Stop stop={StopCode.SHS} />
        <Line />
        <Stop stop={StopCode.FAN} />
        <Line />
        <Stop stop={StopCode.TAW} />
        <Line />
        <Stop stop={StopCode.TAP} />
        <Line />
        <Stop stop={StopCode.UNI} />
        <Split />
        <Box>
          <Flex verticalAlign="center" alignItems="center" pb="56px">
            <Line />
            <Stop stop={StopCode.RAC} namePosition="top" />
            <Line />
          </Flex>
          <Flex verticalAlign="center" alignItems="center">
            <Line />
            <Stop stop={StopCode.FOT} />
            <Line />
          </Flex>
        </Box>
        <Joint />
        <Stop stop={StopCode.SHT} />
        <Line />
        <Stop stop={StopCode.TAW} />
        <Line />
        <Stop stop={StopCode.KOT} />
        <Line />
        <Stop stop={StopCode.MKK} />
        <Line />
        <Stop stop={StopCode.HUH} />
        <Line />
        <Stop stop={StopCode.EXC} />
        <Line />
        <Stop stop={StopCode.ADM} />
        <End />
      </Flex>
    </Flex>
  </UseLineProvider>
)
