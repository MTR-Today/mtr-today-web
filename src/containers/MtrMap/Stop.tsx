import { Box, BoxProps, Skeleton, useColorMode } from '@chakra-ui/react'
import { useLocalStorageValue } from '@react-hookz/web'
import { Link } from '@tanstack/router'
import { StopCode, lines } from 'mtr-kit'
import { isEmpty, path } from 'ramda'
import { memo, useContext, useMemo, useState } from 'react'

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
  const { selectedLines, mode, selectedStop, fares, isFaresLoading } =
    useContext(mapContext)

  const { value: faresType } = useLocalStorageValue<FaresType>(
    LocalStorageKey.FARES_TYPE,
    {
      defaultValue: FaresType.OCTOPUS_CARD,
    }
  )

  const { value: faresPassengerType } =
    useLocalStorageValue<FaresPassengerType>(
      LocalStorageKey.FARES_PASSENGER_TYPE,
      {
        defaultValue: FaresPassengerType.ADULT,
      }
    )

  const isSelected = selectedStop === stop
  const shouldDisplayFare =
    mode === MapMode.FARES && selectedStop && !isSelected

  const isLineSelected = useMemo(() => {
    const stopLines = lines.filter(({ stops }) =>
      stops.some(item => item.stop === stop)
    )

    return (
      isEmpty(selectedLines) ||
      stopLines.some(line => selectedLines.includes(line.line))
    )
  }, [selectedLines, stop])

  const fareValue = useMemo(() => {
    if (!faresType || !faresPassengerType) return undefined
    const fareItem = fares.find(item => item.to === stop)
    return path<number>([faresType, faresPassengerType], fareItem)
  }, [fares, faresPassengerType, faresType, stop])

  return (
    <stopContext.Provider
      value={{
        stop,
        isSelected: isSelected || isHovering,
      }}
    >
      <Box
        pos="absolute"
        top={`${y}px`}
        left={`${x}px`}
        fontSize="xs"
        opacity={
          mode === MapMode.FARES || isSelected || isHovering || isLineSelected
            ? undefined
            : '.3'
        }
        style={{ transition: 'opacity .3s' }}
        {...props}
      >
        {children}
        <Box
          pos="absolute"
          transform={`translateY(-50%) translateX(-50%) ${
            isHovering || isSelected ? 'scale(1.2)' : ''
          }`}
          cursor="pointer"
          transition="all .5s"
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
              overflow="hidden"
              w={shouldDisplayFare ? '45px' : '18px'}
              h={shouldDisplayFare ? '' : '18px'}
              fontSize="xs"
              textAlign="center"
              borderWidth="3px"
              borderColor={colorMode === 'dark' ? 'white' : 'gray.700'}
              borderRadius={shouldDisplayFare ? 'lg' : '100%'}
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
              <Skeleton
                height="20px"
                lineHeight="20px"
                isLoaded={!isFaresLoading}
              >
                {shouldDisplayFare && `$ ${fareValue || '-'}`}
              </Skeleton>
            </Box>
          </Link>
        </Box>
      </Box>
    </stopContext.Provider>
  )
})
