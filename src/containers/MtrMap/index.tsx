import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useParams } from '@tanstack/router'
import { lines } from 'mtr-kit'
import { memo, useMemo } from 'react'

import { MapMode } from '../../constants/mapMode'
import { Islands } from './Islands'
import { Lines } from './Lines'
import { Stops } from './Stops'

export const MAP_WIDTH = 2800
export const MAP_HEIGHT = 1630

type Props = {
  mode: MapMode
}

export const MtrMap: React.FC<Props> = memo(({ mode }) => {
  const { stop: selectedStop } = useParams()

  const selectedLines = useMemo(() => {
    if (!selectedStop) return undefined
    return lines
      .filter(({ stops }) => stops.some(({ stop }) => stop === selectedStop))
      .map(item => item.line)
  }, [selectedStop])

  return (
    <Wrapper>
      <Islands />
      <Lines mode={mode} selectedLines={selectedLines} />
      <Stops
        mode={mode}
        selectedStop={selectedStop}
        selectedLines={selectedLines}
      />
    </Wrapper>
  )
})

const Wrapper = styled(Box)`
  width: ${MAP_WIDTH}px;
  height: ${MAP_HEIGHT}px;
  position: relative;
`
