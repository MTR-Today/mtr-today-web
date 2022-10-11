import { useColorMode } from '@chakra-ui/react'
import { roundCorners } from 'svg-round-corners'

import React, { memo } from 'react'

export const BG = memo(() => {
  const { colorMode } = useColorMode()

  return (
    <>
      <path
        d={
          roundCorners(
            'M 300 150 L 150 150 L 150 580 L 300 580 L 300 660 L 840 660 L 940 740 L 940 930 L 900 930 L 900 1035 L 1730 1035 L 2080 705 L 2200 705 L 2200 920 L 2300 1020 L 2650 1020 L 2650 600 L 2400 600 L 2400 400 L 2650 400 L 2650 150 L 1800 150 L 1800 400 L 1700 400 L 1700 200 L 900 200 L 750 350 L 600 350 L 400 150 L 280 150',
            20
          ).path
        }
        fill={colorMode === 'dark' ? '#121212' : '#e0e0e0'}
      />
      <path
        d={
          roundCorners(
            'M 738 695 L 778 695 L 778 745 L 728 745 L 728 695 L 765 695',
            10
          ).path
        }
        fill={colorMode === 'dark' ? '#121212' : '#e0e0e0'}
      />
      <path
        d={
          roundCorners(
            'M 390 950 L 480 950 L 695 735 L 760 800 L 760 1000 L 680 1000 L 480 1200 L 150 1200 L 150 950 L 400 950',
            20
          ).path
        }
        fill={colorMode === 'dark' ? '#121212' : '#e0e0e0'}
      />
      <path
        d={
          roundCorners(
            'M 390 900 L 390 920 L 460 920 L 615 765 L 480 765 L 390 855 L 390 910',
            20
          ).path
        }
        fill={colorMode === 'dark' ? '#121212' : '#e0e0e0'}
      />
      <path
        d={
          roundCorners(
            'M 830 1080 L 2650 1080 L 2650 1550 L 1350 1550 L 1160 1360 L 760 1360 L 760 1080 L 840 1080',
            20
          ).path
        }
        fill={colorMode === 'dark' ? '#121212' : '#e0e0e0'}
      />
      <path
        d={
          roundCorners(
            'M 960 1400 L 1150 1400 L 1300 1550 L 900 1550 L 900 1400 L 1000 1400',
            20
          ).path
        }
        fill={colorMode === 'dark' ? '#121212' : '#e0e0e0'}
      />
    </>
  )
})
