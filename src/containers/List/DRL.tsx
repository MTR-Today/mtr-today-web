import { Flex } from '@chakra-ui/react'
import { LineCode, StopCode } from 'mtr-kit'
import React from 'react'

import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { LineName } from '../../components/LineName'
import { UseLineProvider } from '../../hooks/useLine'

export const DRL: React.FC<{ disabled?: boolean }> = ({ disabled }) => (
  <UseLineProvider line={LineCode.DRL} disabled={disabled}>
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
        <Stop stop={StopCode.SUN} />
        <Line />
        <Stop stop={StopCode.DIS} />
        <End />
      </Flex>
    </Flex>
  </UseLineProvider>
)
