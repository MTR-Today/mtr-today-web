import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  nameEn: string
  nameZh: string
}

export const Stop: React.FC<Props> = ({ nameZh, nameEn }) => {
  return (
    <Flex
      flexShrink="0"
      alignItems="center"
      flexDirection="column"
      position="relative"
    >
      <Box
        w="18px"
        h="18px"
        bg="blackAlpha.500"
        borderWidth="3px"
        borderColor="white"
        borderRadius="100%"
      ></Box>
      <Box position="absolute" top="8" w="20" textAlign="center">
        <Text fontSize="xs">{nameZh}</Text>
        <Text fontSize="xs">{nameEn}</Text>
      </Box>
    </Flex>
  )
}
