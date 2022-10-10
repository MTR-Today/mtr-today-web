import { Box, Flex, Slide } from '@chakra-ui/react'
import React from 'react'
import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { LineName } from '../../components/LineName'
import { Split } from '../../components/LineBuilder/Split'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { Line as LineType } from '../../constants/line'
import { Stop as StopType } from '../../constants/stop'
import { UseLineProvider } from '../../hooks/useLine'
import { Joint } from '../../components/LineBuilder/Joint'

export const TKL: React.FC = () => {
  return (
    <UseLineProvider line={LineType.TKL}>
      <Flex w="full" height="250" bg="blackAlpha.100">
        <LineName />
        <Flex
          w="full"
          verticalAlign="center"
          alignItems="center"
          px="20"
          overflow="auto"
        >
          <Box>
            <Flex verticalAlign="center" alignItems="center" pb="56px">
              <Start />
              <Stop stop={StopType.POA} namePosition="top" />
              <Line />
              <Stop stop={StopType.HAH} namePosition="top" />
              <Line />
            </Flex>
            <Flex
              verticalAlign="center"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Start />
              <Line />
              <Stop stop={StopType.LHP} />
              <Line />
            </Flex>
          </Box>
          <Joint />
          <Stop stop={StopType.TKO} />
          <Line />
          <Stop stop={StopType.TIK} />
          <Line />
          <Stop stop={StopType.YAT} />
          <Line />
          <Stop stop={StopType.QUB} />
          <Line />
          <Stop stop={StopType.NOP} />
          <End />
        </Flex>
      </Flex>
    </UseLineProvider>
  )
}
