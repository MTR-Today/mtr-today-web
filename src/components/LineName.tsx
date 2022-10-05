import { Box, Flex, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { useLine } from '../hooks/useLine'

export const LineName: React.FC = () => {
  const { color, nameEn, nameZh } = useLine()

  return (
    <Flex
      bg={color}
      w="110px"
      flexShrink="0"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <StyledHeading mb="4" as="h4" size="md">
        {nameZh}
      </StyledHeading>
      <Heading as="h4" size="xs">
        {nameEn}
      </Heading>
      <Flex
        w="full"
        mt="3"
        position="relative"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          w="5"
          h="5"
          borderRadius="100%"
          bg="white"
          borderWidth="4px"
          borderColor="gray.700"
          position="relative"
          zIndex="1"
        ></Box>
        <Box
          width="full"
          h="1"
          bg="white"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
        ></Box>
      </Flex>
    </Flex>
  )
}

const StyledHeading = styled(Heading)`
  writing-mode: vertical-rl;
  text-orientation: upright;
`
