import { Button, useColorMode } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { EAL } from './containers/EAL'
import { TML } from './containers/TML'

import { getLines } from './services/getLines'

export const App = () => {
  const { data = [] } = useQuery(['lines'], getLines)
  console.log(data)
  return (
    <>
      <TML />
      <EAL />
    </>
  )
}
