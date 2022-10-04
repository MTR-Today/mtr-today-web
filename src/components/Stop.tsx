import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Stop as StopType } from '../constants/stop'
import { useTime } from '../hooks/useTime'
import { lineContext } from '../providers/lineContext'
import dayjs from 'dayjs'

type Props = {
  stop: StopType
}

export const Stop: React.FC<Props> = ({ stop }) => {
  const time = useTime()
  const { stops, schedules } = useContext(lineContext)

  const { schedule } = schedules[stop] || {}

  return (
    <Flex
      flexShrink="0"
      alignItems="center"
      flexDirection="column"
      position="relative"
    >
      <Box position="absolute" bottom="6">
        <Text fontSize="xs">
          {schedule?.down
            ? dayjs
                .duration(dayjs(schedule.down?.[0]?.time).diff(time))
                .format('mm:ss')
            : null}
        </Text>
      </Box>
      <Box
        w="18px"
        h="18px"
        bg="blackAlpha.500"
        borderWidth="3px"
        borderColor="white"
        borderRadius="100%"
      ></Box>
      <Box position="absolute" top="6">
        <Text fontSize="xs">
          {schedule?.up
            ? dayjs
                .duration(dayjs(schedule.up?.[0]?.time).diff(time))
                .format('mm:ss')
            : null}
        </Text>
      </Box>
      <Box position="absolute" top="12" w="20" textAlign="center">
        <Text fontSize="xs">{stops[stop]?.nameZh}</Text>
        <Text fontSize="xs">{stops[stop]?.nameEn}</Text>
      </Box>
    </Flex>
  )
}
