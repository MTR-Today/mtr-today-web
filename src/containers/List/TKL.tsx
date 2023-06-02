import { Box, Flex, Slide } from '@chakra-ui/react'
import React from 'react'
import { End } from '../../components/LineBuilder/End'
import { Line } from '../../components/LineBuilder/Line'
import { LineName } from '../../components/LineName'
import { Start } from '../../components/LineBuilder/Start'
import { Stop } from '../../components/LineBuilder/Stop'
import { UseLineProvider } from '../../hooks/useLine'
import { Joint } from '../../components/LineBuilder/Joint'
import { LineCode, StopCode } from 'mtr-kit'

export const TKL: React.FC = () => {
  return (
    <UseLineProvider line={LineCode.TKL}>
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
              <Stop stop={StopCode.POA} namePosition="top" />
              <Line />
              <Stop stop={StopCode.HAH} namePosition="top" />
              <Line />
            </Flex>
            <Flex
              verticalAlign="center"
              justifyContent="flex-end"
              alignItems="center"
            >
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
}
