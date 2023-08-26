import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useParams } from '@tanstack/react-router'
import { lines } from 'mtr-kit'
import { memo, useMemo } from 'react'

import { MapMode } from '../../constants/mapMode'
import { Map } from './Map'
import { Stops } from './Stops'

export const MAP_WIDTH = 2800
export const MAP_HEIGHT = 1630

type Props = {
  mode: MapMode
}

export const MtrMap: React.FC<Props> = memo(({ mode }) => {
  const { stop: selectedStop } = useParams()

  const selectedLines = useMemo(() => {
    if (!selectedStop || mode === MapMode.FARES) return undefined
    return lines
      .filter(({ stops }) => stops.some(({ stop }) => stop === selectedStop))
      .map(item => item.line)
  }, [selectedStop, mode])

  return (
    <Wrapper>
      <Map selectedLines={selectedLines} />
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
