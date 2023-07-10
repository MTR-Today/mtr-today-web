import { Box, BoxProps, useColorMode } from '@chakra-ui/react'
import { useLocalStorageValue } from '@react-hookz/web'
import { Link } from '@tanstack/router'
import { LineCode, StopCode } from 'mtr-kit'
import { path } from 'ramda'
import { memo, useContext, useMemo, useState } from 'react'
import { deepForEach } from 'react-children-utilities'

import { FaresPassengerType } from '../../constants/faresPassengerType'
import { FaresType } from '../../constants/faresType'
import { LocalStorageKey } from '../../constants/localStorageKey'
import { MapMode } from '../../constants/mapMode'
import { mapContext } from '../../contexts/mapContext'
import { stopContext } from '../../contexts/stopContext'

export const Stop: React.FC<
  BoxProps & { coord: [x: number, y: number]; stop: StopCode }
> = memo(({ children, stop, coord: [x, y], ...props }) => {
  const [isHovering, setHovering] = useState(false)
  const { colorMode } = useColorMode()
  const { hoveringLine, mode, selectedStop, fares } = useContext(mapContext)
  const isSelected = selectedStop === stop

  const { value: faresType } = useLocalStorageValue<FaresType>(
    LocalStorageKey.FARES_TYPE
  )

  const { value: faresPassengerType } =
    useLocalStorageValue<FaresPassengerType>(
      LocalStorageKey.FARES_PASSENGER_TYPE,
      {
        defaultValue: FaresPassengerType.ADULT,
      }
    )

  const lineList = useMemo<LineCode[]>(() => {
    if (!Array.isArray(children)) return []
    let lines: LineCode[] = []
    deepForEach(children, child => {
      if ((child as any)?.props?.line) {
        // eslint-disable-next-line fp/no-mutation
        lines = [...lines, (child as any)?.props?.line]
      }
    })

    return lines
  }, [children])

  const fareItem = useMemo(
    () => fares.find(item => item.to === stop),
    [fares, stop]
  )

  const fareValue =
    faresType && faresPassengerType
      ? path<number>([faresType, faresPassengerType], fareItem)
      : undefined

  const shouldDisplayFare =
    selectedStop && mode === MapMode.FARES && selectedStop !== stop

  return (
    <stopContext.Provider
      value={{
        stop,
        hovering: Boolean(
          isHovering || (hoveringLine && lineList.includes(hoveringLine))
        ),
        lineHovering: Boolean(hoveringLine && lineList.includes(hoveringLine)),
        setHovering,
      }}
    >
      <Link
        to={
          mode === MapMode.SCHEDULES
            ? '/stops/$stop/schedules'
            : mode === MapMode.FARES
            ? '/fares/$stop'
            : ''
        }
        params={{ stop }}
      >
        <Box
          pos="absolute"
          top={`${y}px`}
          left={`${x}px`}
          fontSize="xs"
          opacity={
            hoveringLine && !lineList.includes(hoveringLine) ? '.3' : undefined
          }
          cursor="pointer"
          style={{ transition: 'opacity .3s' }}
          {...props}
        >
          {children}
          <Box
            pos="absolute"
            overflow="hidden"
            w={shouldDisplayFare ? '35px' : '18px'}
            h={shouldDisplayFare ? '' : '18px'}
            fontSize="xs"
            textAlign="center"
            borderWidth="3px"
            borderColor={colorMode === 'dark' ? 'white' : 'gray.700'}
            borderRadius={shouldDisplayFare ? 'lg' : '100%'}
            transform={`translateY(-50%) translateX(-50%) ${
              isHovering || isSelected ? 'scale(1.2)' : ''
            }`}
            whiteSpace="nowrap"
            transition="all .5s"
            onMouseEnter={() => {
              setHovering(true)
            }}
            onMouseLeave={() => {
              setHovering(false)
            }}
            {...(isSelected
              ? { bg: colorMode === 'dark' ? 'blue.300' : 'blue.300' }
              : { bg: 'chakra-body-bg' })}
          >
            {shouldDisplayFare && (fareValue || '-')}
          </Box>
        </Box>
      </Link>
    </stopContext.Provider>
  )
})
