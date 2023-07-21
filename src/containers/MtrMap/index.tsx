import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useParams } from '@tanstack/router'
import { LineCode } from 'mtr-kit'
import { memo, useState } from 'react'

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

  const [hoveringLine, setHoveringLine] = useState<LineCode>()

  return (
    <Wrapper>
      <Islands />
      <Lines hoveringLine={hoveringLine} setHoveringLine={setHoveringLine} />
      <Stops
        mode={mode}
        selectedStop={selectedStop}
        hoveringLine={hoveringLine}
      />
    </Wrapper>
  )
})

const Wrapper = styled(Box)`
  width: ${MAP_WIDTH}px;
  height: ${MAP_HEIGHT}px;
  position: relative;
`
