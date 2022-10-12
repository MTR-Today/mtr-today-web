import { Animation } from './animation'

import React, { memo, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Island } from './Island'

export const BG = memo(() => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    new Animation(ref.current)
  }, [])

  return (
    <>
      <Water ref={ref} />
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Island d="M 300 150 L 150 150 L 150 580 L 300 580 L 300 660 L 840 660 L 940 740 L 940 930 L 900 930 L 900 1035 L 1730 1035 L 2080 705 L 2200 705 L 2200 920 L 2300 1020 L 2650 1020 L 2650 600 L 2400 600 L 2400 400 L 2650 400 L 2650 150 L 1800 150 L 1800 400 L 1700 400 L 1700 200 L 900 200 L 750 350 L 600 350 L 400 150 L 280 150" />
        <Island d="M 738 695 L 778 695 L 778 745 L 728 745 L 728 695 L 765 695" />
        <Island d="M 390 950 L 480 950 L 695 735 L 760 800 L 760 1000 L 680 1000 L 480 1200 L 150 1200 L 150 950 L 400 950" />
        <Island d="M 390 900 L 390 920 L 460 920 L 615 765 L 480 765 L 390 855 L 390 910" />
        <Island d="M 830 1080 L 2650 1080 L 2650 1550 L 1350 1550 L 1160 1360 L 760 1360 L 760 1080 L 840 1080" />
        <Island d="M 960 1400 L 1150 1400 L 1300 1550 L 900 1550 L 900 1400 L 1000 1400" />
      </svg>
    </>
  )
})

const Water = styled.canvas`
  width: 2800px;
  height: 1630px;
  position: absolute;
  opacity: 0.1;
`
