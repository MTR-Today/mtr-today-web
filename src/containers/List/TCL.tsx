import { Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { LineName } from '../../components/LineName'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { UseLineProvider } from '../../hooks/useLine'
import { LineCode, StopCode } from 'mtr-kit'

export const TCL: React.FC = () => {
  return (
    <UseLineProvider line={LineCode.TCL}>
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
          <Stop stop={StopCode.TUC} />
          <Line />
          <Stop stop={StopCode.SUN} />
          <Line />
          <Stop stop={StopCode.TSY} />
          <Line />
          <Stop stop={StopCode.LAK} />
          <Line />
          <Stop stop={StopCode.NAC} />
          <Line />
          <Stop stop={StopCode.OLY} />
          <Line />
          <Stop stop={StopCode.KOW} />
          <Line />
          <Stop stop={StopCode.HOK} />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
