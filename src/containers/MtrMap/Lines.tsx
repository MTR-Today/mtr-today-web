import { LineCode } from 'mtr-kit'
import { Dispatch, SetStateAction, memo } from 'react'

import { lineContext } from '../../contexts/mapContext'
import { EndTip } from './EndTip'
import { Line } from './Line'
import { MAP_HEIGHT, MAP_WIDTH } from '.'

type Props = {
  hoveringLine?: LineCode
  setHoveringLine: Dispatch<SetStateAction<LineCode | undefined>>
}

export const Lines = memo(({ hoveringLine, setHoveringLine }: Props) => (
  <lineContext.Provider
    value={{
      hoveringLine,
      setHoveringLine,
    }}
  >
    <EndTip coord={[250, 500]} line={LineCode.TML} transform="rotate(-90deg)" />
    <EndTip coord={[2430, 270]} line={LineCode.TML} />
    <EndTip coord={[880, 330]} line={LineCode.EAL} />
    <EndTip coord={[950, 270]} line={LineCode.EAL} />
    <EndTip line={LineCode.TWL} coord={[400, 630]} />
    <EndTip
      coord={[1780, 1000]}
      line={LineCode.KTL}
      transform="rotate(-90deg)"
      flip
    />
    <EndTip
      coord={[2600, 1040]}
      line={LineCode.TKL}
      transform="rotate(-90deg)"
    />
    <EndTip coord={[2600, 710]} line={LineCode.TKL} transform="rotate(90deg)" />
    <EndTip coord={[780, 1156]} flip line={LineCode.ISL} />
    <EndTip coord={[930, 1450]} line={LineCode.SIL} />
    <EndTip
      coord={[2500, 1300]}
      line={LineCode.ISL}
      transform="rotate(-90deg)"
    />
    <EndTip coord={[486, 980]} line={LineCode.TCL} transform="rotate(-45deg)" />
    <EndTip
      coord={[730, 970]}
      line={LineCode.DRL}
      flip
      transform="rotate(-90deg)"
    />
    <EndTip
      coord={[582, 770]}
      line={LineCode.AEL}
      flip
      transform="rotate(-45deg)"
    />
    <svg
      width={MAP_WIDTH}
      height={MAP_HEIGHT}
      style={{ position: 'absolute' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* TML */}
      <Line
        d="M 250 500 L 250 240 L 400 240 L 400 530 L 1000 530 L 1000 750 L 1220 970 L 1265 1020 L 1520 1020 L 1665 876 L 1820 876 L 1950 750 L 1950 540 L 1596 540 L 1596 460 L 1820 460 L 1820 270 L 2430 270"
        line={LineCode.TML}
      />
      {/* EAL */}
      <Line d="M 880 330 L 1080 330 L 1080 270" line={LineCode.EAL} />
      <Line
        d="M 1530 270 L 1680 270 L 1680 400 L 1590 400"
        line={LineCode.EAL}
        strokeDasharray="10,10"
      />
      <Line
        d="M 950 270 L 1590 270 L 1590 958 L 1388 1162 1330 1162"
        line={LineCode.EAL}
      />
      {/* TWL */}
      <Line
        d="M 400 630 L 1390 630 L 1390 1150 L 1230 1150"
        line={LineCode.TWL}
      />
      <Line
        d="M 2400 900 L 2240 900 L 2240 630 L 1396 630 L 1396 870 L 1780 870 L 1780 1000"
        line={LineCode.KTL}
      />
      {/* TKL */}
      <Line
        d="M 1860 1150 L 2010 1150 L 2250 906 L 2500 906 L 2600 906 L 2600 710"
        line={LineCode.TKL}
      />
      <Line d="M 2500 906 L 2600 906 L 2600 1040" line={LineCode.TKL} />
      {/* ISL */}
      <Line
        d="M 780 1156 L 2360 1156 L 2500 1156 L 2500 1300"
        line={LineCode.ISL}
      />
      {/* SIL */}
      <Line
        d="M 1330 1168 L 1400 1168 L 1400 1300 L 1400 1350 L 1200 1350 L 1150 1450 L 930 1450"
        line={LineCode.SIL}
      />
      {/* TCL */}
      <Line
        d="M 486 980 L 830 636 L 910 636 L 910 690 L 994 690 L 994 1102 L 1185 1102 L 1185 1102"
        line={LineCode.TCL}
      />
      {/* AEL */}
      <Line
        d="M 582 770 L 472 880 L 522 930 L 650 800 L 690 760 L 727 748 L 828 647 L 900 647 L 900 700 L 983 700 L 983 938 L 988 970 L 988 1108 L 1185 1108"
        line={LineCode.AEL}
      />
      {/* DRL */}
      <Line d="M 645 830 L 730 745 L 730 970" line={LineCode.DRL} />
    </svg>
  </lineContext.Provider>
))
