import { Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { LineName } from '../../components/LineName'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'

import { UseLineProvider } from '../../hooks/useLine'
import { LineCode, StopCode } from 'mtr-kit'

export const KTL: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <UseLineProvider line={LineCode.KTL} disabled={disabled}>
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
}
