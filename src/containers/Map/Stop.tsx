import { Box, BoxProps, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Stop as StopType } from '../../constants/stop'
import { stopContext } from '../../contexts/stopContext'

export const Stop: React.FC<
  BoxProps & { coord: [x: number, y: number]; stop: StopType }
> = ({ children, stop, coord: [x, y], ...props }) => {
  const { colorMode } = useColorMode()

  return (
    <stopContext.Provider value={{ stop }}>
      <Box position="absolute" top={`${x}px`} left={`${y}px`} {...props}>
        {children}
        <Box
          w="18px"
          h="18px"
          borderWidth="3px"
          borderColor={colorMode === 'dark' ? 'white' : 'gray.700'}
          borderRadius="100%"
          position="absolute"
          transform="translateY(-50%) translateX(-50%)"
          bg="Background"
        />
      </Box>
    </stopContext.Provider>
  )
}
