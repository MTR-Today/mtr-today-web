import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useRef, useState } from 'react'
import bg from '../../assets/system_map.png'
import { Line } from './Line'
import { Line as LineType } from '../../constants/line'
import { Stop } from './Stop'
import { Name } from './Name'
import { Stop as StopType } from '../../constants/stop'
import { Schedule } from './Schedule'
import { lineConfigsContext } from '../../contexts/lineConfigsContext'
import { getLineConfigs } from '../../services/getLineConfigs'
import { ArrowLeft } from './ArrowLeft'
import { ArrowRight } from './ArrowRight'
import { EndTip } from './EndTip'
import { Animation } from './animation'
import { BG } from './BG'

export const Map = () => {
  const [hoveringLine, setHoveringLine] = useState<LineType>()
  const { data: lineConfigs = {} } = useQuery(['line-configs'], () =>
    getLineConfigs()
  )
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    new Animation(ref.current)
  }, [])

  return (
    <lineConfigsContext.Provider
      value={{ lineConfigs, hoveringLine, setHoveringLine }}
    >
      <Water ref={ref} />
      <Wrapper>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <BG />
          <Line
            d="M 250 500 L 250 240 L 400 240 L 400 530 L 1000 530 L 1000 750 L 1220 970 L 1265 1020 L 1520 1020 L 1665 876 L 1820 876 L 1950 750 L 1950 540 L 1596 540 L 1596 460 L 1820 460 L 1820 270 L 2430 270"
            line={LineType.TML}
          />
          <Line d="M 880 330 L 1080 330 L 1080 270" line={LineType.EAL} />
          <Line
            d="M 1530 270 L 1680 270 L 1680 400 L 1590 400"
            line={LineType.EAL}
            stroke-dasharray="10,10"
          />
          <Line
            d="M 950 270 L 1590 270 L 1590 958 L 1388 1162 1330 1162"
            line={LineType.EAL}
          />
          <Line
            d="M 400 630 L 1390 630 L 1390 1150 L 1230 1150"
            line={LineType.TWL}
          />
          <Line
            d="M 2400 900 L 2240 900 L 2240 630 L 1396 630 L 1396 870 L 1780 870 L 1780 1000"
            line={LineType.KTL}
          />
          <Line
            d="M 1860 1150 L 2010 1150 L 2250 906 L 2500 906 L 2600 906 L 2600 710"
            line={LineType.TKL}
          />
          <Line d="M 2500 906 L 2600 906 L 2600 1040" line={LineType.TKL} />
          <Line
            d="M 780 1156 L 2360 1156 L 2500 1156 L 2500 1300"
            line={LineType.ISL}
          />
          <Line
            d="M 1330 1168 L 1400 1168 L 1400 1300 L 1400 1350 L 1200 1350 L 1150 1450 L 930 1450"
            line={LineType.SIL}
          />
          <Line
            d="M 486 980 L 830 636 L 910 636 L 910 690 L 994 690 L 994 1102 L 1185 1102 L 1185 1102"
            line={LineType.TCL}
          />
          <Line
            d="M 582 770 L 472 880 L 522 930 L 650 800 L 690 760 L 727 748 L 828 647 L 900 647 L 900 700 L 983 700 L 983 938 L 988 970 L 988 1108 L 1185 1108"
            line={LineType.AEL}
          />
          <Line d="M 645 830 L 730 745 L 730 970" line={LineType.DRL} />
        </svg>
        {/* TWL */}
        <EndTip line={LineType.TWL} coord={[400, 630]} />
        <Stop stop={StopType.TSW} coord={[450, 630]}>
          <Name bottom="25px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TWL} dir="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.TWH} coord={[550, 630]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TWL} dir="up" disabled bottom="20px" />
          <Schedule line={LineType.TWL} dir="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.KWH} coord={[650, 630]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TWL} dir="up" disabled bottom="20px" />
          <Schedule line={LineType.TWL} dir="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.KWF} coord={[750, 630]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TWL} dir="up" disabled bottom="20px" />
          <Schedule line={LineType.TWL} dir="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.LAK} coord={[855, 633]}>
          <Name bottom="65px" />
          <ArrowRight top="4" left="72px" />
          <ArrowLeft bottom="4" left="72px" />
          <Schedule line={LineType.TCL} dir="up" bottom="40px" />
          <Schedule line={LineType.TWL} dir="up" disabled bottom="20px" />
          <Schedule line={LineType.TWL} dir="down" disabled top="30px" />
          <Schedule line={LineType.TCL} dir="down" top="50px" />
        </Stop>
        <Stop stop={StopType.MEF} coord={[1000, 630]}>
          <Name bottom="45px" left="60px" textAlign="left" />
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <Schedule
            line={LineType.TWL}
            dir="up"
            disabled
            bottom="20px"
            right="35px"
          />
          <Schedule line={LineType.TML} dir="up" bottom="20px" left="35px" />
          <Schedule
            line={LineType.TWL}
            dir="down"
            disabled
            top="20px"
            left="35px"
          />
          <Schedule line={LineType.TML} dir="down" top="20px" right="35px" />
        </Stop>
        <Stop stop={StopType.LCK} coord={[1130, 630]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TWL} dir="up" disabled bottom="20px" />
          <Schedule line={LineType.TWL} dir="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.CSW} coord={[1230, 630]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TWL} dir="up" disabled bottom="20px" />
          <Schedule line={LineType.TWL} dir="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.SSP} coord={[1330, 630]}>
          <Name bottom="45px" />
          <Schedule line={LineType.TWL} dir="up" disabled bottom="20px" />
          <Schedule line={LineType.TWL} dir="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.PRE} coord={[1393, 690]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule
            line={LineType.TWL}
            dir="up"
            disabled
            left="40px"
            top="10px"
          />
          <Schedule
            line={LineType.KTL}
            dir="up"
            disabled
            left="40px"
            bottom="10px"
          />
          <Schedule
            line={LineType.TWL}
            dir="down"
            disabled
            right="40px"
            top="10px"
          />
          <Schedule
            line={LineType.KTL}
            dir="down"
            disabled
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.MOK} coord={[1393, 760]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule
            line={LineType.TWL}
            dir="up"
            disabled
            left="40px"
            top="10px"
          />
          <Schedule
            line={LineType.KTL}
            dir="up"
            disabled
            left="40px"
            bottom="10px"
          />
          <Schedule
            line={LineType.TWL}
            dir="down"
            disabled
            right="40px"
            top="10px"
          />
          <Schedule
            line={LineType.KTL}
            dir="down"
            disabled
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.YMT} coord={[1393, 830]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <Schedule
            line={LineType.TWL}
            dir="up"
            disabled
            left="40px"
            top="10px"
          />
          <Schedule
            line={LineType.KTL}
            dir="up"
            disabled
            left="40px"
            bottom="10px"
          />
          <Schedule
            line={LineType.TWL}
            dir="down"
            disabled
            right="40px"
            top="10px"
          />
          <Schedule
            line={LineType.KTL}
            dir="down"
            disabled
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.JOR} coord={[1390, 900]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TWL} dir="up" disabled left="40px" />
          <Schedule line={LineType.TWL} dir="down" disabled right="40px" />
        </Stop>
        <Stop stop={StopType.TST} coord={[1390, 970]}>
          <Name bottom="6" right="60px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TWL} dir="up" disabled left="40px" />
          <Schedule line={LineType.TWL} dir="down" disabled right="40px" />
        </Stop>
        {/* KTL */}
        <Stop stop={StopType.LAT} coord={[2240, 830]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.KTL} dir="up" disabled right="40px" />
          <Schedule line={LineType.KTL} dir="down" disabled left="40px" />
        </Stop>
        <Stop stop={StopType.KWT} coord={[2240, 760]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.KTL} dir="up" disabled right="40px" />
          <Schedule line={LineType.KTL} dir="down" disabled left="40px" />
        </Stop>
        <Stop stop={StopType.NTK} coord={[2240, 690]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.KTL} dir="up" disabled right="40px" />
          <Schedule line={LineType.KTL} dir="down" disabled left="40px" />
        </Stop>
        <Stop stop={StopType.KOB} coord={[2180, 630]}>
          <Name bottom="45px" />
          <Schedule line={LineType.KTL} dir="up" disabled top="20px" />
          <Schedule line={LineType.KTL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.CHH} coord={[2080, 630]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.KTL} dir="up" disabled top="20px" />
          <Schedule line={LineType.KTL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.DIH} coord={[1950, 630]}>
          <Name bottom="45px" left="60px" textAlign="left" />
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <Schedule
            line={LineType.KTL}
            dir="up"
            disabled
            top="20px"
            left="35px"
          />
          <Schedule
            line={LineType.KTL}
            dir="down"
            disabled
            bottom="20px"
            right="35px"
          />
          <Schedule line={LineType.TML} dir="up" top="20px" right="35px" />
          <Schedule line={LineType.TML} dir="down" bottom="20px" left="35px" />
        </Stop>
        <Stop stop={StopType.WTS} coord={[1820, 630]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.KTL} dir="up" disabled top="20px" />
          <Schedule line={LineType.KTL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.LOF} coord={[1720, 630]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.KTL} dir="up" disabled top="20px" />
          <Schedule line={LineType.KTL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.KOT} coord={[1590, 630]}>
          <Name bottom="45px" left="60px" textAlign="left" />
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <Schedule line={LineType.EAL} dir="up" bottom="20px" left="35px" />
          <Schedule
            line={LineType.KTL}
            dir="up"
            disabled
            top="20px"
            left="35px"
          />
          <Schedule line={LineType.EAL} dir="down" top="20px" right="35px" />
          <Schedule
            line={LineType.KTL}
            dir="down"
            disabled
            bottom="20px"
            right="35px"
          />
        </Stop>
        <Stop stop={StopType.SKM} coord={[1460, 630]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.KTL} dir="down" disabled bottom="20px" />
          <Schedule line={LineType.KTL} dir="up" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.HOM} coord={[1720, 873]}>
          <Name bottom="35px" right="75px" textAlign="right" />
          <ArrowRight top="4" right="12" />
          <ArrowLeft bottom="4" right="12" />
          <Schedule line={LineType.KTL} dir="up" disabled bottom="20px" />
          <Schedule line={LineType.TML} dir="up" bottom="40px" />
          <Schedule line={LineType.KTL} dir="down" disabled top="20px" />
          <Schedule line={LineType.TML} dir="down" top="40px" />
        </Stop>
        <Stop stop={StopType.WHA} coord={[1780, 950]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.KTL} dir="up" disabled left="40px" />
        </Stop>
        <EndTip
          coord={[1780, 1000]}
          line={LineType.KTL}
          transform="rotate(-90deg)"
          flip
        />
        {/* EAL */}
        <EndTip coord={[880, 330]} line={LineType.EAL} />
        <EndTip coord={[950, 270]} line={LineType.EAL} />
        <Stop stop={StopType.LMC} coord={[930, 330]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.EAL} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.LOW} coord={[1000, 270]}>
          <Name bottom="25px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.EAL} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.SHS} coord={[1130, 270]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.EAL} dir="up" bottom="20px" />
          <Schedule line={LineType.EAL} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.FAN} coord={[1230, 270]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.EAL} dir="up" bottom="20px" />
          <Schedule line={LineType.EAL} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.TWO} coord={[1330, 270]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.EAL} dir="up" bottom="20px" />
          <Schedule line={LineType.EAL} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.TAP} coord={[1430, 270]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.EAL} dir="up" bottom="20px" />
          <Schedule line={LineType.EAL} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.UNI} coord={[1530, 270]}>
          <Name bottom="45px" />
          <Schedule line={LineType.EAL} dir="up" bottom="20px" />
          <Schedule line={LineType.EAL} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.RAC} coord={[1680, 360]}>
          <Name bottom="6" left="70px" textAlign="left" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.EAL} dir="up" left="40px" />
          <Schedule line={LineType.EAL} dir="down" right="40px" />
        </Stop>
        <Stop stop={StopType.FOT} coord={[1590, 330]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.EAL} dir="up" left="40px" />
          <Schedule line={LineType.EAL} dir="down" right="40px" />
        </Stop>
        <Stop stop={StopType.SHT} coord={[1590, 430]}>
          <Name right="120px" textAlign="right" />
          <Schedule line={LineType.EAL} dir="up" left="40px" />
          <Schedule line={LineType.EAL} dir="down" right="40px" />
        </Stop>
        <Stop stop={StopType.TAW} coord={[1593, 500]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight bottom="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="6" left="4" transform="rotate(90deg)" />
          <ArrowRight top="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="6" left="4" transform="rotate(90deg)" />
          <Schedule line={LineType.TML} dir="up" bottom="10px" right="40px" />
          <Schedule line={LineType.EAL} dir="up" top="10px" left="40px" />
          <Schedule line={LineType.TML} dir="down" bottom="10px" left="40px" />
          <Schedule line={LineType.EAL} dir="down" top="10px" right="40px" />
        </Stop>
        <Stop stop={StopType.MKK} coord={[1590, 760]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight top="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="6" left="4" transform="rotate(90deg)" />
          <Schedule line={LineType.EAL} dir="up" left="40px" />
          <Schedule line={LineType.EAL} dir="down" right="40px" />
        </Stop>
        {/* TML */}
        <EndTip
          coord={[250, 500]}
          line={LineType.TML}
          transform="rotate(-90deg)"
        />
        <Stop stop={StopType.TUM} coord={[250, 450]}>
          <Name right="60px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TML} dir="down" left="40px" />
        </Stop>
        <Stop stop={StopType.SIH} coord={[250, 380]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TML} dir="up" right="40px" />
          <Schedule line={LineType.TML} dir="down" left="40px" />
        </Stop>
        <Stop stop={StopType.TIS} coord={[325, 240]}>
          <Name bottom="45px" />
          <ArrowRight top="4" right="12" />
          <ArrowLeft bottom="4" right="12" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" />
          <Schedule line={LineType.TML} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.LOP} coord={[400, 310]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TML} dir="up" left="40px" />
          <Schedule line={LineType.TML} dir="down" right="40px" />
        </Stop>
        <Stop stop={StopType.YUL} coord={[400, 380]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TML} dir="up" left="40px" />
          <Schedule line={LineType.TML} dir="down" right="40px" />
        </Stop>
        <Stop stop={StopType.KSR} coord={[400, 450]}>
          <Name left="130px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TML} dir="up" left="40px" />
          <Schedule line={LineType.TML} dir="down" right="40px" />
        </Stop>
        <Stop stop={StopType.TWW} coord={[470, 530]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" />
          <Schedule line={LineType.TML} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.NAC} coord={[997, 730]}>
          <Name left="120px" textAlign="left" />
          <Schedule line={LineType.TML} dir="up" left="40px" bottom="10px" />
          <Schedule line={LineType.TCL} dir="up" left="40px" top="10px" />
          <Schedule line={LineType.TCL} dir="down" right="50px" top="10px" />
          <Schedule line={LineType.TML} dir="down" right="50px" bottom="10px" />
        </Stop>
        <Stop stop={StopType.AUS} coord={[1220, 970]}>
          <Name right="120px" top="2" textAlign="right" />
          <ArrowRight bottom="4" right="30px" transform="rotate(45deg)" />
          <ArrowLeft bottom="8" right="14px" transform="rotate(45deg)" />
          <Schedule line={LineType.TML} dir="up" left="40px" bottom="2" />
          <Schedule line={LineType.TML} dir="down" right="40px" top="2" />
        </Stop>
        <Stop stop={StopType.ETS} coord={[1455, 1020]}>
          <Name top="25px" right="90px" textAlign="right" />
          <ArrowRight top="4" left="10" />
          <ArrowLeft bottom="4" left="10" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" />
          <Schedule line={LineType.TML} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.HUH} coord={[1560, 984]}>
          <Name top="30px" left="110px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineType.EAL} dir="up" top="40px" left="30px" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" right="30px" />
          <Schedule line={LineType.EAL} dir="down" bottom="40px" right="30px" />
          <Schedule line={LineType.TML} dir="down" top="20px" left="30px" />
        </Stop>
        <Stop stop={StopType.EXC} coord={[1455, 1095]}>
          <Name top="8px" left="125px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineType.EAL} dir="up" top="15px" left="35px" />
          <Schedule line={LineType.EAL} dir="down" bottom="15px" right="35px" />
        </Stop>
        <Stop stop={StopType.TKW} coord={[1850, 850]}>
          <Name top="45px" left="65px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" right="30px" />
          <Schedule line={LineType.TML} dir="down" top="20px" left="30px" />
        </Stop>
        <Stop stop={StopType.SUW} coord={[1910, 790]}>
          <Name top="45px" left="65px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" right="30px" />
          <Schedule line={LineType.TML} dir="down" top="20px" left="30px" />
        </Stop>
        <Stop stop={StopType.KAT} coord={[1950, 700]}>
          <Name left="120px" textAlign="left" />
          <Schedule line={LineType.TML} dir="up" right="40px" />
          <Schedule line={LineType.TML} dir="down" left="40px" />
        </Stop>
        <Stop stop={StopType.HIK} coord={[1820, 540]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TML} dir="up" top="20px" />
          <Schedule line={LineType.TML} dir="down" bottom="20px" />
        </Stop>
        <Stop stop={StopType.CKT} coord={[1820, 430]}>
          <Name left="130px" textAlign="left" />
          <Schedule line={LineType.TML} dir="up" right="40px" />
          <Schedule line={LineType.TML} dir="down" left="40px" />
        </Stop>
        <Stop stop={StopType.STW} coord={[1820, 360]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TML} dir="up" right="40px" />
          <Schedule line={LineType.TML} dir="down" left="40px" />
        </Stop>
        <Stop stop={StopType.CIO} coord={[1880, 270]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" />
          <Schedule line={LineType.TML} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.SHM} coord={[1980, 270]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" />
          <Schedule line={LineType.TML} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.TSH} coord={[2080, 270]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" />
          <Schedule line={LineType.TML} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.HEO} coord={[2180, 270]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" />
          <Schedule line={LineType.TML} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.MOS} coord={[2280, 270]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" />
          <Schedule line={LineType.TML} dir="down" top="20px" />
        </Stop>
        <Stop stop={StopType.WKS} coord={[2380, 270]}>
          <Name bottom="45px" />
          <Schedule line={LineType.TML} dir="up" bottom="20px" />
        </Stop>
        <EndTip coord={[2430, 270]} line={LineType.TML} />
        {/* ISL */}
        <EndTip coord={[780, 1156]} flip line={LineType.ISL} />
        <Stop stop={StopType.KET} coord={[830, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.HKU} coord={[930, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.SYP} coord={[1030, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.SHW} coord={[1130, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.CEN} coord={[1230, 1153]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TWL} dir="up" disabled top="40px" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.ADM} coord={[1330, 1159]}>
          <Name top="105px" />
          <Schedule line={LineType.TWL} dir="up" disabled top="60px" />
          <Schedule line={LineType.EAL} dir="up" top="40px" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
          <Schedule line={LineType.TWL} dir="down" disabled bottom="40px" />
          <Schedule line={LineType.SIL} dir="down" disabled top="80px" />
        </Stop>
        <Stop stop={StopType.WAC} coord={[1460, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.CAB} coord={[1560, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.TIH} coord={[1660, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.FOH} coord={[1760, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.NOP} coord={[1860, 1153]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TKL} dir="up" top="40px" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.QUB} coord={[1980, 1153]}>
          <Name top="65px" />
          <ArrowRight top="4" left="60px" />
          <ArrowLeft bottom="4" left="60px" />
          <Schedule line={LineType.TKL} dir="up" top="40px" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
          <Schedule line={LineType.TKL} dir="down" bottom="40px" />
        </Stop>
        <Stop stop={StopType.TAK} coord={[2100, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.SWH} coord={[2200, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.SKW} coord={[2300, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.HFC} coord={[2400, 1156]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.ISL} dir="up" disabled top="20px" />
          <Schedule line={LineType.ISL} dir="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.CHW} coord={[2500, 1250]}>
          <Name right="60px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.ISL} dir="down" left="40px" />
        </Stop>
        <EndTip
          coord={[2500, 1300]}
          line={LineType.ISL}
          transform="rotate(-90deg)"
        />
        {/* TKL */}
        <Stop stop={StopType.YAT} coord={[2300, 903]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TKL} dir="up" top="20px" />
          <Schedule line={LineType.KTL} dir="up" disabled top="40px" />
          <Schedule line={LineType.KTL} dir="down" disabled bottom="40px" />
          <Schedule line={LineType.TKL} dir="down" bottom="20px" />
        </Stop>
        <Stop stop={StopType.TIK} coord={[2400, 903]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TKL} dir="up" top="20px" />
          <Schedule line={LineType.KTL} dir="down" disabled bottom="40px" />
          <Schedule line={LineType.TKL} dir="down" bottom="20px" />
        </Stop>
        <Stop stop={StopType.TKO} coord={[2500, 906]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.TKL} dir="up" top="20px" />
          <Schedule line={LineType.TKL} dir="down" bottom="20px" />
        </Stop>
        <Stop stop={StopType.HAH} coord={[2600, 830]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TKL} dir="up" left="40px" />
          <Schedule line={LineType.TKL} dir="down" right="40px" />
        </Stop>
        <Stop stop={StopType.POA} coord={[2600, 760]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TKL} dir="down" right="40px" />
        </Stop>
        <Stop stop={StopType.LHP} coord={[2600, 990]}>
          <Name right="60px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TKL} dir="down" left="40px" />
        </Stop>
        <EndTip
          coord={[2600, 1040]}
          line={LineType.TKL}
          transform="rotate(-90deg)"
        />
        <EndTip
          coord={[2600, 710]}
          line={LineType.TKL}
          transform="rotate(90deg)"
        />
        {/* TCL */}
        <EndTip
          coord={[486, 980]}
          line={LineType.TCL}
          transform="rotate(-45deg)"
        />
        <Stop stop={StopType.TUC} coord={[526, 940]}>
          <Name bottom="5px" left="80px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="10" left="10px" transform="rotate(-45deg)" />
          <Schedule line={LineType.TCL} dir="down" top="20px" left="30px" />
        </Stop>
        <Stop stop={StopType.SUN} coord={[642, 830]}>
          <Name bottom="5px" left="80px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="10" right="4px" transform="rotate(-45deg)" />
          <Schedule line={LineType.DRL} dir="up" bottom="30px" right="48px" />
          <Schedule line={LineType.TCL} dir="up" bottom="10px" right="48px" />
          <Schedule line={LineType.TCL} dir="down" top="20px" left="30px" />
          <Schedule line={LineType.DRL} dir="down" top="40px" left="30px" />
        </Stop>
        <Stop stop={StopType.TSY} coord={[752, 720]}>
          <Name bottom="5px" left="80px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineType.AEL} dir="up" bottom="40px" right="30px" />
          <Schedule line={LineType.TCL} dir="up" bottom="20px" right="30px" />
          <Schedule line={LineType.TCL} dir="down" top="20px" left="30px" />
          <Schedule line={LineType.AEL} dir="down" top="40px" left="30px" />
        </Stop>
        <Stop stop={StopType.OLY} coord={[994, 870]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="6" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.TCL} dir="up" left="40px" />
          <Schedule line={LineType.TCL} dir="down" right="45px" />
        </Stop>
        <Stop stop={StopType.KOW} coord={[991, 970]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.AEL} dir="up" left="40px" top="10px" />
          <Schedule line={LineType.TCL} dir="up" left="40px" bottom="10px" />
          <Schedule line={LineType.AEL} dir="down" right="40px" top="10px" />
          <Schedule line={LineType.TCL} dir="down" right="40px" bottom="10px" />
        </Stop>
        <Stop stop={StopType.HOK} coord={[1185, 1105]}>
          <Name left="60px" textAlign="left" />
          <Schedule line={LineType.TCL} dir="up" bottom="20px" />
          <Schedule line={LineType.AEL} dir="up" bottom="40px" />
        </Stop>
        {/* AEL */}
        <EndTip
          coord={[582, 770]}
          line={LineType.AEL}
          flip
          transform="rotate(-45deg)"
        />
        <Stop stop={StopType.AWE} coord={[542, 810]}>
          <Name bottom="10px" right="110px" textAlign="right" />
          <Schedule line={LineType.AEL} dir="down" bottom="20px" right="30px" />
        </Stop>
        <Stop stop={StopType.AIR} coord={[492, 860]}>
          <Name top="5px" right="80px" textAlign="right" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineType.AEL} dir="down" bottom="20px" right="30px" />
          <Schedule line={LineType.AEL} dir="up" top="20px" left="30px" />
        </Stop>
        {/* SIL */}
        <Stop stop={StopType.OCP} coord={[1400, 1290]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight bottom="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="6" left="4" transform="rotate(90deg)" />
          <Schedule line={LineType.SIL} disabled dir="up" right="40px" />
          <Schedule line={LineType.SIL} disabled dir="down" left="40px" />
        </Stop>
        <Stop stop={StopType.WCH} coord={[1250, 1350]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.SIL} dir="down" disabled top="20px" />
          <Schedule line={LineType.SIL} dir="up" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.LET} coord={[1080, 1450]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.SIL} dir="down" disabled top="20px" />
          <Schedule line={LineType.SIL} dir="up" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.SOH} coord={[980, 1450]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineType.SIL} dir="down" disabled top="20px" />
          <Schedule line={LineType.SIL} dir="up" disabled bottom="20px" />
        </Stop>
        <EndTip coord={[930, 1450]} line={LineType.SIL} />
        {/* DRL */}
        <Stop stop={StopType.DIS} coord={[730, 920]}>
          <Name left="80px" bottom="20px" textAlign="left" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineType.DRL} dir="up" left="40px" />
          <Schedule line={LineType.DRL} dir="down" right="45px" />
        </Stop>
        <EndTip
          coord={[730, 970]}
          line={LineType.DRL}
          flip
          transform="rotate(-90deg)"
        />
      </Wrapper>
    </lineConfigsContext.Provider>
  )
}

const Wrapper = styled.div`
  width: 2800px;
  height: 1630px;
  position: relative;
  /* background-repeat: no-repeat;
  background-size: 2430px;
  background-position: right 250px top 80px;
  background-image: url(${bg}); */
`

const Water = styled.canvas`
  width: 2800px;
  height: 1630px;
  position: absolute;
  opacity: 0.1;
`
