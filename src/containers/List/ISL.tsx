import { Flex } from '@chakra-ui/react'
import { LineCode, StopCode } from 'mtr-kit'
import React from 'react'

import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { LineName } from '../../components/LineName'
import { UseLineProvider } from '../../hooks/useLine'

export const ISL: React.FC<{ disabled?: boolean }> = ({ disabled }) => (
  <UseLineProvider line={LineCode.ISL} disabled={disabled}>
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
        <Stop stop={StopCode.CHW} />
        <Line />
        <Stop stop={StopCode.HFC} />
        <Line />
        <Stop stop={StopCode.SKW} />
        <Line />
        <Stop stop={StopCode.SWH} />
        <Line />
        <Stop stop={StopCode.TAK} />
        <Line />
        <Stop stop={StopCode.QUB} />
        <Line />
        <Stop stop={StopCode.NOP} />
        <Line />
        <Stop stop={StopCode.FOH} />
        <Line />
        <Stop stop={StopCode.TIH} />
        <Line />
        <Stop stop={StopCode.CAB} />
        <Line />
        <Stop stop={StopCode.WAC} />
        <Line />
        <Stop stop={StopCode.ADM} />
        <Line />
        <Stop stop={StopCode.CEN} />
        <Line />
        <Stop stop={StopCode.SHW} />
        <Line />
        <Stop stop={StopCode.SYP} />
        <Line />
        <Stop stop={StopCode.HKU} />
        <Line />
        <Stop stop={StopCode.KET} />
        <End />
      </Flex>
    </Flex>
  </UseLineProvider>
)
