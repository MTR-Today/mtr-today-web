import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import bg from '../../assets/system_map.png'
import { Line } from '../../constants/line'
import { Stop } from './Stop'
import { Name } from './Name'
import { Stop as StopType } from '../../constants/stop'
import { Schedule } from './Schedule'
import { lineConfigsContext } from '../../contexts/lineConfigsContext'
import { getLineConfigs } from '../../services/getLineConfigs'
import { ArrowLeft } from './ArrowLeft'
import { ArrowRight } from './ArrowRight'
import { EndTip } from './EndTip'
import { roundCorners } from 'svg-round-corners'

const lineProps = {
  fill: 'none',
  'stroke-linejoin': 'round',
  strokeWidth: '6px',
}

export const Map = () => {
  const { data: lineConfigs } = useQuery(['line-configs'], () =>
    getLineConfigs()
  )

  return (
    <lineConfigsContext.Provider value={lineConfigs || {}}>
      <Wrapper>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            d={
              roundCorners(
                'M 250 500 L 250 240 L 400 240 L 400 530 L 1000 530 L 1000 750 L 1220 970 L 1265 1020 L 1520 1020 L 1665 876 L 1820 876 L 1950 750 L 1950 540 L 1596 540 L 1596 460 L 1820 460 L 1820 270 L 2430 270',
                20
              ).path
            }
            stroke={lineConfigs?.[Line.TML]?.color}
            {...lineProps}
          />
          <path
            d={roundCorners('M 880 330 L 1080 330 L 1080 270', 20).path}
            stroke={lineConfigs?.[Line.EAL]?.color}
            {...lineProps}
          />
          <path
            d={
              roundCorners('M 1530 270 L 1680 270 L 1680 400 L 1590 400', 20)
                .path
            }
            stroke={lineConfigs?.[Line.EAL]?.color}
            stroke-dasharray="10,10"
            {...lineProps}
          />
          <path
            d={
              roundCorners(
                'M 950 270 L 1590 270 L 1590 958 L 1388 1162 1330 1162',
                20
              ).path
            }
            stroke={lineConfigs?.[Line.EAL]?.color}
            {...lineProps}
          />
          <path
            d={
              roundCorners('M 400 630 L 1390 630 L 1390 1150 L 1230 1150', 20)
                .path
            }
            stroke={lineConfigs?.[Line.TWL]?.color}
            {...lineProps}
          />
          <path
            d={
              roundCorners(
                'M 2400 900 L 2240 900 L 2240 630 L 1396 630 L 1396 870 L 1780 870 L 1780 1000',
                20
              ).path
            }
            stroke={lineConfigs?.[Line.KTL]?.color}
            {...lineProps}
          />
          <path
            d={
              roundCorners(
                'M 1860 1150 L 2010 1150 L 2250 906 L 2500 906 L 2600 906 L 2600 710',
                20
              ).path
            }
            stroke={lineConfigs?.[Line.TKL]?.color}
            {...lineProps}
          />
          <path
            d={roundCorners('M 2500 906 L 2600 906 L 2600 1040', 20).path}
            stroke={lineConfigs?.[Line.TKL]?.color}
            {...lineProps}
          />
          <path
            d={
              roundCorners('M 780 1156 L 2360 1156 L 2500 1156 L 2500 1300', 20)
                .path
            }
            stroke={lineConfigs?.[Line.ISL]?.color}
            {...lineProps}
          />
          <path
            d={roundCorners('M 1330 1168 L 1400 1168 L 1400 1300', 20).path}
            stroke={lineConfigs?.[Line.SIL]?.color}
            {...lineProps}
          />
          <path
            d={
              roundCorners(
                'M 526 940 L 830 636 L 910 636 L 910 690 L 994 690 L 994 1102 L 1185 1102 L 1185 1102',
                20
              ).path
            }
            stroke={lineConfigs?.[Line.TCL]?.color}
            {...lineProps}
          />
          <path
            d={
              roundCorners(
                'M 542 810 L 472 880 L 522 930 L 650 800 L 690 760 L 727 748 L 828 647 L 900 647 L 900 700 L 983 700 L 983 938 L 988 970 L 988 1108 L 1185 1108',
                20
              ).path
            }
            stroke={lineConfigs?.[Line.AEL]?.color}
            {...lineProps}
          />
        </svg>
        {/* TWL */}
        <EndTip coord={[630, 400]} line={Line.TWL} />
        <Stop stop={StopType.TSW} coord={[630, 450]}>
          <Name bottom="25px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.TWH} coord={[630, 550]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <Schedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.KWH} coord={[630, 650]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <Schedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.KWF} coord={[630, 750]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <Schedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.LAK} coord={[633, 855]}>
          <Name bottom="65px" />
          <ArrowRight top="4" left="72px" />
          <ArrowLeft bottom="4" left="72px" />
          <Schedule line={Line.TCL} direction="up" bottom="40px" />
          <Schedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <Schedule line={Line.TWL} direction="down" disabled top="30px" />
          <Schedule line={Line.TCL} direction="down" top="50px" />
        </Stop>
        <Stop stop={StopType.MEF} coord={[630, 1000]}>
          <Name bottom="45px" left="60px" textAlign="left" />
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <Schedule
            line={Line.TWL}
            direction="up"
            disabled
            bottom="20px"
            right="35px"
          />
          <Schedule line={Line.TML} direction="up" bottom="20px" left="35px" />
          <Schedule
            line={Line.TWL}
            direction="down"
            disabled
            top="20px"
            left="35px"
          />
          <Schedule line={Line.TML} direction="down" top="20px" right="35px" />
        </Stop>
        <Stop stop={StopType.LCK} coord={[630, 1130]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <Schedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.CSW} coord={[630, 1230]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <Schedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.SSP} coord={[630, 1330]}>
          <Name bottom="45px" />
          <Schedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <Schedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.PRE} coord={[690, 1393]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule
            line={Line.TWL}
            direction="up"
            disabled
            left="40px"
            top="10px"
          />
          <Schedule
            line={Line.KTL}
            direction="up"
            disabled
            left="40px"
            bottom="10px"
          />
          <Schedule
            line={Line.TWL}
            direction="down"
            disabled
            right="40px"
            top="10px"
          />
          <Schedule
            line={Line.KTL}
            direction="down"
            disabled
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.MOK} coord={[760, 1393]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule
            line={Line.TWL}
            direction="up"
            disabled
            left="40px"
            top="10px"
          />
          <Schedule
            line={Line.KTL}
            direction="up"
            disabled
            left="40px"
            bottom="10px"
          />
          <Schedule
            line={Line.TWL}
            direction="down"
            disabled
            right="40px"
            top="10px"
          />
          <Schedule
            line={Line.KTL}
            direction="down"
            disabled
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.YMT} coord={[830, 1393]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <Schedule
            line={Line.TWL}
            direction="up"
            disabled
            left="40px"
            top="10px"
          />
          <Schedule
            line={Line.KTL}
            direction="up"
            disabled
            left="40px"
            bottom="10px"
          />
          <Schedule
            line={Line.TWL}
            direction="down"
            disabled
            right="40px"
            top="10px"
          />
          <Schedule
            line={Line.KTL}
            direction="down"
            disabled
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.JOR} coord={[900, 1390]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TWL} direction="up" disabled left="40px" />
          <Schedule line={Line.TWL} direction="down" disabled right="40px" />
        </Stop>
        <Stop stop={StopType.TST} coord={[970, 1390]}>
          <Name bottom="6" right="60px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TWL} direction="up" disabled left="40px" />
          <Schedule line={Line.TWL} direction="down" disabled right="40px" />
        </Stop>
        {/* KTL */}
        <Stop stop={StopType.LAT} coord={[830, 2240]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.KTL} direction="up" disabled right="40px" />
          <Schedule line={Line.KTL} direction="down" disabled left="40px" />
        </Stop>
        <Stop stop={StopType.KWT} coord={[760, 2240]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.KTL} direction="up" disabled right="40px" />
          <Schedule line={Line.KTL} direction="down" disabled left="40px" />
        </Stop>
        <Stop stop={StopType.NTK} coord={[690, 2240]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.KTL} direction="up" disabled right="40px" />
          <Schedule line={Line.KTL} direction="down" disabled left="40px" />
        </Stop>
        <Stop stop={StopType.KOB} coord={[630, 2180]}>
          <Name bottom="45px" />
          <Schedule line={Line.KTL} direction="up" disabled top="20px" />
          <Schedule line={Line.KTL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.CHH} coord={[630, 2080]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.KTL} direction="up" disabled top="20px" />
          <Schedule line={Line.KTL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.DIH} coord={[630, 1950]}>
          <Name bottom="45px" left="60px" textAlign="left" />
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <Schedule
            line={Line.KTL}
            direction="up"
            disabled
            top="20px"
            left="35px"
          />
          <Schedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
            right="35px"
          />
          <Schedule line={Line.TML} direction="up" top="20px" right="35px" />
          <Schedule
            line={Line.TML}
            direction="down"
            bottom="20px"
            left="35px"
          />
        </Stop>
        <Stop stop={StopType.WTS} coord={[630, 1820]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.KTL} direction="up" disabled top="20px" />
          <Schedule line={Line.KTL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.LOF} coord={[630, 1720]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.KTL} direction="up" disabled top="20px" />
          <Schedule line={Line.KTL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.KOT} coord={[630, 1590]}>
          <Name bottom="45px" left="60px" textAlign="left" />
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <Schedule line={Line.EAL} direction="up" bottom="20px" left="35px" />
          <Schedule
            line={Line.KTL}
            direction="up"
            disabled
            top="20px"
            left="35px"
          />
          <Schedule line={Line.EAL} direction="down" top="20px" right="35px" />
          <Schedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
            right="35px"
          />
        </Stop>
        <Stop stop={StopType.SKM} coord={[630, 1460]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.KTL} direction="down" disabled bottom="20px" />
          <Schedule line={Line.KTL} direction="up" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.HOM} coord={[873, 1720]}>
          <Name bottom="35px" right="75px" textAlign="right" />
          <ArrowRight top="4" right="12" />
          <ArrowLeft bottom="4" right="12" />
          <Schedule line={Line.KTL} direction="up" disabled bottom="20px" />
          <Schedule line={Line.TML} direction="up" bottom="40px" />
          <Schedule line={Line.KTL} direction="down" disabled top="20px" />
          <Schedule line={Line.TML} direction="down" top="40px" />
        </Stop>
        <Stop stop={StopType.WHA} coord={[950, 1780]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.KTL} direction="up" disabled left="40px" />
        </Stop>
        <EndTip
          coord={[1000, 1780]}
          line={Line.KTL}
          transform="rotate(-90deg)"
          flip
        />
        {/* EAL */}
        <EndTip coord={[330, 880]} line={Line.EAL} />
        <EndTip coord={[270, 950]} line={Line.EAL} />
        <Stop stop={StopType.LMC} coord={[330, 930]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.LOW} coord={[270, 1000]}>
          <Name bottom="25px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.SHS} coord={[270, 1130]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.EAL} direction="up" bottom="20px" />
          <Schedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.FAN} coord={[270, 1230]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.EAL} direction="up" bottom="20px" />
          <Schedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.TWO} coord={[270, 1330]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.EAL} direction="up" bottom="20px" />
          <Schedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.TAP} coord={[270, 1430]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.EAL} direction="up" bottom="20px" />
          <Schedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.UNI} coord={[270, 1530]}>
          <Name bottom="45px" />
          <Schedule line={Line.EAL} direction="up" bottom="20px" />
          <Schedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.RAC} coord={[360, 1680]}>
          <Name bottom="6" left="70px" textAlign="left" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.EAL} direction="up" left="40px" />
          <Schedule line={Line.EAL} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.FOT} coord={[330, 1590]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.EAL} direction="up" left="40px" />
          <Schedule line={Line.EAL} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.SHT} coord={[430, 1590]}>
          <Name right="120px" textAlign="right" />
          <Schedule line={Line.EAL} direction="up" left="40px" />
          <Schedule line={Line.EAL} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.TAW} coord={[500, 1593]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight bottom="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="6" left="4" transform="rotate(90deg)" />
          <ArrowRight top="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="6" left="4" transform="rotate(90deg)" />
          <Schedule line={Line.TML} direction="up" bottom="10px" right="40px" />
          <Schedule line={Line.EAL} direction="up" top="10px" left="40px" />
          <Schedule
            line={Line.TML}
            direction="down"
            bottom="10px"
            left="40px"
          />
          <Schedule line={Line.EAL} direction="down" top="10px" right="40px" />
        </Stop>
        <Stop stop={StopType.MKK} coord={[760, 1590]}>
          <Name left="120px" textAlign="left" />
          <Schedule line={Line.EAL} direction="up" left="40px" />
          <Schedule line={Line.EAL} direction="down" right="40px" />
        </Stop>
        {/* TML */}
        <EndTip coord={[500, 250]} line={Line.TML} transform="rotate(-90deg)" />
        <Stop stop={StopType.TUM} coord={[450, 250]}>
          <Name right="60px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.SIH} coord={[380, 250]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TML} direction="up" right="40px" />
          <Schedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.TIS} coord={[240, 325]}>
          <Name bottom="45px" />
          <ArrowRight top="4" right="12" />
          <ArrowLeft bottom="4" right="12" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TML} direction="up" bottom="20px" />
          <Schedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.LOP} coord={[310, 400]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TML} direction="up" left="40px" />
          <Schedule line={Line.TML} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.YUL} coord={[380, 400]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TML} direction="up" left="40px" />
          <Schedule line={Line.TML} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.KSR} coord={[450, 400]}>
          <Name left="130px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TML} direction="up" left="40px" />
          <Schedule line={Line.TML} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.TWW} coord={[530, 470]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TML} direction="up" bottom="20px" />
          <Schedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.NAC} coord={[730, 997]}>
          <Name left="120px" textAlign="left" />
          <Schedule line={Line.TML} direction="up" left="40px" bottom="10px" />
          <Schedule line={Line.TCL} direction="up" left="40px" top="10px" />
          <Schedule line={Line.TCL} direction="down" right="50px" top="10px" />
          <Schedule
            line={Line.TML}
            direction="down"
            right="50px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.AUS} coord={[970, 1220]}>
          <Name right="120px" top="2" textAlign="right" />
          <ArrowRight bottom="4" right="30px" transform="rotate(45deg)" />
          <ArrowLeft bottom="8" right="14px" transform="rotate(45deg)" />
          <Schedule line={Line.TML} direction="up" left="40px" bottom="2" />
          <Schedule line={Line.TML} direction="down" right="40px" top="2" />
        </Stop>
        <Stop stop={StopType.ETS} coord={[1020, 1455]}>
          <Name top="25px" right="90px" textAlign="right" />
          <ArrowRight top="4" left="10" />
          <ArrowLeft bottom="4" left="10" />
          <Schedule line={Line.TML} direction="up" bottom="20px" />
          <Schedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.HUH} coord={[984, 1560]}>
          <Name top="30px" left="110px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={Line.EAL} direction="up" top="40px" left="30px" />
          <Schedule line={Line.TML} direction="up" bottom="20px" right="30px" />
          <Schedule
            line={Line.EAL}
            direction="down"
            bottom="40px"
            right="30px"
          />
          <Schedule line={Line.TML} direction="down" top="20px" left="30px" />
        </Stop>
        <Stop stop={StopType.EXC} coord={[1095, 1455]}>
          <Name top="8px" left="125px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={Line.EAL} direction="up" top="15px" left="35px" />
          <Schedule
            line={Line.EAL}
            direction="down"
            bottom="15px"
            right="35px"
          />
        </Stop>
        <Stop stop={StopType.TKW} coord={[850, 1850]}>
          <Name top="45px" left="65px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={Line.TML} direction="up" bottom="20px" right="30px" />
          <Schedule line={Line.TML} direction="down" top="20px" left="30px" />
        </Stop>
        <Stop stop={StopType.SUW} coord={[790, 1910]}>
          <Name top="45px" left="65px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={Line.TML} direction="up" bottom="20px" right="30px" />
          <Schedule line={Line.TML} direction="down" top="20px" left="30px" />
        </Stop>
        <Stop stop={StopType.KAT} coord={[700, 1950]}>
          <Name left="120px" textAlign="left" />
          <Schedule line={Line.TML} direction="up" right="40px" />
          <Schedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.HIK} coord={[540, 1820]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TML} direction="up" top="20px" />
          <Schedule line={Line.TML} direction="down" bottom="20px" />
        </Stop>
        <Stop stop={StopType.CKT} coord={[430, 1820]}>
          <Name left="130px" textAlign="left" />
          <Schedule line={Line.TML} direction="up" right="40px" />
          <Schedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.STW} coord={[360, 1820]}>
          <Name left="120px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TML} direction="up" right="40px" />
          <Schedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.CIO} coord={[270, 1880]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TML} direction="up" bottom="20px" />
          <Schedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.SHM} coord={[270, 1980]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TML} direction="up" bottom="20px" />
          <Schedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.TSH} coord={[270, 2080]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TML} direction="up" bottom="20px" />
          <Schedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.HEO} coord={[270, 2180]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TML} direction="up" bottom="20px" />
          <Schedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.MOS} coord={[270, 2280]}>
          <Name bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TML} direction="up" bottom="20px" />
          <Schedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.WKS} coord={[270, 2380]}>
          <Name bottom="45px" />
          <Schedule line={Line.TML} direction="up" bottom="20px" />
        </Stop>
        <EndTip coord={[270, 2430]} line={Line.TML} />
        {/* ISL */}
        <EndTip coord={[1156, 780]} flip line={Line.ISL} />
        <Stop stop={StopType.KET} coord={[1153, 830]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.HKU} coord={[1156, 930]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.SYP} coord={[1156, 1030]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.SHW} coord={[1156, 1130]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.CEN} coord={[1153, 1230]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TWL} direction="up" disabled top="40px" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.ADM} coord={[1156, 1330]}>
          <Name top="85px" />
          <Schedule line={Line.TWL} direction="up" disabled top="60px" />
          <Schedule line={Line.EAL} direction="up" top="40px" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
          <Schedule line={Line.TWL} direction="down" disabled bottom="40px" />
        </Stop>
        <Stop stop={StopType.WAC} coord={[1156, 1460]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.CAB} coord={[1156, 1560]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.TIH} coord={[1156, 1660]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.FOH} coord={[1156, 1760]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.NOP} coord={[1153, 1860]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TKL} direction="up" top="40px" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.QUB} coord={[1153, 1980]}>
          <Name top="65px" />
          <ArrowRight top="4" left="60px" />
          <ArrowLeft bottom="4" left="60px" />
          <Schedule line={Line.TKL} direction="up" top="40px" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
          <Schedule line={Line.TKL} direction="down" bottom="40px" />
        </Stop>
        <Stop stop={StopType.TAK} coord={[1156, 2100]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.SWH} coord={[1156, 2200]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.SKW} coord={[1156, 2300]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.HFC} coord={[1156, 2400]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.ISL} direction="up" disabled top="20px" />
          <Schedule line={Line.ISL} direction="down" disabled bottom="20px" />
        </Stop>
        <Stop stop={StopType.CHW} coord={[1250, 2500]}>
          <Name right="60px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.ISL} direction="down" left="40px" />
        </Stop>
        <EndTip
          coord={[1300, 2500]}
          line={Line.ISL}
          transform="rotate(-90deg)"
        />
        {/* TKL */}
        <Stop stop={StopType.YAT} coord={[903, 2300]}>
          <Name top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TKL} direction="up" top="20px" />
          <Schedule line={Line.KTL} direction="up" disabled top="40px" />
          <Schedule line={Line.KTL} direction="down" disabled bottom="40px" />
          <Schedule line={Line.TKL} direction="down" bottom="20px" />
        </Stop>
        <Stop stop={StopType.TIK} coord={[903, 2400]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TKL} direction="up" top="20px" />
          <Schedule line={Line.KTL} direction="down" disabled bottom="40px" />
          <Schedule line={Line.TKL} direction="down" bottom="20px" />
        </Stop>
        <Stop stop={StopType.TKO} coord={[906, 2500]}>
          <Name top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={Line.TKL} direction="up" top="20px" />
          <Schedule line={Line.TKL} direction="down" bottom="20px" />
        </Stop>
        <Stop stop={StopType.HAH} coord={[830, 2600]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TKL} direction="up" left="40px" />
          <Schedule line={Line.TKL} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.POA} coord={[760, 2600]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TKL} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.LHP} coord={[990, 2600]}>
          <Name right="60px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TKL} direction="down" left="40px" />
        </Stop>
        <EndTip
          coord={[1040, 2600]}
          line={Line.TKL}
          transform="rotate(-90deg)"
        />
        <EndTip coord={[710, 2600]} line={Line.TKL} transform="rotate(90deg)" />
        {/* TCL */}
        <Stop stop={StopType.TUC} coord={[940, 526]}>
          <Name bottom="5px" left="80px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="10" left="10px" transform="rotate(-45deg)" />
          <Schedule line={Line.TCL} direction="down" top="20px" left="30px" />
        </Stop>
        <Stop stop={StopType.SUN} coord={[830, 642]}>
          <Name bottom="5px" left="80px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="10" right="4px" transform="rotate(-45deg)" />
          <Schedule line={Line.DRL} direction="up" bottom="40px" right="40px" />
          <Schedule line={Line.TCL} direction="up" bottom="20px" right="40px" />
          <Schedule line={Line.TCL} direction="down" top="20px" left="30px" />
          <Schedule line={Line.DRL} direction="down" top="40px" left="30px" />
        </Stop>
        <Stop stop={StopType.TSY} coord={[720, 752]}>
          <Name bottom="5px" left="80px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={Line.AEL} direction="up" bottom="40px" right="30px" />
          <Schedule line={Line.TCL} direction="up" bottom="20px" right="30px" />
          <Schedule line={Line.TCL} direction="down" top="20px" left="30px" />
          <Schedule line={Line.AEL} direction="down" top="40px" left="30px" />
        </Stop>
        <Stop stop={StopType.OLY} coord={[870, 994]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="6" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.TCL} direction="up" left="40px" />
          <Schedule line={Line.TCL} direction="down" right="45px" />
        </Stop>
        <Stop stop={StopType.KOW} coord={[970, 991]}>
          <Name right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={Line.AEL} direction="up" left="40px" top="10px" />
          <Schedule line={Line.TCL} direction="up" left="40px" bottom="10px" />
          <Schedule line={Line.AEL} direction="down" right="40px" top="10px" />
          <Schedule
            line={Line.TCL}
            direction="down"
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.HOK} coord={[1105, 1185]}>
          <Name left="60px" textAlign="left" />
          <Schedule line={Line.TCL} direction="up" bottom="20px" />
          <Schedule line={Line.AEL} direction="up" bottom="40px" />
        </Stop>
        {/* AEL */}
        <Stop stop={StopType.AWE} coord={[810, 542]}>
          <Name bottom="10px" right="110px" textAlign="right" />
          <Schedule
            line={Line.AEL}
            direction="down"
            bottom="20px"
            right="30px"
          />
        </Stop>
        <Stop stop={StopType.AIR} coord={[860, 492]}>
          <Name top="5px" right="80px" textAlign="right" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule
            line={Line.AEL}
            direction="down"
            bottom="20px"
            right="30px"
          />
          <Schedule line={Line.AEL} direction="up" top="20px" left="30px" />
        </Stop>
      </Wrapper>
    </lineConfigsContext.Provider>
  )
}

const Wrapper = styled.div`
  width: 2800px;
  height: 1430px;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right 300px top 100px;
  /* background-image: url(${bg}); */
`
