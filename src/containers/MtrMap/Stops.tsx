import { Fade } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { LineCode, StopCode } from 'mtr-kit'
import { isNil } from 'ramda'
import { memo } from 'react'

import { MapMode } from '../../constants/mapMode'
import { mapContext } from '../../contexts/mapContext'
import { listFares } from '../../queries/fares'
import { listSchedules } from '../../queries/schedules'
import { ArrowLeft } from './ArrowLeft'
import { ArrowRight } from './ArrowRight'
import { Name } from './Name'
import { Schedule } from './Schedule'
import { Stop } from './Stop'

type Props = { mode: MapMode; selectedStop: StopCode; hoveringLine?: LineCode }

export const Stops = memo(({ mode, selectedStop, hoveringLine }: Props) => {
  const isSchedule = mode === MapMode.SCHEDULES
  const isFareEnabled = mode === MapMode.FARES && !isNil(selectedStop)
  const isScheduleEnabled = mode === MapMode.SCHEDULES

  const { data: schedulesData, isLoading: isScheduleLoading } = useQuery({
    queryKey: ['schedules'],
    queryFn: () => listSchedules(),
    refetchInterval: 10000,
    refetchOnMount: true,
    enabled: isScheduleEnabled,
  })

  const { data: faresData, isLoading: isFareLoading } = useQuery({
    queryKey: ['fares', selectedStop],
    queryFn: () => listFares({ stop: selectedStop }),
    enabled: isFareEnabled,
  })

  return (
    <mapContext.Provider
      value={{
        hoveringLine,
        mode,
        selectedStop,
        schedules: schedulesData?.schedules || [],
        fares: faresData?.fares || [],
        isFaresLoading: isFareEnabled && isFareLoading,
        isScheduleLoading: isScheduleEnabled && isScheduleLoading,
      }}
    >
      {/* TWL */}
      <Stop stop={StopCode.TSW} coord={[450, 630]}>
        <Name {...(isSchedule ? { bottom: '35px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TWL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TWH} coord={[550, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
          <Schedule line={LineCode.TWL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.KWH} coord={[650, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
          <Schedule line={LineCode.TWL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.KWF} coord={[750, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
          <Schedule line={LineCode.TWL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.LAK} coord={[855, 633]}>
        <Name {...(isSchedule ? { bottom: '65px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="72px" />
          <ArrowLeft bottom="4" left="72px" />
          <Schedule line={LineCode.TCL} dir="up" bottom="40px" />
          <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
          <Schedule line={LineCode.TWL} dir="down" top="30px" />
          <Schedule line={LineCode.TCL} dir="down" top="50px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.MEF} coord={[1000, 630]}>
        <Name
          {...(isSchedule
            ? { bottom: '45px', left: '60px' }
            : { bottom: '35px', left: '60px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
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
        </Fade>
      </Stop>
      <Stop stop={StopCode.LCK} coord={[1130, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
          <Schedule line={LineCode.TWL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.CSW} coord={[1230, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
          <Schedule line={LineCode.TWL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SSP} coord={[1330, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.TWL} dir="up" bottom="20px" />
          <Schedule line={LineCode.TWL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.PRE} coord={[1393, 690]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TWL} dir="up" left="40px" top="10px" />
          <Schedule line={LineCode.KTL} dir="up" left="40px" bottom="10px" />
          <Schedule line={LineCode.TWL} dir="down" right="40px" top="10px" />
          <Schedule line={LineCode.KTL} dir="down" right="40px" bottom="10px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.MOK} coord={[1393, 760]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TWL} dir="up" left="40px" top="10px" />
          <Schedule line={LineCode.KTL} dir="up" left="40px" bottom="10px" />
          <Schedule line={LineCode.TWL} dir="down" right="40px" top="10px" />
          <Schedule line={LineCode.KTL} dir="down" right="40px" bottom="10px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.YMT} coord={[1393, 830]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TWL} dir="up" left="40px" top="10px" />
          <Schedule line={LineCode.KTL} dir="up" left="40px" bottom="10px" />
          <Schedule line={LineCode.TWL} dir="down" right="40px" top="10px" />
          <Schedule line={LineCode.KTL} dir="down" right="40px" bottom="10px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.JOR} coord={[1390, 900]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TWL} dir="up" left="40px" />
          <Schedule line={LineCode.TWL} dir="down" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TST} coord={[1390, 970]}>
        <Name
          {...(isSchedule
            ? { right: '65px', bottom: '24px' }
            : { right: '65px', bottom: '0' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TWL} dir="up" left="40px" />
          <Schedule line={LineCode.TWL} dir="down" right="40px" />
        </Fade>
      </Stop>
      {/* KTL */}
      <Stop stop={StopCode.LAT} coord={[2240, 830]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.KTL} dir="up" right="40px" />
          <Schedule line={LineCode.KTL} dir="down" left="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.KWT} coord={[2240, 760]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.KTL} dir="up" right="40px" />
          <Schedule line={LineCode.KTL} dir="down" left="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.NTK} coord={[2240, 690]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.KTL} dir="up" right="40px" />
          <Schedule line={LineCode.KTL} dir="down" left="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.KOB} coord={[2180, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.KTL} dir="up" top="20px" />
          <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.CHH} coord={[2080, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.KTL} dir="up" top="20px" />
          <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.DIH} coord={[1950, 630]}>
        <Name
          {...(isSchedule
            ? { bottom: '45px', left: '60px' }
            : { bottom: '35px', left: '60px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <Schedule line={LineCode.KTL} dir="up" top="20px" left="35px" />
          <Schedule line={LineCode.KTL} dir="down" bottom="20px" right="35px" />
          <Schedule line={LineCode.TML} dir="up" top="20px" right="35px" />
          <Schedule line={LineCode.TML} dir="down" bottom="20px" left="35px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.WTS} coord={[1820, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.KTL} dir="up" top="20px" />
          <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.LOF} coord={[1720, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.KTL} dir="up" top="20px" />
          <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.KOT} coord={[1590, 630]}>
        <Name
          {...(isSchedule
            ? { bottom: '45px', left: '60px' }
            : { bottom: '35px', left: '60px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="10" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="10" left="3" transform="rotate(90deg)" />
          <ArrowRight top="4" left="20" />
          <ArrowLeft bottom="4" left="20" />
          <Schedule line={LineCode.EAL} dir="up" bottom="20px" left="35px" />
          <Schedule line={LineCode.KTL} dir="up" top="20px" left="35px" />
          <Schedule line={LineCode.EAL} dir="down" top="20px" right="35px" />
          <Schedule line={LineCode.KTL} dir="down" bottom="20px" right="35px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SKM} coord={[1460, 630]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.KTL} dir="down" bottom="20px" />
          <Schedule line={LineCode.KTL} dir="up" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.HOM} coord={[1720, 873]}>
        <Name
          {...(isSchedule
            ? { bottom: '35px', right: '75px' }
            : { bottom: '35px', right: '30px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" right="12" />
          <ArrowLeft bottom="4" right="12" />
          <Schedule line={LineCode.KTL} dir="up" bottom="20px" />
          <Schedule line={LineCode.TML} dir="up" bottom="40px" />
          <Schedule line={LineCode.KTL} dir="down" top="20px" />
          <Schedule line={LineCode.TML} dir="down" top="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.WHA} coord={[1780, 950]}>
        <Name
          {...(isSchedule ? { left: '120px' } : { left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.KTL} dir="up" left="40px" />
        </Fade>
      </Stop>
      {/* EAL */}
      <Stop stop={StopCode.LMC} coord={[930, 330]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.EAL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.LOW} coord={[1000, 270]}>
        <Name {...(isSchedule ? { bottom: '35px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.EAL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SHS} coord={[1130, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
          <Schedule line={LineCode.EAL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.FAN} coord={[1230, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
          <Schedule line={LineCode.EAL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TWO} coord={[1330, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
          <Schedule line={LineCode.EAL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TAP} coord={[1430, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
          <Schedule line={LineCode.EAL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.UNI} coord={[1530, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.EAL} dir="up" bottom="20px" />
          <Schedule line={LineCode.EAL} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.RAC} coord={[1680, 360]}>
        <Name
          {...(isSchedule
            ? { bottom: '35px', left: '65px' }
            : { bottom: '0', left: '65px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.EAL} dir="up" left="40px" />
          <Schedule line={LineCode.EAL} dir="down" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.FOT} coord={[1590, 330]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.EAL} dir="up" left="40px" />
          <Schedule line={LineCode.EAL} dir="down" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SHT} coord={[1590, 430]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.EAL} dir="up" left="40px" />
          <Schedule line={LineCode.EAL} dir="down" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TAW} coord={[1593, 500]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="6" left="4" transform="rotate(90deg)" />
          <ArrowRight top="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="6" left="4" transform="rotate(90deg)" />
          <Schedule line={LineCode.TML} dir="up" bottom="10px" right="40px" />
          <Schedule line={LineCode.EAL} dir="up" top="10px" left="40px" />
          <Schedule line={LineCode.TML} dir="down" bottom="10px" left="40px" />
          <Schedule line={LineCode.EAL} dir="down" top="10px" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.MKK} coord={[1590, 760]}>
        <Name
          {...(isSchedule ? { left: '120px' } : { left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="6" left="4" transform="rotate(90deg)" />
          <Schedule line={LineCode.EAL} dir="up" left="40px" />
          <Schedule line={LineCode.EAL} dir="down" right="40px" />
        </Fade>
      </Stop>
      {/* TML */}
      <Stop stop={StopCode.TUM} coord={[250, 450]}>
        <Name
          {...(isSchedule ? { right: '65px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TML} dir="down" left="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SIH} coord={[250, 380]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TML} dir="up" right="40px" />
          <Schedule line={LineCode.TML} dir="down" left="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TIS} coord={[325, 240]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" right="12" />
          <ArrowLeft bottom="4" right="12" />
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.LOP} coord={[400, 310]}>
        <Name
          {...(isSchedule ? { left: '120px' } : { left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TML} dir="up" left="40px" />
          <Schedule line={LineCode.TML} dir="down" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.YUL} coord={[400, 380]}>
        <Name
          {...(isSchedule ? { left: '120px' } : { left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TML} dir="up" left="40px" />
          <Schedule line={LineCode.TML} dir="down" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.KSR} coord={[400, 450]}>
        <Name
          {...(isSchedule ? { left: '130px' } : { left: '80px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TML} dir="up" left="40px" />
          <Schedule line={LineCode.TML} dir="down" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TWW} coord={[470, 530]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.NAC} coord={[997, 730]}>
        <Name
          {...(isSchedule ? { left: '120px' } : { left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.TML} dir="up" left="40px" bottom="10px" />
          <Schedule line={LineCode.TCL} dir="up" left="40px" top="10px" />
          <Schedule line={LineCode.TCL} dir="down" right="50px" top="10px" />
          <Schedule line={LineCode.TML} dir="down" right="50px" bottom="10px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.AUS} coord={[1220, 970]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="4" right="30px" transform="rotate(45deg)" />
          <ArrowLeft bottom="8" right="14px" transform="rotate(45deg)" />
          <Schedule line={LineCode.TML} dir="up" left="40px" bottom="2" />
          <Schedule line={LineCode.TML} dir="down" right="40px" top="2" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.ETS} coord={[1455, 1020]}>
        <Name
          {...(isSchedule
            ? { top: '30px', right: '90px' }
            : { top: '30px', right: '45px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="10" />
          <ArrowLeft bottom="4" left="10" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.HUH} coord={[1560, 984]}>
        <Name
          {...(isSchedule
            ? { top: '30px', left: '110px' }
            : { top: '30px', left: '65px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineCode.EAL} dir="up" top="40px" left="30px" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" right="30px" />
          <Schedule line={LineCode.EAL} dir="down" bottom="40px" right="30px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" left="30px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.EXC} coord={[1455, 1095]}>
        <Name
          {...(isSchedule ? { left: '125px' } : { left: '85px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineCode.EAL} dir="up" top="15px" left="35px" />
          <Schedule line={LineCode.EAL} dir="down" bottom="15px" right="35px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TKW} coord={[1850, 850]}>
        <Name
          {...(isSchedule
            ? { top: '45px', left: '65px' }
            : { top: '30px', left: '55px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" right="30px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" left="30px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SUW} coord={[1910, 790]}>
        <Name
          {...(isSchedule
            ? { top: '45px', left: '65px' }
            : { top: '30px', left: '55px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" right="30px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" left="30px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.KAT} coord={[1950, 700]}>
        <Name
          {...(isSchedule ? { left: '120px' } : { left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.TML} dir="up" right="40px" />
          <Schedule line={LineCode.TML} dir="down" left="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.HIK} coord={[1820, 540]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TML} dir="up" top="20px" />
          <Schedule line={LineCode.TML} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.CKT} coord={[1820, 430]}>
        <Name
          {...(isSchedule ? { left: '130px' } : { left: '75px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.TML} dir="up" right="40px" />
          <Schedule line={LineCode.TML} dir="down" left="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.STW} coord={[1820, 360]}>
        <Name
          {...(isSchedule ? { left: '120px' } : { left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TML} dir="up" right="40px" />
          <Schedule line={LineCode.TML} dir="down" left="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.CIO} coord={[1880, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SHM} coord={[1980, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TSH} coord={[2080, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.HEO} coord={[2180, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.MOS} coord={[2280, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TML} dir="up" bottom="20px" />
          <Schedule line={LineCode.TML} dir="down" top="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.WKS} coord={[2380, 270]}>
        <Name {...(isSchedule ? { bottom: '45px' } : { bottom: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.TML} dir="up" bottom="20px" />
        </Fade>
      </Stop>
      {/* ISL */}
      <Stop stop={StopCode.KET} coord={[830, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.HKU} coord={[930, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SYP} coord={[1030, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SHW} coord={[1130, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.CEN} coord={[1230, 1153]}>
        <Name {...(isSchedule ? { top: '65px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TWL} dir="up" top="40px" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.ADM} coord={[1330, 1159]}>
        <Name {...(isSchedule ? { top: '105px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.TWL} dir="up" top="60px" />
          <Schedule line={LineCode.EAL} dir="up" top="40px" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          <Schedule line={LineCode.TWL} dir="down" bottom="40px" />
          <Schedule line={LineCode.SIL} dir="down" top="80px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.WAC} coord={[1460, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.CAB} coord={[1560, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TIH} coord={[1660, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.FOH} coord={[1760, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.NOP} coord={[1860, 1153]}>
        <Name {...(isSchedule ? { top: '65px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TKL} dir="up" top="40px" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.QUB} coord={[1980, 1153]}>
        <Name {...(isSchedule ? { top: '65px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="60px" />
          <ArrowLeft bottom="4" left="60px" />
          <Schedule line={LineCode.TKL} dir="up" top="40px" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
          <Schedule line={LineCode.TKL} dir="down" bottom="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TAK} coord={[2100, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SWH} coord={[2200, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SKW} coord={[2300, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.HFC} coord={[2400, 1156]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.ISL} dir="up" top="20px" />
          <Schedule line={LineCode.ISL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.CHW} coord={[2500, 1250]}>
        <Name
          {...(isSchedule ? { right: '65px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.ISL} dir="down" left="40px" />
        </Fade>
      </Stop>
      {/* TKL */}
      <Stop stop={StopCode.YAT} coord={[2300, 903]}>
        <Name {...(isSchedule ? { top: '65px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TKL} dir="up" top="20px" />
          <Schedule line={LineCode.KTL} dir="up" top="40px" />
          <Schedule line={LineCode.KTL} dir="down" bottom="40px" />
          <Schedule line={LineCode.TKL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TIK} coord={[2400, 903]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TKL} dir="up" top="20px" />
          <Schedule line={LineCode.KTL} dir="down" bottom="40px" />
          <Schedule line={LineCode.TKL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TKO} coord={[2500, 906]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.TKL} dir="up" top="20px" />
          <Schedule line={LineCode.TKL} dir="down" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.HAH} coord={[2600, 830]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TKL} dir="up" left="40px" />
          <Schedule line={LineCode.TKL} dir="down" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.POA} coord={[2600, 760]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TKL} dir="down" right="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.LHP} coord={[2600, 990]}>
        <Name
          {...(isSchedule ? { right: '65px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TKL} dir="down" left="40px" />
        </Fade>
      </Stop>
      {/* TCL */}
      <Stop stop={StopCode.TUC} coord={[526, 940]}>
        <Name
          {...(isSchedule
            ? { bottom: '5px', left: '80px' }
            : { bottom: '0', left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="10" left="10px" transform="rotate(-45deg)" />
          <Schedule line={LineCode.TCL} dir="down" top="20px" left="30px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SUN} coord={[642, 830]}>
        <Name
          {...(isSchedule
            ? { bottom: '5px', left: '80px' }
            : { bottom: '0', left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="10" right="4px" transform="rotate(-45deg)" />
          <Schedule line={LineCode.DRL} dir="up" bottom="30px" right="48px" />
          <Schedule line={LineCode.TCL} dir="up" bottom="10px" right="48px" />
          <Schedule line={LineCode.TCL} dir="down" top="20px" left="30px" />
          <Schedule line={LineCode.DRL} dir="down" top="40px" left="30px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.TSY} coord={[752, 720]}>
        <Name
          {...(isSchedule
            ? { bottom: '5px', left: '80px' }
            : { bottom: '0', left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineCode.AEL} dir="up" bottom="40px" right="30px" />
          <Schedule line={LineCode.TCL} dir="up" bottom="20px" right="30px" />
          <Schedule line={LineCode.TCL} dir="down" top="20px" left="30px" />
          <Schedule line={LineCode.AEL} dir="down" top="40px" left="30px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.OLY} coord={[994, 870]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="6" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.TCL} dir="up" left="40px" />
          <Schedule line={LineCode.TCL} dir="down" right="45px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.KOW} coord={[991, 970]}>
        <Name
          {...(isSchedule ? { right: '120px' } : { right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft top="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.AEL} dir="up" left="40px" top="10px" />
          <Schedule line={LineCode.TCL} dir="up" left="40px" bottom="10px" />
          <Schedule line={LineCode.AEL} dir="down" right="40px" top="10px" />
          <Schedule line={LineCode.TCL} dir="down" right="40px" bottom="10px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.HOK} coord={[1185, 1105]}>
        <Name left="60px" textAlign="left" />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.TCL} dir="up" bottom="20px" />
          <Schedule line={LineCode.AEL} dir="up" bottom="40px" />
        </Fade>
      </Stop>
      {/* AEL */}
      <Stop stop={StopCode.AWE} coord={[542, 810]}>
        <Name
          {...(isSchedule
            ? { bottom: '10px', right: '110px' }
            : { bottom: '0', right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <Schedule line={LineCode.AEL} dir="down" bottom="20px" right="30px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.AIR} coord={[492, 860]}>
        <Name
          {...(isSchedule
            ? { top: '5px', right: '80px' }
            : { top: '0', right: '70px' })}
          textAlign="right"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="4" left="30px" transform="rotate(-45deg)" />
          <ArrowLeft bottom="8" left="14px" transform="rotate(-45deg)" />
          <Schedule line={LineCode.AEL} dir="down" bottom="20px" right="30px" />
          <Schedule line={LineCode.AEL} dir="up" top="20px" left="30px" />
        </Fade>
      </Stop>
      {/* SIL */}
      <Stop stop={StopCode.OCP} coord={[1400, 1290]}>
        <Name
          {...(isSchedule ? { left: '120px' } : { left: '70px' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="6" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="6" left="4" transform="rotate(90deg)" />
          <Schedule line={LineCode.SIL} dir="up" right="40px" />
          <Schedule line={LineCode.SIL} dir="down" left="40px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.WCH} coord={[1250, 1350]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.SIL} dir="down" top="20px" />
          <Schedule line={LineCode.SIL} dir="up" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.LET} coord={[1080, 1450]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.SIL} dir="down" top="20px" />
          <Schedule line={LineCode.SIL} dir="up" bottom="20px" />
        </Fade>
      </Stop>
      <Stop stop={StopCode.SOH} coord={[980, 1450]}>
        <Name {...(isSchedule ? { top: '45px' } : { top: '35px' })} />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight top="4" left="12" />
          <ArrowLeft bottom="4" left="12" />
          <Schedule line={LineCode.SIL} dir="down" top="20px" />
          <Schedule line={LineCode.SIL} dir="up" bottom="20px" />
        </Fade>
      </Stop>
      {/* DRL */}
      <Stop stop={StopCode.DIS} coord={[730, 920]}>
        <Name
          {...(isSchedule
            ? { left: '80px', bottom: '20px' }
            : { left: '80px', bottom: '0' })}
          textAlign="left"
        />
        <Fade in={isSchedule} unmountOnExit>
          <ArrowRight bottom="9" right="3" transform="rotate(90deg)" />
          <ArrowLeft bottom="9" left="3" transform="rotate(90deg)" />
          <Schedule line={LineCode.DRL} dir="up" left="40px" />
          <Schedule line={LineCode.DRL} dir="down" right="45px" />
        </Fade>
      </Stop>
    </mapContext.Provider>
  )
})
