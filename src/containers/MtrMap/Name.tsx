import { Box, BoxProps } from '@chakra-ui/react'
import { stopMap } from 'mtr-kit'
import { memo, useContext } from 'react'

import { stopContext } from '../../contexts/stopContext'

export const Name: React.FC<BoxProps> = memo(props => {
  const { stop, hovering } = useContext(stopContext)
  const config = stop ? stopMap[stop] : undefined

  return (
    <Box pos="absolute" textAlign="center" {...props}>
      <Box
        pos="absolute"
        minW="20"
        fontSize="xs"
        lineHeight="3"
        opacity={hovering ? undefined : '.5'}
        _hover={{ opacity: 1 }}
        transform="translateY(-50%) translateX(-50%)"
        whiteSpace="nowrap"
        userSelect="none"
        transition="opacity .3s"
      >
        <Box>{config?.nameZh}</Box>
        <Box>{config?.nameEn}</Box>
      </Box>
    </Box>
  )
})
