import { Box, Flex, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { End } from '../components/End'
import { Line } from '../components/Line'
import { LineName } from '../components/LineName'
import { Start } from '../components/Start'
import { Stop } from '../components/Stop'
import { lineContext } from '../providers/lineContext'

export const TML: React.FC = () => {
  return (
    <lineContext.Provider value={{ color: '#5d4037' }}>
      <Flex w="full" height="200" bg="blackAlpha.500">
        <LineName nameEn="Tuen Ma Line" nameZh="屯碼線" />
        <Flex
          w="full"
          verticalAlign="center"
          alignItems="center"
          px="20"
          overflow="auto"
        >
          <Start />
          <Stop nameEn="Tuen Mun" nameZh="屯門" />
          <Line />
          <Stop nameEn="Siu Hong" nameZh="兆康" />
          <Line />
          <Stop nameEn="Tin Shui Wai" nameZh="天水圍" />
          <Line />
          <Stop nameEn="Long Ping" nameZh="朗屏" />
          <Line />
          <Stop nameEn="Yuen Long" nameZh="元朗" />
          <Line />
          <Stop nameEn="Kam Sheung Road" nameZh="錦上路" />
          <Line />
          <Stop nameEn="Tsuen Wan West" nameZh="荃灣西" />
          <Line />
          <Stop nameEn="Mei Foo" nameZh="美孚" />
          <Line />
          <Stop nameEn="Nam Cheong" nameZh="南昌" />
          <Line />
          <Stop nameEn="Austin" nameZh="柯士甸" />
          <Line />
          <Stop nameEn="East Tsim Sha Tsui" nameZh="尖東" />
          <Line />
          <Stop nameEn="Hung Hom" nameZh="紅磡" />
          <Line />
          <Stop nameEn="Ho Man Tin" nameZh="何文田" />
          <Line />
          <Stop nameEn="To Kwa Wan" nameZh="土瓜灣" />
          <Line />
          <Stop nameEn="Sung Wong Toi" nameZh="宋皇臺" />
          <Line />
          <Stop nameEn="Kai Tak" nameZh="啟德" />
          <Line />
          <Stop nameEn="Diamond Hill" nameZh="鑽石山" />
          <Line />
          <Stop nameEn="Hin Keng" nameZh="顯徑" />
          <Line />
          <Stop nameEn="Tai Wai" nameZh="大圍" />
          <Line />
          <Stop nameEn="Che Kung Temple" nameZh="車公廟" />
          <Line />
          <Stop nameEn="Sha Tin Wai" nameZh="沙田圍" />
          <Line />
          <Stop nameEn="City One" nameZh="第一城" />
          <Line />
          <Stop nameEn="Shek Mun" nameZh="石門" />
          <Line />
          <Stop nameEn="Tai Shui Hang" nameZh="大水坑" />
          <Line />
          <Stop nameEn="Heng On" nameZh="恆安" />
          <Line />
          <Stop nameEn="Ma On Shan" nameZh="馬鞍山" />
          <Line />
          <Stop nameEn="Wu Kai Sha" nameZh="烏溪沙" />
          <End />
        </Flex>
      </Flex>
    </lineContext.Provider>
  )
}
