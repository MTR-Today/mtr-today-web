import { useColorMode } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { roundCorners } from 'svg-round-corners'
import c from 'color'
import { Line as LineType } from '../../constants/line'
import { lineConfigsContext } from '../../contexts/lineConfigsContext'

export const Line: React.FC<
  React.SVGProps<SVGPathElement> & { color?: string; line: LineType }
> = ({ line, d, ...props }) => {
  const configs = useContext(lineConfigsContext)
  const { colorMode } = useColorMode()
  const color = configs[line]?.color

  return (
    <path
      d={d ? roundCorners(d, 20).path : d}
      stroke={
        colorMode === 'dark' && color ? c(color).darken(0.3).hex() : color
      }
      fill="none"
      stroke-linejoin="round"
      strokeWidth="6px"
      opacity={
        configs.hoveringLine && configs.hoveringLine !== line ? '.3' : undefined
      }
      style={{ transition: 'opacity .3s' }}
      {...props}
    />
  )
}
