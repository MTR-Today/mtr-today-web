import { useColorMode } from '@chakra-ui/react'
import React, { memo, useCallback, useContext } from 'react'
import { roundCorners } from 'svg-round-corners'
import c from 'color'
import { Line as LineType } from '../../constants/line'
import { lineConfigsContext } from '../../contexts/lineConfigsContext'

export const Line: React.FC<
  React.SVGProps<SVGPathElement> & { color?: string; line: LineType }
> = memo(({ line, d, ...props }) => {
  const { lineConfigs, hoveringLine, setHoveringLine } =
    useContext(lineConfigsContext)
  const { colorMode } = useColorMode()
  const color = lineConfigs[line]?.color

  const handleMouseEnter = useCallback(() => {
    setHoveringLine(line)
  }, [line])

  const handleMouseLeave = useCallback(() => {
    setHoveringLine(undefined)
  }, [])

  return (
    <path
      d={d ? roundCorners(d, 20).path : d}
      stroke={
        colorMode === 'dark' && color ? c(color).darken(0.3).hex() : color
      }
      fill="none"
      stroke-linejoin="round"
      strokeWidth="6px"
      opacity={hoveringLine && hoveringLine !== line ? '.3' : undefined}
      style={{ transition: 'opacity .3s' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  )
})
