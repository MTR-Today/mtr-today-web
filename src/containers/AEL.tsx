import { Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../components/End'
import { Line } from '../components/Line'
import { LineName } from '../components/LineName'
import { Start } from '../components/Start'
import { Stop } from '../components/Stop'
import { Line as LineType } from '../constants/line'
import { Stop as StopType } from '../constants/stop'
import { UseLineProvider } from '../hooks/useLine'

export const AEL: React.FC = () => {
  return (
    <UseLineProvider line={LineType.AEL}>
      <Flex w="full" height="250" bg="blackAlpha.500">
        <LineName />
        <Flex
          w="full"
          verticalAlign="center"
          alignItems="center"
          px="20"
          overflow="auto"
        >
          <Start />
          <Stop stop={StopType.HOK} />
          <Line />
          <Stop stop={StopType.KOW} />
          <Line />
          <Stop stop={StopType.TSY} />
          <Line />
          <Stop stop={StopType.AIR} />
          <Line />
          <Stop stop={StopType.AWE} />
          <Line />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
