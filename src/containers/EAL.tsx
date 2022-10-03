import { Box, Flex, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { End } from '../components/End'
import { LineName } from '../components/LineName'
import { Start } from '../components/Start'
import { Stop } from '../components/Stop'
import { lineContext } from '../providers/lineContext'

export const EAL: React.FC = () => {
  return (
    <lineContext.Provider value={{ color: 'blue.700' }}>
      <Flex w="full" height="200" bg="blackAlpha.500">
        <LineName nameEn="East Rail Line" nameZh="東鐵線" />
        <Flex w="full" verticalAlign="center" alignItems="center" px="20">
          <Start />
          <End />
        </Flex>
      </Flex>
    </lineContext.Provider>
  )
}
