import { Box, BoxProps } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React, { memo, useContext, useMemo } from 'react'
import { mapContext } from '../../contexts/mapContext'
import { stopContext } from '../../contexts/stopContext'

export const Name: React.FC<BoxProps> = memo(props => {
  const { stop, hovering } = useContext(stopContext)
  const { stopConfigs } = useContext(mapContext)
  const config = useMemo(
    () => stopConfigs.find(item => item.code === stop),
    [stopConfigs, stop]
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
        opacity={hovering ? undefined : '.5'}
        transition="opacity .3s"
        _hover={{ opacity: 1 }}
        userSelect="none"
      >
        <Box>{config?.nameZh}</Box>
        <Box>{config?.nameEn}</Box>
      </Box>
    </Box>
  )
})
