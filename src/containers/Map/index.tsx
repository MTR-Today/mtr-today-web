import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import bg from '../../assets/system_map.png'
import { Line } from '../../constants/line'
import { Stop } from './Stop'
import { StopName } from './StopName'
import { Stop as StopType } from '../../constants/stop'
import { StopSchedule } from './StopSchedule'
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
                'M 250 500 L 250 240 L 400 240 L 400 530 L 1000 530 L 1000 750 L 1220 970 L 1265 1020 L 1520 1020 L 1650 876 L 1820 876 L 1950 750 L 1950 540 L 1596 540 L 1596 460 L 1820 460 L 1820 270 L 2430 270',
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
                'M 950 270 L 1590 270 L 1590 951 L 1400 1162 1330 1162',
                20
              ).path
            }
            stroke={lineConfigs?.[Line.EAL]?.color}
            {...lineProps}
          />
          <path
            d={
              roundCorners('M 420 630 L 1390 630 L 1390 1150 L 1230 1150', 20)
                .path
            }
            stroke={lineConfigs?.[Line.TWL]?.color}
            {...lineProps}
          />
          <path
            d={
              roundCorners(
                'M 2450 900 L 2240 900 L 2240 630 L 1396 630 L 1396 870 L 1780 870 L 1780 950',
                20
              ).path
            }
            stroke={lineConfigs?.[Line.KTL]?.color}
            {...lineProps}
          />
          <path
            d={roundCorners('M 930 1156 L 1530 1156', 20).path}
            stroke={lineConfigs?.[Line.ISL]?.color}
            {...lineProps}
          />
        </svg>
        {/* TWL */}
        <EndTip coord={[630, 420]} line={Line.TWL} />
        <Stop stop={StopType.TSW} coord={[630, 470]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <StopSchedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.TWH} coord={[630, 570]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <StopSchedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.KWH} coord={[630, 670]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <StopSchedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.KWF} coord={[630, 770]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <StopSchedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.LAK} coord={[630, 870]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <StopSchedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.MEF} coord={[630, 1000]}>
          <StopName bottom="45px" left="60px" textAlign="left" />
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <StopSchedule
            line={Line.TWL}
            direction="up"
            disabled
            bottom="20px"
            right="35px"
          />
          <StopSchedule
            line={Line.TML}
            direction="up"
            bottom="20px"
            left="35px"
          />
          <StopSchedule
            line={Line.TWL}
            direction="down"
            disabled
            top="20px"
            left="35px"
          />
          <StopSchedule
            line={Line.TML}
            direction="down"
            top="20px"
            right="35px"
          />
        </Stop>
        <Stop stop={StopType.LCK} coord={[630, 1130]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <StopSchedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.CSW} coord={[630, 1230]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <StopSchedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.SSP} coord={[630, 1330]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TWL} direction="up" disabled bottom="20px" />
          <StopSchedule line={Line.TWL} direction="down" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.PRE} coord={[690, 1393]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule
            line={Line.TWL}
            direction="up"
            disabled
            left="40px"
            top="10px"
          />
          <StopSchedule
            line={Line.KTL}
            direction="up"
            disabled
            left="40px"
            bottom="10px"
          />
          <StopSchedule
            line={Line.TWL}
            direction="down"
            disabled
            right="40px"
            top="10px"
          />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.MOK} coord={[760, 1393]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule
            line={Line.TWL}
            direction="up"
            disabled
            left="40px"
            top="10px"
          />
          <StopSchedule
            line={Line.KTL}
            direction="up"
            disabled
            left="40px"
            bottom="10px"
          />
          <StopSchedule
            line={Line.TWL}
            direction="down"
            disabled
            right="40px"
            top="10px"
          />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.YMT} coord={[830, 1393]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <StopSchedule
            line={Line.TWL}
            direction="up"
            disabled
            left="40px"
            top="10px"
          />
          <StopSchedule
            line={Line.KTL}
            direction="up"
            disabled
            left="40px"
            bottom="10px"
          />
          <StopSchedule
            line={Line.TWL}
            direction="down"
            disabled
            right="40px"
            top="10px"
          />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            right="40px"
            bottom="10px"
          />
        </Stop>
        <Stop stop={StopType.JOR} coord={[900, 1390]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.TWL} direction="up" disabled left="40px" />
          <StopSchedule
            line={Line.TWL}
            direction="down"
            disabled
            right="40px"
          />
        </Stop>
        <Stop stop={StopType.TST} coord={[970, 1390]}>
          <StopName bottom="6" right="60px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.TWL} direction="up" disabled left="40px" />
          <StopSchedule
            line={Line.TWL}
            direction="down"
            disabled
            right="40px"
          />
        </Stop>
        {/* KTL */}
        <EndTip coord={[900, 2450]} line={Line.KTL} flip />
        <Stop stop={StopType.TIK} coord={[900, 2400]}>
          <StopName top="45px" />
          <StopSchedule line={Line.KTL} direction="up" disabled top="20px" />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
          />
        </Stop>
        <Stop stop={StopType.YAT} coord={[900, 2300]}>
          <StopName top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.KTL} direction="up" disabled top="20px" />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
          />
        </Stop>
        <Stop stop={StopType.LAT} coord={[830, 2240]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.KTL} direction="up" disabled right="40px" />
          <StopSchedule line={Line.KTL} direction="down" disabled left="40px" />
        </Stop>
        <Stop stop={StopType.KWT} coord={[760, 2240]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.KTL} direction="up" disabled right="40px" />
          <StopSchedule line={Line.KTL} direction="down" disabled left="40px" />
        </Stop>
        <Stop stop={StopType.NTK} coord={[690, 2240]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.KTL} direction="up" disabled right="40px" />
          <StopSchedule line={Line.KTL} direction="down" disabled left="40px" />
        </Stop>
        <Stop stop={StopType.KOB} coord={[630, 2180]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.KTL} direction="up" disabled top="20px" />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
          />
        </Stop>
        <Stop stop={StopType.CHH} coord={[630, 2080]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.KTL} direction="up" disabled top="20px" />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
          />
        </Stop>
        <Stop stop={StopType.DIH} coord={[630, 1950]}>
          <StopName bottom="45px" left="60px" textAlign="left" />
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <StopSchedule
            line={Line.KTL}
            direction="up"
            disabled
            top="20px"
            left="35px"
          />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
            right="35px"
          />
          <StopSchedule
            line={Line.TML}
            direction="up"
            top="20px"
            right="35px"
          />
          <StopSchedule
            line={Line.TML}
            direction="down"
            bottom="20px"
            left="35px"
          />
        </Stop>
        <Stop stop={StopType.WTS} coord={[630, 1820]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.KTL} direction="up" disabled top="20px" />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
          />
        </Stop>
        <Stop stop={StopType.LOF} coord={[630, 1720]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.KTL} direction="up" disabled top="20px" />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
          />
        </Stop>
        <Stop stop={StopType.KOT} coord={[630, 1590]}>
          <StopName bottom="45px" left="60px" textAlign="left" />
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <StopSchedule
            line={Line.EAL}
            direction="up"
            bottom="20px"
            left="35px"
          />
          <StopSchedule
            line={Line.KTL}
            direction="up"
            disabled
            top="20px"
            left="35px"
          />
          <StopSchedule
            line={Line.EAL}
            direction="down"
            top="20px"
            right="35px"
          />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
            right="35px"
          />
        </Stop>
        <Stop stop={StopType.SKM} coord={[630, 1460]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            bottom="20px"
          />
          <StopSchedule line={Line.KTL} direction="up" disabled top="20px" />
        </Stop>
        <Stop stop={StopType.HOM} coord={[873, 1720]}>
          <StopName bottom="35px" right="75px" textAlign="right" />
          <ArrowRight top="4" right="12" />
          <ArrowLeft bottom="4" right="12" />
          <StopSchedule line={Line.KTL} direction="up" disabled bottom="20px" />
          <StopSchedule line={Line.TML} direction="up" bottom="40px" />
          <StopSchedule line={Line.KTL} direction="down" disabled top="20px" />
          <StopSchedule line={Line.TML} direction="down" top="40px" />
        </Stop>
        <Stop stop={StopType.WHA} coord={[950, 1780]}>
          <StopName left="120px" textAlign="left" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.KTL} direction="up" disabled left="40px" />
          <StopSchedule
            line={Line.KTL}
            direction="down"
            disabled
            right="40px"
          />
        </Stop>
        {/* EAL */}
        <EndTip coord={[330, 880]} line={Line.EAL} />
        <EndTip coord={[270, 950]} line={Line.EAL} />
        <Stop stop={StopType.LMC} coord={[330, 930]}>
          <StopName top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.EAL} direction="up" bottom="20px" />
          <StopSchedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.LOW} coord={[270, 1000]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.EAL} direction="up" bottom="20px" />
          <StopSchedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.SHS} coord={[270, 1130]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.EAL} direction="up" bottom="20px" />
          <StopSchedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.FAN} coord={[270, 1230]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.EAL} direction="up" bottom="20px" />
          <StopSchedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.TWO} coord={[270, 1330]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.EAL} direction="up" bottom="20px" />
          <StopSchedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.TAP} coord={[270, 1430]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.EAL} direction="up" bottom="20px" />
          <StopSchedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.UNI} coord={[270, 1530]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.EAL} direction="up" bottom="20px" />
          <StopSchedule line={Line.EAL} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.RAC} coord={[360, 1680]}>
          <StopName bottom="6" left="70px" textAlign="left" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.EAL} direction="up" left="40px" />
          <StopSchedule line={Line.EAL} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.FOT} coord={[330, 1590]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.EAL} direction="up" left="40px" />
          <StopSchedule line={Line.EAL} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.SHT} coord={[430, 1590]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.EAL} direction="up" left="40px" />
          <StopSchedule line={Line.EAL} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.TAW} coord={[500, 1593]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight bottom="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="6" left="4" transform="rotate(90deg)" />
          <ArrowRight top="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="6" left="4" transform="rotate(90deg)" />
          <StopSchedule
            line={Line.TML}
            direction="up"
            bottom="10px"
            right="40px"
          />
          <StopSchedule line={Line.EAL} direction="up" top="10px" left="40px" />
          <StopSchedule
            line={Line.TML}
            direction="down"
            bottom="10px"
            left="40px"
          />
          <StopSchedule
            line={Line.EAL}
            direction="down"
            top="10px"
            right="40px"
          />
        </Stop>
        <Stop stop={StopType.MKK} coord={[760, 1590]}>
          <StopName left="120px" textAlign="left" />
          <StopSchedule line={Line.EAL} direction="up" left="40px" />
          <StopSchedule line={Line.EAL} direction="down" right="40px" />
        </Stop>
        {/* TML */}
        <EndTip coord={[500, 250]} line={Line.TML} transform="rotate(-90deg)" />
        <Stop stop={StopType.TUM} coord={[450, 250]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.TML} direction="up" right="40px" />
          <StopSchedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.SIH} coord={[380, 250]}>
          <StopName right="120px" textAlign="right" />
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.TML} direction="up" right="40px" />
          <StopSchedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.TIS} coord={[240, 325]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" right="12" />
          <ArrowLeft bottom="4" right="12" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TML} direction="up" bottom="20px" />
          <StopSchedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.LOP} coord={[310, 400]}>
          <StopName left="120px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.TML} direction="up" left="40px" />
          <StopSchedule line={Line.TML} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.YUL} coord={[380, 400]}>
          <StopName left="120px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.TML} direction="up" left="40px" />
          <StopSchedule line={Line.TML} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.KSR} coord={[450, 400]}>
          <StopName left="130px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.TML} direction="up" left="40px" />
          <StopSchedule line={Line.TML} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.TWW} coord={[530, 470]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TML} direction="up" bottom="20px" />
          <StopSchedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.NAC} coord={[730, 1000]}>
          <StopName left="120px" textAlign="left" />
          <StopSchedule line={Line.TML} direction="up" left="40px" />
          <StopSchedule line={Line.TML} direction="down" right="40px" />
        </Stop>
        <Stop stop={StopType.AUS} coord={[970, 1220]}>
          <StopName right="120px" top="2" textAlign="right" />
          <ArrowRight bottom="4" right="30px" transform="rotate(45deg)" />
          <ArrowLeft bottom="8" right="14px" transform="rotate(45deg)" />
          <StopSchedule line={Line.TML} direction="up" left="40px" bottom="2" />
          <StopSchedule line={Line.TML} direction="down" right="40px" top="2" />
        </Stop>
        <Stop stop={StopType.ETS} coord={[1020, 1455]}>
          <StopName top="25px" right="90px" textAlign="right" />
          <ArrowRight top="4" left="10" />
          <ArrowLeft bottom="4" left="10" />
          <StopSchedule line={Line.TML} direction="up" bottom="20px" />
          <StopSchedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.HUH} coord={[980, 1560]}>
          <StopName top="30px" left="110px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <StopSchedule line={Line.EAL} direction="up" top="40px" left="30px" />
          <StopSchedule
            line={Line.TML}
            direction="up"
            bottom="20px"
            right="30px"
          />
          <StopSchedule
            line={Line.EAL}
            direction="down"
            bottom="40px"
            right="30px"
          />
          <StopSchedule
            line={Line.TML}
            direction="down"
            top="20px"
            left="30px"
          />
        </Stop>
        <Stop stop={StopType.EXC} coord={[1100, 1455]}>
          <StopName top="8px" left="125px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <StopSchedule line={Line.EAL} direction="up" top="15px" left="35px" />
          <StopSchedule
            line={Line.EAL}
            direction="down"
            bottom="15px"
            right="35px"
          />
        </Stop>
        <Stop stop={StopType.TKW} coord={[850, 1850]}>
          <StopName top="45px" left="65px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <StopSchedule
            line={Line.TML}
            direction="up"
            bottom="20px"
            right="30px"
          />
          <StopSchedule
            line={Line.TML}
            direction="down"
            top="20px"
            left="30px"
          />
        </Stop>
        <Stop stop={StopType.SUW} coord={[790, 1910]}>
          <StopName top="45px" left="65px" textAlign="left" />
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <StopSchedule
            line={Line.TML}
            direction="up"
            bottom="20px"
            right="30px"
          />
          <StopSchedule
            line={Line.TML}
            direction="down"
            top="20px"
            left="30px"
          />
        </Stop>
        <Stop stop={StopType.KAT} coord={[700, 1950]}>
          <StopName left="120px" textAlign="left" />
          <StopSchedule line={Line.TML} direction="up" right="40px" />
          <StopSchedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.HIK} coord={[540, 1820]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TML} direction="up" top="20px" />
          <StopSchedule line={Line.TML} direction="down" bottom="20px" />
        </Stop>
        <Stop stop={StopType.CKT} coord={[430, 1820]}>
          <StopName left="130px" textAlign="left" />
          <StopSchedule line={Line.TML} direction="up" right="40px" />
          <StopSchedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.STW} coord={[360, 1820]}>
          <StopName left="120px" textAlign="left" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <StopSchedule line={Line.TML} direction="up" right="40px" />
          <StopSchedule line={Line.TML} direction="down" left="40px" />
        </Stop>
        <Stop stop={StopType.CIO} coord={[270, 1880]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TML} direction="up" bottom="20px" />
          <StopSchedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.SHM} coord={[270, 1980]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TML} direction="up" bottom="20px" />
          <StopSchedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.TSH} coord={[270, 2080]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TML} direction="up" bottom="20px" />
          <StopSchedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.HEO} coord={[270, 2180]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TML} direction="up" bottom="20px" />
          <StopSchedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.MOS} coord={[270, 2280]}>
          <StopName bottom="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TML} direction="up" bottom="20px" />
          <StopSchedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <Stop stop={StopType.WKS} coord={[270, 2380]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TML} direction="up" bottom="20px" />
          <StopSchedule line={Line.TML} direction="down" top="20px" />
        </Stop>
        <EndTip coord={[270, 2430]} line={Line.TML} />
        {/* ISL */}
        <Stop stop={StopType.CEN} coord={[1153, 1230]}>
          <StopName top="65px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.TWL} direction="up" disabled top="40px" />
          <StopSchedule line={Line.ISL} direction="up" disabled top="20px" />
          <StopSchedule
            line={Line.ISL}
            direction="down"
            disabled
            bottom="20px"
          />
          <StopSchedule
            line={Line.TWL}
            direction="down"
            disabled
            bottom="40px"
          />
        </Stop>
        <Stop stop={StopType.ADM} coord={[1156, 1330]}>
          <StopName top="85px" />
          <StopSchedule line={Line.TWL} direction="up" disabled top="60px" />
          <StopSchedule line={Line.EAL} direction="up" top="40px" />
          <StopSchedule line={Line.ISL} direction="up" disabled top="20px" />
          <StopSchedule
            line={Line.ISL}
            direction="down"
            disabled
            bottom="20px"
          />
          <StopSchedule line={Line.EAL} direction="down" bottom="40px" />
          <StopSchedule
            line={Line.TWL}
            direction="down"
            disabled
            bottom="60px"
          />
        </Stop>
        <Stop stop={StopType.WAC} coord={[1156, 1460]}>
          <StopName top="45px" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <StopSchedule line={Line.ISL} direction="up" disabled top="20px" />
          <StopSchedule
            line={Line.ISL}
            direction="down"
            disabled
            bottom="20px"
          />
        </Stop>
      </Wrapper>
    </lineConfigsContext.Provider>
  )
}

const Wrapper = styled.div`
  width: 2600px;
  height: 1430px;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right 100px top 100px;
  /* background-image: url(${bg}); */
`
