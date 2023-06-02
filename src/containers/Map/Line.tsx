import { useColorMode } from '@chakra-ui/react'
import React, { memo, useCallback, useContext, useMemo } from 'react'
import { roundCorners } from 'svg-round-corners'
import c from 'color'
import { mapContext } from '../../contexts/mapContext'
import { LineCode } from 'mtr-kit'

export const Line: React.FC<
  React.SVGProps<SVGPathElement> & { color?: string; line: LineCode }
> = memo(({ line, d, ...props }) => {
  const { lineConfigs, hoveringLine, setHoveringLine } = useContext(mapContext)
  const { colorMode } = useColorMode()

  const color = useMemo(
    () => lineConfigs.find(item => item.code === line)?.color,
    [lineConfigs, line]
  )

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
