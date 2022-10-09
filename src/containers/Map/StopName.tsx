import { Box, BoxProps } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useMemo } from 'react'
import { stopContext } from '../../contexts/stopContext'
import { getStopConfig } from '../../services/getStopConfig'

export const StopName: React.FC<BoxProps> = props => {
  const { stop } = useContext(stopContext)

  const { data } = useQuery(['stop-config', stop], () =>
    stop ? getStopConfig({ stop }) : null
  )

  return (
    <Box position="absolute" textAlign="center" {...props}>
      <Box
        position="absolute"
        transform="translateY(-50%) translateX(-50%)"
        whiteSpace="nowrap"
        lineHeight="3"
        fontWeight="semibold"
        fontSize="xs"
        minW="20"
      >
        <Box>{data?.nameZh}</Box>
        <Box>{data?.nameEn}</Box>
      </Box>
    </Box>
  )
}
