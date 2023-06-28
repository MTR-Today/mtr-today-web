import { Flex } from '@chakra-ui/react'
import { LineCode, StopCode } from 'mtr-kit'

import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { LineName } from '../../components/LineName'
import { UseLineProvider } from '../../hooks/useLine'

export const DRL: React.FC<{ disabled?: boolean }> = ({ disabled }) => (
  <UseLineProvider line={LineCode.DRL} disabled={disabled}>
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
        <Stop stop={StopCode.SUN} />
        <Line />
        <Stop stop={StopCode.DIS} />
        <End />
      </Flex>
    </Flex>
  </UseLineProvider>
)
