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
            d="M 250 450 L 250 260 a20,20 0 0 1 20,-20 L 380 240 a20,20 0 0 1 20,20 L 400 510 a20,20 0 0 0 20,20 L 470 530 L 980 530 a20,20 0 0 1 20,20 L 1000 730"
            stroke={lineConfigs?.[Line.TML]?.color}
            {...lineProps}
          />
          <path
            d="M 1950 530 L 1950 730"
            stroke={lineConfigs?.[Line.TML]?.color}
            {...lineProps}
          />
          <path
            d="M 930 330 L 1080 330 a20,20 0 0 0 20,-20 L 1100 270"
            stroke={lineConfigs?.[Line.EAL]?.color}
            {...lineProps}
          />
          <path
            d="M 1530 270 L 1660 270 a20,20 0 0 1 20,20 L 1680 380 a20,20 0 0 1 -20,20 L 1590 400"
            stroke={lineConfigs?.[Line.EAL]?.color}
            stroke-dasharray="10,10"
            {...lineProps}
          />
          <path
            d="M 1000 270 L 1570 270 a20,20 0 0 1 20,20 L 1590 760"
            stroke={lineConfigs?.[Line.EAL]?.color}
            {...lineProps}
          />
          <path
            d="M 470 630 L 1370 630 a20,20 0 0 1 20,20 L 1390 1130 a20,20 0 0 1 -20,20 L 1230 1150"
            stroke={lineConfigs?.[Line.TWL]?.color}
            {...lineProps}
          />
          <path
            d="M 2400 900 L 2260 900 a20,20 0 0 1 -20,-20 L 2240 650 a20,20 0 0 0 -20,-20  L 1416 630 a20,20 0 0 0 -20,20 L 1396 850 a20,20 0 0 0 20,20 L 1700 870 a20,20 0 0 1 20,20 L 1720 920"
            stroke={lineConfigs?.[Line.KTL]?.color}
            {...lineProps}
          />
        </svg>
        {/* TWL */}
        <Stop stop={StopType.TSW} coord={[630, 470]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        <Stop stop={StopType.TWH} coord={[630, 570]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        <Stop stop={StopType.KWH} coord={[630, 670]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        <Stop stop={StopType.KWF} coord={[630, 770]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        <Stop stop={StopType.LAK} coord={[630, 870]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        <Stop stop={StopType.MEF} coord={[630, 1000]}>
          <StopName bottom="45px" left="50px" textAlign="left" />
          <StopSchedule line={Line.TWL} bottom="20px" left="35px" />
          <StopSchedule line={Line.TML} bottom="20px" right="35px" />
          <StopSchedule line={Line.TWL} top="20px" right="35px" />
          <StopSchedule line={Line.TML} top="20px" left="35px" />
        </Stop>
        <Stop stop={StopType.LCK} coord={[630, 1130]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        <Stop stop={StopType.CSW} coord={[630, 1230]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        <Stop stop={StopType.SSP} coord={[630, 1330]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        <Stop stop={StopType.PRE} coord={[690, 1393]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.TWL} right="40px" top="10px" />
          <StopSchedule line={Line.KTL} right="40px" bottom="10px" />
          <StopSchedule line={Line.TWL} left="40px" top="10px" />
          <StopSchedule line={Line.KTL} left="40px" bottom="10px" />
        </Stop>
        <Stop stop={StopType.MOK} coord={[760, 1393]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.TWL} right="40px" top="10px" />
          <StopSchedule line={Line.KTL} right="40px" bottom="10px" />
          <StopSchedule line={Line.TWL} left="40px" top="10px" />
          <StopSchedule line={Line.KTL} left="40px" bottom="10px" />
        </Stop>
        <Stop stop={StopType.YMT} coord={[830, 1393]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.TWL} right="40px" top="10px" />
          <StopSchedule line={Line.KTL} right="40px" bottom="10px" />
          <StopSchedule line={Line.TWL} left="40px" top="10px" />
          <StopSchedule line={Line.KTL} left="40px" bottom="10px" />
        </Stop>
        <Stop stop={StopType.JOR} coord={[900, 1390]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.TWL} right="40px" top="10px" />
          <StopSchedule line={Line.KTL} right="40px" bottom="10px" />
          <StopSchedule line={Line.TWL} left="40px" top="10px" />
          <StopSchedule line={Line.KTL} left="40px" bottom="10px" />
        </Stop>
        <Stop stop={StopType.TST} coord={[970, 1390]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.TWL} right="40px" top="10px" />
          <StopSchedule line={Line.KTL} right="40px" bottom="10px" />
          <StopSchedule line={Line.TWL} left="40px" top="10px" />
          <StopSchedule line={Line.KTL} left="40px" bottom="10px" />
        </Stop>
        <Stop stop={StopType.ADM} coord={[1150, 1330]}>
          <StopName top="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        <Stop stop={StopType.CEN} coord={[1150, 1230]}>
          <StopName top="45px" />
          <StopSchedule line={Line.TWL} bottom="20px" />
          <StopSchedule line={Line.TWL} top="20px" />
        </Stop>
        {/* KYL */}
        <Stop stop={StopType.TIK} coord={[900, 2400]}>
          <StopName top="45px" />
          <StopSchedule line={Line.KTL} bottom="20px" />
          <StopSchedule line={Line.KTL} top="20px" />
        </Stop>
        <Stop stop={StopType.YAT} coord={[900, 2300]}>
          <StopName top="45px" />
          <StopSchedule line={Line.KTL} bottom="20px" />
          <StopSchedule line={Line.KTL} top="20px" />
        </Stop>
        <Stop stop={StopType.LAT} coord={[830, 2240]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.KTL} right="40px" />
          <StopSchedule line={Line.KTL} left="40px" />
        </Stop>
        <Stop stop={StopType.KWT} coord={[760, 2240]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.KTL} right="40px" />
          <StopSchedule line={Line.KTL} left="40px" />
        </Stop>
        <Stop stop={StopType.NTK} coord={[690, 2240]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.KTL} right="40px" />
          <StopSchedule line={Line.KTL} left="40px" />
        </Stop>
        <Stop stop={StopType.KOB} coord={[630, 2180]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.KTL} bottom="20px" />
          <StopSchedule line={Line.KTL} top="20px" />
        </Stop>
        <Stop stop={StopType.CHH} coord={[630, 2080]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.KTL} bottom="20px" />
          <StopSchedule line={Line.KTL} top="20px" />
        </Stop>
        <Stop stop={StopType.DIH} coord={[630, 1950]}>
          <StopName bottom="45px" left="50px" textAlign="left" />
          <StopSchedule line={Line.TML} bottom="20px" left="35px" />
          <StopSchedule line={Line.KTL} bottom="20px" right="35px" />
          <StopSchedule line={Line.TML} top="20px" right="35px" />
          <StopSchedule line={Line.KTL} top="20px" left="35px" />
        </Stop>
        <Stop stop={StopType.WTS} coord={[630, 1820]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.KTL} bottom="20px" />
          <StopSchedule line={Line.KTL} top="20px" />
        </Stop>
        <Stop stop={StopType.LOF} coord={[630, 1720]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.KTL} bottom="20px" />
          <StopSchedule line={Line.KTL} top="20px" />
        </Stop>
        <Stop stop={StopType.KOT} coord={[630, 1590]}>
          <StopName bottom="45px" left="50px" textAlign="left" />
          <StopSchedule line={Line.EAL} bottom="20px" left="35px" />
          <StopSchedule line={Line.KTL} bottom="20px" right="35px" />
          <StopSchedule line={Line.EAL} top="20px" right="35px" />
          <StopSchedule line={Line.KTL} top="20px" left="35px" />
        </Stop>
        <Stop stop={StopType.SKM} coord={[630, 1460]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.KTL} bottom="20px" />
          <StopSchedule line={Line.KTL} top="20px" />
        </Stop>
        {/* EAL */}
        <Stop stop={StopType.LMC} coord={[330, 930]}>
          <StopName top="45px" />
          <StopSchedule line={Line.EAL} bottom="20px" />
          <StopSchedule line={Line.EAL} top="20px" />
        </Stop>
        <Stop stop={StopType.LOW} coord={[270, 1000]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.EAL} bottom="20px" />
          <StopSchedule line={Line.EAL} top="20px" />
        </Stop>
        <Stop stop={StopType.SHS} coord={[270, 1100]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.EAL} bottom="20px" />
          <StopSchedule line={Line.EAL} top="20px" left="40px" />
        </Stop>
        <Stop stop={StopType.FAN} coord={[270, 1230]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.EAL} bottom="20px" />
          <StopSchedule line={Line.EAL} top="20px" />
        </Stop>
        <Stop stop={StopType.TWO} coord={[270, 1330]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.EAL} bottom="20px" />
          <StopSchedule line={Line.EAL} top="20px" />
        </Stop>
        <Stop stop={StopType.TAP} coord={[270, 1430]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.EAL} bottom="20px" />
          <StopSchedule line={Line.EAL} top="20px" />
        </Stop>
        <Stop stop={StopType.UNI} coord={[270, 1530]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.EAL} bottom="20px" />
          <StopSchedule line={Line.EAL} top="20px" />
        </Stop>
        <Stop stop={StopType.RAC} coord={[360, 1680]}>
          <StopName left="120px" textAlign="left" />
          <StopSchedule line={Line.EAL} right="40px" />
          <StopSchedule line={Line.EAL} left="40px" />
        </Stop>
        <Stop stop={StopType.FOT} coord={[330, 1590]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.EAL} right="40px" />
          <StopSchedule line={Line.EAL} left="40px" />
        </Stop>
        <Stop stop={StopType.SHT} coord={[430, 1590]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.EAL} right="40px" />
          <StopSchedule line={Line.EAL} left="40px" />
        </Stop>
        <Stop stop={StopType.TAW} coord={[530, 1590]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.EAL} right="40px" />
          <StopSchedule line={Line.EAL} left="40px" />
        </Stop>
        <Stop stop={StopType.MKK} coord={[760, 1590]}>
          <StopName left="120px" textAlign="left" />
          <StopSchedule line={Line.EAL} right="40px" />
          <StopSchedule line={Line.EAL} left="40px" />
        </Stop>
        {/* TML */}
        <Stop stop={StopType.TUM} coord={[450, 250]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.TML} right="40px" />
          <StopSchedule line={Line.TML} left="40px" />
        </Stop>
        <Stop stop={StopType.SIH} coord={[380, 250]}>
          <StopName right="120px" textAlign="right" />
          <StopSchedule line={Line.TML} right="40px" />
          <StopSchedule line={Line.TML} left="40px" />
        </Stop>
        <Stop stop={StopType.TIS} coord={[240, 330]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TML} bottom="20px" />
          <StopSchedule line={Line.TML} top="20px" />
        </Stop>
        <Stop stop={StopType.LOP} coord={[310, 400]}>
          <StopName left="120px" textAlign="left" />
          <StopSchedule line={Line.TML} right="40px" />
          <StopSchedule line={Line.TML} left="40px" />
        </Stop>
        <Stop stop={StopType.YUL} coord={[380, 400]}>
          <StopName left="120px" textAlign="left" />
          <StopSchedule line={Line.TML} right="40px" />
          <StopSchedule line={Line.TML} left="40px" />
        </Stop>
        <Stop stop={StopType.KSR} coord={[450, 400]}>
          <StopName left="130px" textAlign="left" />
          <StopSchedule line={Line.TML} right="40px" />
          <StopSchedule line={Line.TML} left="40px" />
        </Stop>
        <Stop stop={StopType.TWW} coord={[530, 470]}>
          <StopName bottom="45px" />
          <StopSchedule line={Line.TML} bottom="20px" />
          <StopSchedule line={Line.TML} top="20px" />
        </Stop>
      </Wrapper>
    </lineConfigsContext.Provider>
  )
}

const Wrapper = styled.div`
  width: 2600px;
  height: 1430px;
  position: relative;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right 100px top 100px;
  background-image: url(${bg});
`
