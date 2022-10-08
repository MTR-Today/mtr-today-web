import { Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { LineName } from '../../components/LineName'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { Line as LineType } from '../../constants/line'
import { Stop as StopType } from '../../constants/stop'
import { UseLineProvider } from '../../hooks/useLine'

export const TCL: React.FC = () => {
  return (
    <UseLineProvider line={LineType.TCL}>
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
          <Stop stop={StopType.HOK} />
          <Line />
          <Stop stop={StopType.KOW} />
          <Line />
          <Stop stop={StopType.OLY} />
          <Line />
          <Stop stop={StopType.NAC} />
          <Line />
          <Stop stop={StopType.LAK} />
          <Line />
          <Stop stop={StopType.TSY} />
          <Line />
          <Stop stop={StopType.SUN} />
          <Line />
          <Stop stop={StopType.TUC} />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
