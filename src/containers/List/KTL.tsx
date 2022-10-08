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

export const KTL: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <UseLineProvider line={LineType.KTL} disabled={disabled}>
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
          <Stop stop={StopType.TIK} />
          <Line />
          <Stop stop={StopType.YAT} />
          <Line />
          <Stop stop={StopType.LAT} />
          <Line />
          <Stop stop={StopType.KWT} />
          <Line />
          <Stop stop={StopType.NTK} />
          <Line />
          <Stop stop={StopType.KOB} />
          <Line />
          <Stop stop={StopType.CHH} />
          <Line />
          <Stop stop={StopType.DIH} />
          <Line />
          <Stop stop={StopType.WTS} />
          <Line />
          <Stop stop={StopType.LOF} />
          <Line />
          <Stop stop={StopType.KOT} />
          <Line />
          <Stop stop={StopType.SKM} />
          <Line />
          <Stop stop={StopType.PRE} />
          <Line />
          <Stop stop={StopType.MOK} />
          <Line />
          <Stop stop={StopType.YMT} />
          <Line />
          <Stop stop={StopType.HOM} />
          <Line />
          <Stop stop={StopType.WHA} />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
