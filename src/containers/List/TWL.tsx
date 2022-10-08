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

export const TWL: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <UseLineProvider line={LineType.TWL} disabled={disabled}>
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
          <Stop stop={StopType.TSW} />
          <Line />
          <Stop stop={StopType.TWH} />
          <Line />
          <Stop stop={StopType.KWH} />
          <Line />
          <Stop stop={StopType.KWF} />
          <Line />
          <Stop stop={StopType.LAK} />
          <Line />
          <Stop stop={StopType.MEF} />
          <Line />
          <Stop stop={StopType.LCK} />
          <Line />
          <Stop stop={StopType.CSW} />
          <Line />
          <Stop stop={StopType.SSP} />
          <Line />
          <Stop stop={StopType.PRE} />
          <Line />
          <Stop stop={StopType.MOK} />
          <Line />
          <Stop stop={StopType.YMT} />
          <Line />
          <Stop stop={StopType.JOR} />
          <Line />
          <Stop stop={StopType.TST} />
          <Line />
          <Stop stop={StopType.ADM} />
          <Line />
          <Stop stop={StopType.CEN} />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
