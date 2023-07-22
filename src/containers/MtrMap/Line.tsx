import { useColorMode } from '@chakra-ui/react'
import c from 'color'
import { LineCode, lineMap } from 'mtr-kit'
import { isEmpty } from 'ramda'
import { memo, useContext } from 'react'
import { roundCorners } from 'svg-round-corners'

import { MapMode } from '../../constants/mapMode'
import { lineContext } from '../../contexts/mapContext'

export const Line: React.FC<
  React.SVGProps<SVGPathElement> & { color?: string; line: LineCode }
> = memo(({ line, d, ...props }) => {
  const { selectedLines, mode } = useContext(lineContext)
  const { colorMode } = useColorMode()

  const color = lineMap[line].color
  const isSelected =
    mode === MapMode.FARES ||
    isEmpty(selectedLines) ||
    selectedLines.includes(line)

  return (
    <path
      d={d ? roundCorners(d, 20).path : d}
      stroke={
        colorMode === 'dark' && color ? c(color).darken(0.3).hex() : color
      }
      fill="none"
      strokeLinejoin="round"
      strokeWidth="6px"
      opacity={!isSelected ? '.3' : undefined}
      style={{ transition: 'opacity .3s' }}
      {...props}
    />
  )
})
