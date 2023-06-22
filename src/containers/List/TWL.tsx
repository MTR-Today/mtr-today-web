import { Flex } from '@chakra-ui/react'
import { LineCode, StopCode } from 'mtr-kit'

import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { LineName } from '../../components/LineName'
import { UseLineProvider } from '../../hooks/useLine'

export const TWL: React.FC<{ disabled?: boolean }> = ({ disabled }) => (
  <UseLineProvider line={LineCode.TWL} disabled={disabled}>
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
        <Stop stop={StopCode.TSW} />
        <Line />
        <Stop stop={StopCode.TWH} />
        <Line />
        <Stop stop={StopCode.KWH} />
        <Line />
        <Stop stop={StopCode.KWF} />
        <Line />
        <Stop stop={StopCode.LAK} />
        <Line />
        <Stop stop={StopCode.MEF} />
        <Line />
        <Stop stop={StopCode.LCK} />
        <Line />
        <Stop stop={StopCode.CSW} />
        <Line />
        <Stop stop={StopCode.SSP} />
        <Line />
        <Stop stop={StopCode.PRE} />
        <Line />
        <Stop stop={StopCode.MOK} />
        <Line />
        <Stop stop={StopCode.YMT} />
        <Line />
        <Stop stop={StopCode.JOR} />
        <Line />
        <Stop stop={StopCode.TST} />
        <Line />
        <Stop stop={StopCode.ADM} />
        <Line />
        <Stop stop={StopCode.CEN} />
        <End />
      </Flex>
    </Flex>
  </UseLineProvider>
)
