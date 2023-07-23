import { useColorMode } from '@chakra-ui/react'
import c from 'color'
import { LineCode, lineMap } from 'mtr-kit'
import { isEmpty } from 'ramda'
import { memo, useContext } from 'react'
import { roundCorners } from 'svg-round-corners'

import { lineContext } from '../../contexts/mapContext'

export const Line: React.FC<
  React.SVGProps<SVGPathElement> & {
    color?: string
    line: LineCode
    startTip?: boolean
    endTip?: boolean
    flipTip?: boolean
  }
> = memo(
  ({ line, d, startTip = true, endTip = true, flipTip = false, ...props }) => {
    const { selectedLines } = useContext(lineContext)
    const { colorMode } = useColorMode()

    const color = lineMap[line].color
    const isSelected = isEmpty(selectedLines) || selectedLines.includes(line)

    return (
      <>
        <defs>
          <marker
            id={`endTip-${line}`}
            viewBox="0 0 20 40"
            refX="10"
            refY="20"
            orient="auto"
            markerUnits="strokeWidth"
            markerWidth="7"
            markerHeight="7"
          >
            <text
              x="0"
              y="8"
              style={{
                fontSize: '8px',
                opacity: '.3',
                fill: 'var(--chakra-colors-chakra-body-text)',
              }}
            >
              {flipTip ? '上行' : '下行'}
            </text>
            <path
              d="M 8 12 L 8 28"
              strokeWidth="6px"
              fill="none"
              stroke={
                colorMode === 'dark' && color
                  ? c(color).darken(0.3).hex()
                  : color
              }
            />
            <text
              x="0"
              y="38"
              style={{
                fontSize: '8px',
                opacity: '.3',
                fill: 'var(--chakra-colors-chakra-body-text)',
              }}
            >
              {flipTip ? '下行' : '上行'}
            </text>
          </marker>
        </defs>
        <path
          d={d ? roundCorners(d, 20).path : d}
          stroke={
            colorMode === 'dark' && color ? c(color).darken(0.3).hex() : color
          }
          fill="none"
          strokeLinejoin="round"
          strokeWidth="6px"
          opacity={!isSelected ? '.3' : undefined}
          style={{
            transition: 'opacity .3s',
          }}
          markerStart={startTip ? `url(#endTip-${line})` : undefined}
          markerEnd={endTip ? `url(#endTip-${line})` : undefined}
          {...props}
        />
      </>
    )
  }
)
