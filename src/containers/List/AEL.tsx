import { Flex } from '@chakra-ui/react'
import { LineCode, StopCode } from 'mtr-kit'

import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { LineName } from '../../components/LineName'
import { UseLineProvider } from '../../hooks/useLine'

export const AEL: React.FC = () => (
  <UseLineProvider line={LineCode.AEL}>
    <Flex w="full" h="250" bg="blackAlpha.100">
      <LineName />
      <Flex
        align="center"
        verticalAlign="center"
        overflow="auto"
        w="full"
        px="20"
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
