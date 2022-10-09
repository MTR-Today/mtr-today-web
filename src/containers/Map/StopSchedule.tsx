import { Box, BoxProps, Flex, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Line } from '../../constants/line'
import { lineConfigsContext } from '../../contexts/lineConfigsContext'
import { stopContext } from '../../contexts/stopContext'
import { getLineConfig } from '../../services/getLineConfig'

export const StopSchedule: React.FC<BoxProps & { line: Line }> = ({
  line,
  ...props
}) => {
  const { stop } = useContext(stopContext)
  const configs = useContext(lineConfigsContext)

  return (
    <Box position="absolute" {...props}>
      <Flex
        position="absolute"
        transform="translateY(-50%) translateX(-50%)"
        w="56px"
        textAlign="center"
        fontSize="xs"
      >
        <Box
          display="inline-block"
          w="4"
          h="4"
          textAlign="center"
          borderRadius="100%"
          flexShrink="0"
          color="white"
          bg={configs[line]?.color}
        >
          {1}
        </Box>
        <Clock w="100%" textAlign="right">
          99:99
        </Clock>
      </Flex>
    </Box>
  )
}

const Clock = styled(Box)`
  font-variant-numeric: tabular-nums;
`
