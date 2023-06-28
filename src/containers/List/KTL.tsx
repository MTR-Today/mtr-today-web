import { Flex } from '@chakra-ui/react'
import { LineCode, StopCode } from 'mtr-kit'

import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { LineName } from '../../components/LineName'
import { UseLineProvider } from '../../hooks/useLine'

export const KTL: React.FC<{ disabled?: boolean }> = ({ disabled }) => (
  <UseLineProvider line={LineCode.KTL} disabled={disabled}>
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
        <Stop stop={StopCode.TIK} />
        <Line />
        <Stop stop={StopCode.YAT} />
        <Line />
        <Stop stop={StopCode.LAT} />
        <Line />
        <Stop stop={StopCode.KWT} />
        <Line />
        <Stop stop={StopCode.NTK} />
        <Line />
        <Stop stop={StopCode.KOB} />
        <Line />
        <Stop stop={StopCode.CHH} />
        <Line />
        <Stop stop={StopCode.DIH} />
        <Line />
        <Stop stop={StopCode.WTS} />
        <Line />
        <Stop stop={StopCode.LOF} />
        <Line />
        <Stop stop={StopCode.KOT} />
        <Line />
        <Stop stop={StopCode.SKM} />
        <Line />
        <Stop stop={StopCode.PRE} />
        <Line />
        <Stop stop={StopCode.MOK} />
        <Line />
        <Stop stop={StopCode.YMT} />
        <Line />
        <Stop stop={StopCode.HOM} />
        <Line />
        <Stop stop={StopCode.WHA} />
        <End />
      </Flex>
    </Flex>
  </UseLineProvider>
)
