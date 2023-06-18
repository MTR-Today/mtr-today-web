import { Flex } from '@chakra-ui/react'
import { LineCode, StopCode } from 'mtr-kit'
import React from 'react'

import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { LineName } from '../../components/LineName'
import { UseLineProvider } from '../../hooks/useLine'

export const AEL: React.FC = () => (
  <UseLineProvider line={LineCode.AEL}>
    <Flex w="full" height="250" bg="blackAlpha.100">
      <LineName />
      <Flex
        w="full"
        verticalAlign="center"
        alignItems="center"
        px="20"
        overflow="auto"
      >
        <Start />
        <Stop stop={StopCode.AWE} />
        <Line />
        <Stop stop={StopCode.AIR} />
        <Line />
        <Stop stop={StopCode.TSY} />
        <Line />
        <Stop stop={StopCode.KOW} />
        <Line />
        <Stop stop={StopCode.HOK} />
        <End />
      </Flex>
    </Flex>
  </UseLineProvider>
)
