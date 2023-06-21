import { Box } from '@chakra-ui/react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { LineCode, StopCode } from 'mtr-kit'
import React, { useState } from 'react'

import { mapContext } from '../../contexts/mapContext'
import { LineConfig } from '../../services/lineConfigApi'
import { scheduleApi } from '../../services/scheduleApi'
import { stopConfigApi } from '../../services/stopConfigApi'
import { ArrowLeft } from './ArrowLeft'
import { ArrowRight } from './ArrowRight'
import { EndTip } from './EndTip'
import { Island } from './Island'
import { Line } from './Line'
import { Name } from './Name'
import { Schedule } from './Schedule'
import { Stop } from './Stop'

export const CONTAINER_WIDTH = 2800 * 2
export const CONTAINER_HEIGHT = 1630 * 2

export const MAP_WIDTH = 2800
export const MAP_HEIGHT = 1630

export const Map: React.FC<{
  x: number
  y: number
  lineConfigs: LineConfig[]
  scale: number
}> = ({ lineConfigs, x, y, scale }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: 'map',
    })

  const [hoveringLine, setHoveringLine] = useState<LineCode>()

  const { data: stopConfigs = [] } = useQuery({
    queryKey: ['stop-configs'],
    queryFn: () => stopConfigApi.list(),
  })

  const { data: schedules = [] } = useQuery({
    queryKey: ['schedules'],
    queryFn: () => scheduleApi.list(),
    refetchInterval: 10000,
    refetchOnMount: true,
  })

  return lineConfigs ? (
    <mapContext.Provider
      value={{
        schedules,
        lineConfigs,
        stopConfigs,
        hoveringLine: isDragging ? undefined : hoveringLine,
        setHoveringLine,
        isDragging,
      }}
    >
      <DragContainer
        borderWidth="2px"
        boxShadow="md"
        borderRadius="xl"
        ref={setNodeRef}
        style={{
          transform: transform
            ? ` ${CSS.Translate.toString({
                ...transform,
                scaleX: scale,
                scaleY: scale,
              })} scale(${scale})`
            : `scale(${scale})`,
          top: y,
          left: x,
        }}
        {...attributes}
        {...listeners}
      >
        <Wrapper>
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
          </svg>
          <svg
            width={MAP_WIDTH}
            height={MAP_HEIGHT}
            style={{ position: 'absolute' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Line
              d="M 250 500 L 250 240 L 400 240 L 400 530 L 1000 530 L 1000 750 L 1220 970 L 1265 1020 L 1520 1020 L 1665 876 L 1820 876 L 1950 750 L 1950 540 L 1596 540 L 1596 460 L 1820 460 L 1820 270 L 2430 270"
              line={LineCode.TML}
            />
            <Line d="M 880 330 L 1080 330 L 1080 270" line={LineCode.EAL} />
            <Line
              d="M 1530 270 L 1680 270 L 1680 400 L 1590 400"
              line={LineCode.EAL}
              stroke-dasharray="10,10"
            />
            <Line
              d="M 950 270 L 1590 270 L 1590 958 L 1388 1162 1330 1162"
              line={LineCode.EAL}
            />
            <Line
              d="M 400 630 L 1390 630 L 1390 1150 L 1230 1150"
              line={LineCode.TWL}
            />
            <Line
              d="M 2400 900 L 2240 900 L 2240 630 L 1396 630 L 1396 870 L 1780 870 L 1780 1000"
              line={LineCode.KTL}
            />
            <Line
              d="M 1860 1150 L 2010 1150 L 2250 906 L 2500 906 L 2600 906 L 2600 710"
              line={LineCode.TKL}
            />
            <Line d="M 2500 906 L 2600 906 L 2600 1040" line={LineCode.TKL} />
            <Line
              d="M 780 1156 L 2360 1156 L 2500 1156 L 2500 1300"
              line={LineCode.ISL}
            />
            <Line
              d="M 1330 1168 L 1400 1168 L 1400 1300 L 1400 1350 L 1200 1350 L 1150 1450 L 930 1450"
              line={LineCode.SIL}
            />
            <Line
              d="M 486 980 L 830 636 L 910 636 L 910 690 L 994 690 L 994 1102 L 1185 1102 L 1185 1102"
              line={LineCode.TCL}
            />
            <Line
              d="M 582 770 L 472 880 L 522 930 L 650 800 L 690 760 L 727 748 L 828 647 L 900 647 L 900 700 L 983 700 L 983 938 L 988 970 L 988 1108 L 1185 1108"
              line={LineCode.AEL}
            />
            <Line d="M 645 830 L 730 745 L 730 970" line={LineCode.DRL} />
          </svg>
          {/* TWL */}
          <EndTip line={LineCode.TWL} coord={[400, 630]} />
          <Stop stop={StopCode.TSW} coord={[450, 630]}>
            <Name bottom="25px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TWL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.TWH} coord={[550, 630]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
            <Schedule line={LineCode.TWL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.KWH} coord={[650, 630]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
            <Schedule line={LineCode.TWL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.KWF} coord={[750, 630]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
            <Schedule line={LineCode.TWL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.LAK} coord={[855, 633]}>
            <Name bottom="65px" />
            <ArrowRight top="4" left="72px" />
            <ArrowLeft bottom="4" left="72px" />
            <Schedule line={LineCode.TCL} dir="up" bottom="40px" />
            <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
            <Schedule line={LineCode.TWL} dir="down" top="30px" />
            <Schedule line={LineCode.TCL} dir="down" top="50px" />
          </Stop>
          <Stop stop={StopCode.MEF} coord={[1000, 630]}>
            <Name bottom="45px" left="60px" textAlign="left" />
            <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
            <ArrowRight top="10" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
            <ArrowRight top="4" left="20" />
            <ArrowLeft bottom="4" left="20" />
            <Schedule line={LineCode.TWL} dir="up" bottom="20px" right="35px" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" left="35px" />
            <Schedule line={LineCode.TWL} dir="down" top="20px" left="35px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" right="35px" />
          </Stop>
          <Stop stop={StopCode.LCK} coord={[1130, 630]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
            <Schedule line={LineCode.TWL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.CSW} coord={[1230, 630]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
            <Schedule line={LineCode.TWL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.SSP} coord={[1330, 630]}>
            <Name bottom="45px" />
            <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
            <Schedule line={LineCode.TWL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.PRE} coord={[1393, 690]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TWL} dir="up" left="40px" top="10px" />
            <Schedule line={LineCode.KTL} dir="up" left="40px" bottom="10px" />
            <Schedule line={LineCode.TWL} dir="down" right="40px" top="10px" />
            <Schedule
              line={LineCode.KTL}
              dir="down"
              right="40px"
              bottom="10px"
            />
          </Stop>
          <Stop stop={StopCode.MOK} coord={[1393, 760]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TWL} dir="up" left="40px" top="10px" />
            <Schedule line={LineCode.KTL} dir="up" left="40px" bottom="10px" />
            <Schedule line={LineCode.TWL} dir="down" right="40px" top="10px" />
            <Schedule
              line={LineCode.KTL}
              dir="down"
              right="40px"
              bottom="10px"
            />
          </Stop>
          <Stop stop={StopCode.YMT} coord={[1393, 830]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TWL} dir="up" left="40px" top="10px" />
            <Schedule line={LineCode.KTL} dir="up" left="40px" bottom="10px" />
            <Schedule line={LineCode.TWL} dir="down" right="40px" top="10px" />
            <Schedule
              line={LineCode.KTL}
              dir="down"
              right="40px"
              bottom="10px"
            />
          </Stop>
          <Stop stop={StopCode.JOR} coord={[1390, 900]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TWL} dir="up" left="40px" />
            <Schedule line={LineCode.TWL} dir="down" right="40px" />
          </Stop>
          <Stop stop={StopCode.TST} coord={[1390, 970]}>
            <Name bottom="6" right="60px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TWL} dir="up" left="40px" />
            <Schedule line={LineCode.TWL} dir="down" right="40px" />
          </Stop>
          {/* KTL */}
          <Stop stop={StopCode.LAT} coord={[2240, 830]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.KTL} dir="up" right="40px" />
            <Schedule line={LineCode.KTL} dir="down" left="40px" />
          </Stop>
          <Stop stop={StopCode.KWT} coord={[2240, 760]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.KTL} dir="up" right="40px" />
            <Schedule line={LineCode.KTL} dir="down" left="40px" />
          </Stop>
          <Stop stop={StopCode.NTK} coord={[2240, 690]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.KTL} dir="up" right="40px" />
            <Schedule line={LineCode.KTL} dir="down" left="40px" />
          </Stop>
          <Stop stop={StopCode.KOB} coord={[2180, 630]}>
            <Name bottom="45px" />
            <Schedule line={LineCode.KTL} dir="up" top="20px" />
            <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.CHH} coord={[2080, 630]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.KTL} dir="up" top="20px" />
            <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.DIH} coord={[1950, 630]}>
            <Name bottom="45px" left="60px" textAlign="left" />
            <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
            <ArrowRight top="10" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
            <ArrowRight top="4" left="20" />
            <ArrowLeft bottom="4" left="20" />
            <Schedule line={LineCode.KTL} dir="up" top="20px" left="35px" />
            <Schedule
              line={LineCode.KTL}
              dir="down"
              bottom="20px"
              right="35px"
            />
            <Schedule line={LineCode.TML} dir="up" top="20px" right="35px" />
            <Schedule
              line={LineCode.TML}
              dir="down"
              bottom="20px"
              left="35px"
            />
          </Stop>
          <Stop stop={StopCode.WTS} coord={[1820, 630]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.KTL} dir="up" top="20px" />
            <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.LOF} coord={[1720, 630]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.KTL} dir="up" top="20px" />
            <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.KOT} coord={[1590, 630]}>
            <Name bottom="45px" left="60px" textAlign="left" />
            <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
            <ArrowRight top="10" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
            <ArrowRight top="4" left="20" />
            <ArrowLeft bottom="4" left="20" />
            <Schedule line={LineCode.EAL} dir="up" bottom="20px" left="35px" />
            <Schedule line={LineCode.KTL} dir="up" top="20px" left="35px" />
            <Schedule line={LineCode.EAL} dir="down" top="20px" right="35px" />
            <Schedule
              line={LineCode.KTL}
              dir="down"
              bottom="20px"
              right="35px"
            />
          </Stop>
          <Stop stop={StopCode.SKM} coord={[1460, 630]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
            <Schedule line={LineCode.KTL} dir="up" top="20px" />
          </Stop>
          <Stop stop={StopCode.HOM} coord={[1720, 873]}>
            <Name bottom="35px" right="75px" textAlign="right" />
            <ArrowRight top="4" right="12" />
            <ArrowLeft bottom="4" right="12" />
            <Schedule line={LineCode.KTL} dir="up" bottom="20px" />
            <Schedule line={LineCode.TML} dir="up" bottom="40px" />
            <Schedule line={LineCode.KTL} dir="down" top="20px" />
            <Schedule line={LineCode.TML} dir="down" top="40px" />
          </Stop>
          <Stop stop={StopCode.WHA} coord={[1780, 950]}>
            <Name left="120px" textAlign="left" />
            <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.KTL} dir="up" left="40px" />
          </Stop>
          <EndTip
            coord={[1780, 1000]}
            line={LineCode.KTL}
            transform="rotate(-90deg)"
            flip
          />
          {/* EAL */}
          <EndTip coord={[880, 330]} line={LineCode.EAL} />
          <EndTip coord={[950, 270]} line={LineCode.EAL} />
          <Stop stop={StopCode.LMC} coord={[930, 330]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.EAL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.LOW} coord={[1000, 270]}>
            <Name bottom="25px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.EAL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.SHS} coord={[1130, 270]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
            <Schedule line={LineCode.EAL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.FAN} coord={[1230, 270]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
            <Schedule line={LineCode.EAL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.TWO} coord={[1330, 270]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
            <Schedule line={LineCode.EAL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.TAP} coord={[1430, 270]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
            <Schedule line={LineCode.EAL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.UNI} coord={[1530, 270]}>
            <Name bottom="45px" />
            <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
            <Schedule line={LineCode.EAL} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.RAC} coord={[1680, 360]}>
            <Name bottom="6" left="70px" textAlign="left" />
            <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.EAL} dir="up" left="40px" />
            <Schedule line={LineCode.EAL} dir="down" right="40px" />
          </Stop>
          <Stop stop={StopCode.FOT} coord={[1590, 330]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.EAL} dir="up" left="40px" />
            <Schedule line={LineCode.EAL} dir="down" right="40px" />
          </Stop>
          <Stop stop={StopCode.SHT} coord={[1590, 430]}>
            <Name right="120px" textAlign="right" />
            <Schedule line={LineCode.EAL} dir="up" left="40px" />
            <Schedule line={LineCode.EAL} dir="down" right="40px" />
          </Stop>
          <Stop stop={StopCode.TAW} coord={[1593, 500]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight bottom="6" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="6" left="4" transform="rotate(90deg)" />
            <ArrowRight top="6" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="6" left="4" transform="rotate(90deg)" />
            <Schedule line={LineCode.TML} dir="up" bottom="10px" right="40px" />
            <Schedule line={LineCode.EAL} dir="up" top="10px" left="40px" />
            <Schedule
              line={LineCode.TML}
              dir="down"
              bottom="10px"
              left="40px"
            />
            <Schedule line={LineCode.EAL} dir="down" top="10px" right="40px" />
          </Stop>
          <Stop stop={StopCode.MKK} coord={[1590, 760]}>
            <Name left="120px" textAlign="left" />
            <ArrowRight top="6" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="6" left="4" transform="rotate(90deg)" />
            <Schedule line={LineCode.EAL} dir="up" left="40px" />
            <Schedule line={LineCode.EAL} dir="down" right="40px" />
          </Stop>
          {/* TML */}
          <EndTip
            coord={[250, 500]}
            line={LineCode.TML}
            transform="rotate(-90deg)"
          />
          <Stop stop={StopCode.TUM} coord={[250, 450]}>
            <Name right="60px" textAlign="right" />
            <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TML} dir="down" left="40px" />
          </Stop>
          <Stop stop={StopCode.SIH} coord={[250, 380]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TML} dir="up" right="40px" />
            <Schedule line={LineCode.TML} dir="down" left="40px" />
          </Stop>
          <Stop stop={StopCode.TIS} coord={[325, 240]}>
            <Name bottom="45px" />
            <ArrowRight top="4" right="12" />
            <ArrowLeft bottom="4" right="12" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.LOP} coord={[400, 310]}>
            <Name left="120px" textAlign="left" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TML} dir="up" left="40px" />
            <Schedule line={LineCode.TML} dir="down" right="40px" />
          </Stop>
          <Stop stop={StopCode.YUL} coord={[400, 380]}>
            <Name left="120px" textAlign="left" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TML} dir="up" left="40px" />
            <Schedule line={LineCode.TML} dir="down" right="40px" />
          </Stop>
          <Stop stop={StopCode.KSR} coord={[400, 450]}>
            <Name left="130px" textAlign="left" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TML} dir="up" left="40px" />
            <Schedule line={LineCode.TML} dir="down" right="40px" />
          </Stop>
          <Stop stop={StopCode.TWW} coord={[470, 530]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.NAC} coord={[997, 730]}>
            <Name left="120px" textAlign="left" />
            <Schedule line={LineCode.TML} dir="up" left="40px" bottom="10px" />
            <Schedule line={LineCode.TCL} dir="up" left="40px" top="10px" />
            <Schedule line={LineCode.TCL} dir="down" right="50px" top="10px" />
            <Schedule
              line={LineCode.TML}
              dir="down"
              right="50px"
              bottom="10px"
            />
          </Stop>
          <Stop stop={StopCode.AUS} coord={[1220, 970]}>
            <Name right="120px" top="2" textAlign="right" />
            <ArrowRight bottom="4" right="30px" transform="rotate(45deg)" />
            <ArrowLeft bottom="8" right="14px" transform="rotate(45deg)" />
            <Schedule line={LineCode.TML} dir="up" left="40px" bottom="2" />
            <Schedule line={LineCode.TML} dir="down" right="40px" top="2" />
          </Stop>
          <Stop stop={StopCode.ETS} coord={[1455, 1020]}>
            <Name top="25px" right="90px" textAlign="right" />
            <ArrowRight top="4" left="10" />
            <ArrowLeft bottom="4" left="10" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.HUH} coord={[1560, 984]}>
            <Name top="30px" left="110px" textAlign="left" />
            <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
            <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
            <Schedule line={LineCode.EAL} dir="up" top="40px" left="30px" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" right="30px" />
            <Schedule
              line={LineCode.EAL}
              dir="down"
              bottom="40px"
              right="30px"
            />
            <Schedule line={LineCode.TML} dir="down" top="20px" left="30px" />
          </Stop>
          <Stop stop={StopCode.EXC} coord={[1455, 1095]}>
            <Name top="8px" left="125px" textAlign="left" />
            <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
            <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
            <Schedule line={LineCode.EAL} dir="up" top="15px" left="35px" />
            <Schedule
              line={LineCode.EAL}
              dir="down"
              bottom="15px"
              right="35px"
            />
          </Stop>
          <Stop stop={StopCode.TKW} coord={[1850, 850]}>
            <Name top="45px" left="65px" textAlign="left" />
            <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
            <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" right="30px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" left="30px" />
          </Stop>
          <Stop stop={StopCode.SUW} coord={[1910, 790]}>
            <Name top="45px" left="65px" textAlign="left" />
            <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
            <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" right="30px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" left="30px" />
          </Stop>
          <Stop stop={StopCode.KAT} coord={[1950, 700]}>
            <Name left="120px" textAlign="left" />
            <Schedule line={LineCode.TML} dir="up" right="40px" />
            <Schedule line={LineCode.TML} dir="down" left="40px" />
          </Stop>
          <Stop stop={StopCode.HIK} coord={[1820, 540]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TML} dir="up" top="20px" />
            <Schedule line={LineCode.TML} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.CKT} coord={[1820, 430]}>
            <Name left="130px" textAlign="left" />
            <Schedule line={LineCode.TML} dir="up" right="40px" />
            <Schedule line={LineCode.TML} dir="down" left="40px" />
          </Stop>
          <Stop stop={StopCode.STW} coord={[1820, 360]}>
            <Name left="120px" textAlign="left" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TML} dir="up" right="40px" />
            <Schedule line={LineCode.TML} dir="down" left="40px" />
          </Stop>
          <Stop stop={StopCode.CIO} coord={[1880, 270]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.SHM} coord={[1980, 270]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.TSH} coord={[2080, 270]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.HEO} coord={[2180, 270]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.MOS} coord={[2280, 270]}>
            <Name bottom="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" />
            <Schedule line={LineCode.TML} dir="down" top="20px" />
          </Stop>
          <Stop stop={StopCode.WKS} coord={[2380, 270]}>
            <Name bottom="45px" />
            <Schedule line={LineCode.TML} dir="up" bottom="20px" />
          </Stop>
          <EndTip coord={[2430, 270]} line={LineCode.TML} />
          {/* ISL */}
          <EndTip coord={[780, 1156]} flip line={LineCode.ISL} />
          <Stop stop={StopCode.KET} coord={[830, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.HKU} coord={[930, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.SYP} coord={[1030, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.SHW} coord={[1130, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.CEN} coord={[1230, 1153]}>
            <Name top="65px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TWL} dir="up" top="40px" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.ADM} coord={[1330, 1159]}>
            <Name top="105px" />
            <Schedule line={LineCode.TWL} dir="up" top="60px" />
            <Schedule line={LineCode.EAL} dir="up" top="40px" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
            <Schedule line={LineCode.TWL} dir="down" bottom="40px" />
            <Schedule line={LineCode.SIL} dir="down" top="80px" />
          </Stop>
          <Stop stop={StopCode.WAC} coord={[1460, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.CAB} coord={[1560, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.TIH} coord={[1660, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.FOH} coord={[1760, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.NOP} coord={[1860, 1153]}>
            <Name top="65px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TKL} dir="up" top="40px" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.QUB} coord={[1980, 1153]}>
            <Name top="65px" />
            <ArrowRight top="4" left="60px" />
            <ArrowLeft bottom="4" left="60px" />
            <Schedule line={LineCode.TKL} dir="up" top="40px" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
            <Schedule line={LineCode.TKL} dir="down" bottom="40px" />
          </Stop>
          <Stop stop={StopCode.TAK} coord={[2100, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.SWH} coord={[2200, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.SKW} coord={[2300, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.HFC} coord={[2400, 1156]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.ISL} dir="up" top="20px" />
            <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.CHW} coord={[2500, 1250]}>
            <Name right="60px" textAlign="right" />
            <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.ISL} dir="down" left="40px" />
          </Stop>
          <EndTip
            coord={[2500, 1300]}
            line={LineCode.ISL}
            transform="rotate(-90deg)"
          />
          {/* TKL */}
          <Stop stop={StopCode.YAT} coord={[2300, 903]}>
            <Name top="65px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TKL} dir="up" top="20px" />
            <Schedule line={LineCode.KTL} dir="up" top="40px" />
            <Schedule line={LineCode.KTL} dir="down" bottom="40px" />
            <Schedule line={LineCode.TKL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.TIK} coord={[2400, 903]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TKL} dir="up" top="20px" />
            <Schedule line={LineCode.KTL} dir="down" bottom="40px" />
            <Schedule line={LineCode.TKL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.TKO} coord={[2500, 906]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.TKL} dir="up" top="20px" />
            <Schedule line={LineCode.TKL} dir="down" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.HAH} coord={[2600, 830]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TKL} dir="up" left="40px" />
            <Schedule line={LineCode.TKL} dir="down" right="40px" />
          </Stop>
          <Stop stop={StopCode.POA} coord={[2600, 760]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TKL} dir="down" right="40px" />
          </Stop>
          <Stop stop={StopCode.LHP} coord={[2600, 990]}>
            <Name right="60px" textAlign="right" />
            <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TKL} dir="down" left="40px" />
          </Stop>
          <EndTip
            coord={[2600, 1040]}
            line={LineCode.TKL}
            transform="rotate(-90deg)"
          />
          <EndTip
            coord={[2600, 710]}
            line={LineCode.TKL}
            transform="rotate(90deg)"
          />
          {/* TCL */}
          <EndTip
            coord={[486, 980]}
            line={LineCode.TCL}
            transform="rotate(-45deg)"
          />
          <Stop stop={StopCode.TUC} coord={[526, 940]}>
            <Name bottom="5px" left="80px" textAlign="left" />
            <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
            <ArrowLeft bottom="10" left="10px" transform="rotate(-45deg)" />
            <Schedule line={LineCode.TCL} dir="down" top="20px" left="30px" />
          </Stop>
          <Stop stop={StopCode.SUN} coord={[642, 830]}>
            <Name bottom="5px" left="80px" textAlign="left" />
            <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
            <ArrowLeft bottom="10" right="4px" transform="rotate(-45deg)" />
            <Schedule line={LineCode.DRL} dir="up" bottom="30px" right="48px" />
            <Schedule line={LineCode.TCL} dir="up" bottom="10px" right="48px" />
            <Schedule line={LineCode.TCL} dir="down" top="20px" left="30px" />
            <Schedule line={LineCode.DRL} dir="down" top="40px" left="30px" />
          </Stop>
          <Stop stop={StopCode.TSY} coord={[752, 720]}>
            <Name bottom="5px" left="80px" textAlign="left" />
            <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
            <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
            <Schedule line={LineCode.AEL} dir="up" bottom="40px" right="30px" />
            <Schedule line={LineCode.TCL} dir="up" bottom="20px" right="30px" />
            <Schedule line={LineCode.TCL} dir="down" top="20px" left="30px" />
            <Schedule line={LineCode.AEL} dir="down" top="40px" left="30px" />
          </Stop>
          <Stop stop={StopCode.OLY} coord={[994, 870]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="6" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.TCL} dir="up" left="40px" />
            <Schedule line={LineCode.TCL} dir="down" right="45px" />
          </Stop>
          <Stop stop={StopCode.KOW} coord={[991, 970]}>
            <Name right="120px" textAlign="right" />
            <ArrowRight top="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.AEL} dir="up" left="40px" top="10px" />
            <Schedule line={LineCode.TCL} dir="up" left="40px" bottom="10px" />
            <Schedule line={LineCode.AEL} dir="down" right="40px" top="10px" />
            <Schedule
              line={LineCode.TCL}
              dir="down"
              right="40px"
              bottom="10px"
            />
          </Stop>
          <Stop stop={StopCode.HOK} coord={[1185, 1105]}>
            <Name left="60px" textAlign="left" />
            <Schedule line={LineCode.TCL} dir="up" bottom="20px" />
            <Schedule line={LineCode.AEL} dir="up" bottom="40px" />
          </Stop>
          {/* AEL */}
          <EndTip
            coord={[582, 770]}
            line={LineCode.AEL}
            flip
            transform="rotate(-45deg)"
          />
          <Stop stop={StopCode.AWE} coord={[542, 810]}>
            <Name bottom="10px" right="110px" textAlign="right" />
            <Schedule
              line={LineCode.AEL}
              dir="down"
              bottom="20px"
              right="30px"
            />
          </Stop>
          <Stop stop={StopCode.AIR} coord={[492, 860]}>
            <Name top="5px" right="80px" textAlign="right" />
            <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
            <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
            <Schedule
              line={LineCode.AEL}
              dir="down"
              bottom="20px"
              right="30px"
            />
            <Schedule line={LineCode.AEL} dir="up" top="20px" left="30px" />
          </Stop>
          {/* SIL */}
          <Stop stop={StopCode.OCP} coord={[1400, 1290]}>
            <Name left="120px" textAlign="left" />
            <ArrowRight bottom="6" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="6" left="4" transform="rotate(90deg)" />
            <Schedule line={LineCode.SIL} dir="up" right="40px" />
            <Schedule line={LineCode.SIL} dir="down" left="40px" />
          </Stop>
          <Stop stop={StopCode.WCH} coord={[1250, 1350]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.SIL} dir="down" top="20px" />
            <Schedule line={LineCode.SIL} dir="up" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.LET} coord={[1080, 1450]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.SIL} dir="down" top="20px" />
            <Schedule line={LineCode.SIL} dir="up" bottom="20px" />
          </Stop>
          <Stop stop={StopCode.SOH} coord={[980, 1450]}>
            <Name top="45px" />
            <ArrowRight top="4" left="12" />
            <ArrowLeft bottom="4" left="12" />
            <Schedule line={LineCode.SIL} dir="down" top="20px" />
            <Schedule line={LineCode.SIL} dir="up" bottom="20px" />
          </Stop>
          <EndTip coord={[930, 1450]} line={LineCode.SIL} />
          {/* DRL */}
          <Stop stop={StopCode.DIS} coord={[730, 920]}>
            <Name left="80px" bottom="20px" textAlign="left" />
            <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
            <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
            <Schedule line={LineCode.DRL} dir="up" left="40px" />
            <Schedule line={LineCode.DRL} dir="down" right="45px" />
          </Stop>
          <EndTip
            coord={[730, 970]}
            line={LineCode.DRL}
            flip
            transform="rotate(-90deg)"
          />
        </Wrapper>
      </DragContainer>
    </mapContext.Provider>
  ) : (
    <></>
  )
}

const Wrapper = styled(Box)`
  width: ${MAP_WIDTH}px;
  height: ${MAP_HEIGHT}px;
  position: relative;
`

const DragContainer = styled(Box)`
  width: ${CONTAINER_WIDTH}px;
  height: ${CONTAINER_HEIGHT}px;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
