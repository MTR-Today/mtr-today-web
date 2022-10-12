import { useColorMode } from '@chakra-ui/react'
import { roundCorners } from 'svg-round-corners'

import React, { memo } from 'react'

export const Island: React.FC<React.SVGProps<SVGPathElement>> = memo(
  ({ d = '', ...rest }) => {
    const { colorMode } = useColorMode()

    return (
      <path
        d={roundCorners(d, 20).path}
        fill={colorMode === 'dark' ? '#000000' : '#FFFFFF'}
        {...rest}
      />
    )
  }
)
