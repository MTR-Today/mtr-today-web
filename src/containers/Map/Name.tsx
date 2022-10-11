import { Box, BoxProps } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useMemo } from 'react'
import { stopContext } from '../../contexts/stopContext'
import { getStopConfig } from '../../services/getStopConfig'

export const Name: React.FC<BoxProps> = props => {
  const { stop, hovering } = useContext(stopContext)

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
        fontSize="xs"
        minW="20"
        opacity={hovering ? undefined : '.3'}
        transition="opacity .3s"
        _hover={{ opacity: 1 }}
        userSelect="none"
      >
        <Box>{data?.nameZh}</Box>
        <Box>{data?.nameEn}</Box>
      </Box>
    </Box>
  )
}
