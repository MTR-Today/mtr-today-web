import { Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../components/End'
import { Line } from '../components/Line'
import { LineName } from '../components/LineName'
import { Start } from '../components/Start'
import { Stop } from '../components/Stop'
import { Line as LineType } from '../constants/line'
import { Stop as StopType } from '../constants/stop'
import { UseLineProvider } from '../hooks/useLine'

export const SIL: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <UseLineProvider line={LineType.SIL} disabled={disabled}>
      <Flex w="full" height="250" bg="blackAlpha.500">
        <LineName />
        <Flex
          w="full"
          verticalAlign="center"
          alignItems="center"
          px="20"
          overflow="auto"
        >
          <Start />
          <Stop stop={StopType.ADM} />
          <Line />
          <Stop stop={StopType.OCP} />
          <Line />
          <Stop stop={StopType.WCH} />
          <Line />
          <Stop stop={StopType.LET} />
          <Line />
          <Stop stop={StopType.SOH} />
          <Line />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
