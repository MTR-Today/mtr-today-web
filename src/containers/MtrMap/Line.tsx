import { useColorMode } from '@chakra-ui/react'
import c from 'color'
import { LineCode, lineMap } from 'mtr-kit'
import { memo, useCallback, useContext } from 'react'
import { roundCorners } from 'svg-round-corners'

import { lineContext } from '../../contexts/mapContext'

export const Line: React.FC<
  React.SVGProps<SVGPathElement> & { color?: string; line: LineCode }
> = memo(({ line, d, ...props }) => {
  const { hoveringLine, setHoveringLine } = useContext(lineContext)
  const { colorMode } = useColorMode()

  const color = lineMap[line].color

  const handleMouseEnter = useCallback(() => {
    setHoveringLine(line)
  }, [line, setHoveringLine])

  const handleMouseLeave = useCallback(() => {
    setHoveringLine(undefined)
  }, [setHoveringLine])

  return (
    <path
      d={d ? roundCorners(d, 20).path : d}
      stroke={
        colorMode === 'dark' && color ? c(color).darken(0.3).hex() : color
      }
      fill="none"
      strokeLinejoin="round"
      strokeWidth="6px"
      opacity={hoveringLine && hoveringLine !== line ? '.3' : undefined}
      style={{ transition: 'opacity .3s' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  )
})
