import { Box, Flex } from '@chakra-ui/react'
import { LineCode, StopCode } from 'mtr-kit'

import { End } from '../../components/LineBuilder/End'
import { Joint } from '../../components/LineBuilder/Joint'
import { Line } from '../../components/LineBuilder/Line'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { LineName } from '../../components/LineName'
import { UseLineProvider } from '../../hooks/useLine'

export const TKL: React.FC = () => (
  <UseLineProvider line={LineCode.TKL}>
    <Flex w="full" h="250" bg="blackAlpha.100">
      <LineName />
      <Flex
        align="center"
        verticalAlign="center"
        overflow="auto"
        w="full"
        px="20"
      >
        <Box>
          <Flex align="center" verticalAlign="center" pb="56px">
            <Start />
            <Stop stop={StopCode.POA} namePosition="top" />
            <Line />
            <Stop stop={StopCode.HAH} namePosition="top" />
            <Line />
          </Flex>
          <Flex align="center" justify="flex-end" verticalAlign="center">
            <Start />
            <Line />
            <Stop stop={StopCode.LHP} />
            <Line />
          </Flex>
        </Box>
        <Joint />
        <Stop stop={StopCode.TKO} />
        <Line />
        <Stop stop={StopCode.TIK} />
        <Line />
        <Stop stop={StopCode.YAT} />
        <Line />
        <Stop stop={StopCode.QUB} />
        <Line />
        <Stop stop={StopCode.NOP} />
        <End />
      </Flex>
    </Flex>
  </UseLineProvider>
)
