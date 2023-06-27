import { Box, BoxProps } from '@chakra-ui/react'
import { stopMap } from 'mtr-kit'
import { memo, useContext } from 'react'

import { stopContext } from '../../contexts/stopContext'

export const Name: React.FC<BoxProps> = memo(props => {
  const { stop, hovering } = useContext(stopContext)
  const config = stop ? stopMap[stop] : undefined

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
