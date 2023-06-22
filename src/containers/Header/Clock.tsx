import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { useTime } from '../../hooks/useTime'

export const Clock = () => {
  const now = useTime()
  return (
    <Wrapper
      flexShrink="0"
      alignItems="center"
      px="4"
      borderRightRadius="md"
      fontSize="sm"
    >
      {now.format('YYYY-MM-DD HH:mm:ss')}
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  font-variant-numeric: tabular-nums;
`
