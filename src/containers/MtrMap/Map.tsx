import { LineCode } from 'mtr-kit'
import { memo } from 'react'

import { lineContext } from '../../contexts/mapContext'
import { Island } from './Island'
import { Line } from './Line'
import { MAP_HEIGHT, MAP_WIDTH } from '.'

type Props = {
  selectedLines?: LineCode[]
}

export const Map = memo(({ selectedLines = [] }: Props) => (
  <svg
    width={MAP_WIDTH}
    height={MAP_HEIGHT}
    style={{ position: 'absolute' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Island d="M 300 150 L 150 150 L 150 580 L 300 580 L 300 660 L 840 660 L 940 740 L 940 930 L 900 930 L 900 1035 L 1730 1035 L 2080 705 L 2200 705 L 2200 920 L 2300 1020 L 2650 1020 L 2650 600 L 2400 600 L 2400 400 L 2650 400 L 2650 150 L 1800 150 L 1800 400 L 1700 400 L 1700 200 L 900 200 L 750 350 L 600 350 L 400 150 L 280 150" />
    <Island d="M 738 695 L 778 695 L 778 745 L 728 745 L 728 695 L 765 695" />
    <Island d="M 390 950 L 480 950 L 695 735 L 760 800 L 760 1000 L 680 1000 L 480 1200 L 150 1200 L 150 950 L 400 950" />
    <Island d="M 390 900 L 390 920 L 460 920 L 615 765 L 480 765 L 390 855 L 390 910" />
    <Island d="M 830 1080 L 2650 1080 L 2650 1550 L 1350 1550 L 1160 1360 L 760 1360 L 760 1080 L 840 1080" />
    <Island d="M 960 1400 L 1150 1400 L 1300 1550 L 900 1550 L 900 1400 L 1000 1400" />
    <lineContext.Provider value={{ selectedLines }}>
      {/* TML */}
      <Line
        d="M 250 500 L 250 240 L 400 240 L 400 530 L 1000 530 L 1000 750 L 1220 970 L 1265 1020 L 1520 1020 L 1665 876 L 1820 876 L 1950 750 L 1950 540 L 1596 540 L 1596 460 L 1820 460 L 1820 270 L 2430 270"
        line={LineCode.TML}
      />
      {/* EAL */}
      <Line
        d="M 880 330 L 1080 330 L 1080 270"
        line={LineCode.EAL}
        endTip={false}
      />
      <Line
        d="M 1530 270 L 1680 270 L 1680 400 L 1590 400"
        line={LineCode.EAL}
        strokeDasharray="10,10"
        startTip={false}
        endTip={false}
        flipTip
      />
      <Line
        d="M 950 270 L 1590 270 L 1590 958 L 1388 1162 1330 1162"
        line={LineCode.EAL}
        endTip={false}
        flipTip
      />
      {/* TWL */}
      <Line
        d="M 400 630 L 1390 630 L 1390 1150 L 1230 1150"
        line={LineCode.TWL}
        endTip={false}
      />
      <Line
        d="M 2400 900 L 2240 900 L 2240 630 L 1396 630 L 1396 870 L 1780 870 L 1780 1000"
        line={LineCode.KTL}
        startTip={false}
      />
      {/* TKL */}
      <Line
        d="M 1860 1150 L 2010 1150 L 2250 906 L 2500 906 L 2600 906 L 2600 710"
        line={LineCode.TKL}
        startTip={false}
        flipTip
      />
      <Line d="M 2500 906 L 2600 906 L 2600 1040" line={LineCode.TKL} />
      {/* ISL */}
      <Line
        d="M 780 1156 L 2360 1156 L 2500 1156 L 2500 1300"
        line={LineCode.ISL}
        flipTip
      />
      {/* SIL */}
      <Line
        d="M  930 1450 L 1150 1450 L 1200 1350 L 1400 1350 L 1400 1300 L 1400 1168 L 1330 1168"
        line={LineCode.SIL}
        endTip={false}
      />
      {/* TCL */}
      <Line
        d="M 486 980 L 830 636 L 910 636 L 910 690 L 994 690 L 994 1093 L 1185 1093"
        line={LineCode.TCL}
        endTip={false}
      />
      {/* AEL */}
      <Line
        d="M 1185 1099 L 988 1099 L 988 970 L 983 938 L 983 700 L 900 700 L 900 647 L 828 647 L 727 748 L 690 760 L 650 800 L 522 930 L 455 860 L 555 760"
        line={LineCode.AEL}
        startTip={false}
        flipTip
      />
      {/* DRL */}
      <Line
        d="M 645 830 L 730 745 L 730 970"
        line={LineCode.DRL}
        startTip={false}
      />
    </lineContext.Provider>
  </svg>
))
