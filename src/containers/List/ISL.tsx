import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../../components/LineBuilder/End'
import { LineName } from '../../components/LineName'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { Line as LineType } from '../../constants/line'
import { Stop as StopType } from '../../constants/stop'
import { Line } from '../../components/LineBuilder/Line'

import { UseLineProvider } from '../../hooks/useLine'

export const ISL: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <UseLineProvider line={LineType.ISL} disabled={disabled}>
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
          <Stop stop={StopType.CHW} />
          <Line />
          <Stop stop={StopType.HFC} />
          <Line />
          <Stop stop={StopType.SKW} />
          <Line />
          <Stop stop={StopType.SWH} />
          <Line />
          <Stop stop={StopType.TAK} />
          <Line />
          <Stop stop={StopType.QUB} />
          <Line />
          <Stop stop={StopType.NOP} />
          <Line />
          <Stop stop={StopType.FOH} />
          <Line />
          <Stop stop={StopType.TIH} />
          <Line />
          <Stop stop={StopType.CAB} />
          <Line />
          <Stop stop={StopType.WAC} />
          <Line />
          <Stop stop={StopType.ADM} />
          <Line />
          <Stop stop={StopType.CEN} />
          <Line />
          <Stop stop={StopType.SHW} />
          <Line />
          <Stop stop={StopType.SYP} />
          <Line />
          <Stop stop={StopType.HKU} />
          <Line />
          <Stop stop={StopType.KET} />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
