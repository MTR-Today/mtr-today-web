import { Flex } from '@chakra-ui/react'
import React from 'react'
import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { LineName } from '../../components/LineName'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { UseLineProvider } from '../../hooks/useLine'
import { LineCode, StopCode } from 'mtr-kit'

export const SIL: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <UseLineProvider line={LineCode.SIL} disabled={disabled}>
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
          <Stop stop={StopCode.SOH} />
          <Line />
          <Stop stop={StopCode.LET} />
          <Line />
          <Stop stop={StopCode.WCH} />
          <Line />
          <Stop stop={StopCode.OCP} />
          <Line />
          <Stop stop={StopCode.ADM} />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
