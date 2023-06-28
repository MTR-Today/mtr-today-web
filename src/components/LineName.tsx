import { Box, Flex, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { useLine } from '../hooks/useLine'

export const LineName: React.FC = () => {
  const { color, nameEn, nameZh } = useLine()

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      flexShrink="0"
      w="120px"
      color="white"
      bg={color}
    >
      <StyledHeading mb="4" as="h4" size="md">
        {nameZh}
      </StyledHeading>
      <Heading as="h4" textAlign="center" size="xs">
        {nameEn}
      </Heading>
      <Flex pos="relative" align="center" direction="column" w="full" mt="3">
        <Box
          pos="relative"
          zIndex="1"
          w="5"
          h="5"
          bg="white"
          borderWidth="4px"
          borderColor="gray.700"
          borderRadius="100%"
        />
        <Box
          pos="absolute"
          top="50%"
          w="full"
          h="1"
          bg="white"
          transform="translateY(-50%)"
        />
      </Flex>
    </Flex>
  )
}

const StyledHeading = styled(Heading)`
  writing-mode: vertical-rl;
  text-orientation: upright;
`
