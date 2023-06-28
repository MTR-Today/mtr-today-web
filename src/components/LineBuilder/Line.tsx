import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'

import { useLine } from '../../hooks/useLine'

export const Line = () => {
  const { color } = useLine()

  return (
    <Flex pos="relative" align="center" direction="column" color={color}>
      <Text pos="absolute" bottom="4" fontSize="xs">
        <ArrowLeftIcon />
      </Text>
      <Box flexShrink="0" w="80px" h="6px" bg={color} />
      <Text pos="absolute" top="4" fontSize="xs">
        <ArrowRightIcon />
      </Text>
    </Flex>
  )
}
