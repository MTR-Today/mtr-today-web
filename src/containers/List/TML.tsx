import { Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { LineName } from '../../components/LineName'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'

import { UseLineProvider } from '../../hooks/useLine'
import { LineCode, StopCode } from 'mtr-kit'

export const TML: React.FC = () => {
  return (
    <UseLineProvider line={LineCode.TML}>
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
          <Stop stop={StopCode.TUM} />
          <Line />
          <Stop stop={StopCode.SIH} />
          <Line />
          <Stop stop={StopCode.TIS} />
          <Line />
          <Stop stop={StopCode.LOP} />
          <Line />
          <Stop stop={StopCode.YUL} />
          <Line />
          <Stop stop={StopCode.KSR} />
          <Line />
          <Stop stop={StopCode.TWW} />
          <Line />
          <Stop stop={StopCode.MEF} />
          <Line />
          <Stop stop={StopCode.NAC} />
          <Line />
          <Stop stop={StopCode.AUS} />
          <Line />
          <Stop stop={StopCode.ETS} />
          <Line />
          <Stop stop={StopCode.HUH} />
          <Line />
          <Stop stop={StopCode.HOM} />
          <Line />
          <Stop stop={StopCode.TKW} />
          <Line />
          <Stop stop={StopCode.SUW} />
          <Line />
          <Stop stop={StopCode.KAT} />
          <Line />
          <Stop stop={StopCode.DIH} />
          <Line />
          <Stop stop={StopCode.HIK} />
          <Line />
          <Stop stop={StopCode.TAW} />
          <Line />
          <Stop stop={StopCode.CKT} />
          <Line />
          <Stop stop={StopCode.STW} />
          <Line />
          <Stop stop={StopCode.CIO} />
          <Line />
          <Stop stop={StopCode.SHM} />
          <Line />
          <Stop stop={StopCode.TSH} />
          <Line />
          <Stop stop={StopCode.HEO} />
          <Line />
          <Stop stop={StopCode.MOS} />
          <Line />
          <Stop stop={StopCode.WKS} />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
