import { ColorMode, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'

import { Animation } from './animation'

export const Bg = () => {
  const { colorMode } = useColorMode()
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // eslint-disable-next-line no-new
    if (ref.current) new Animation(ref.current, colorMode)
  }, [colorMode])

  return <Water ref={ref} colorMode={colorMode} />
}

const Water = styled.canvas<{ colorMode: ColorMode }>`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${({ colorMode }) => (colorMode === 'light' ? '.5' : '.1')};
`
